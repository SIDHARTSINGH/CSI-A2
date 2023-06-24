import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Cart } from "./components/CartWithDivider/Cart";
import { Products } from "./components/GridWithAddToCartButton/Products";
import { Home } from "./components/Home";
import { products } from "./components/GridWithAddToCartButton/_data";
import { CartItem } from "./components/CartWithDivider/CartItem";

function App() {
  const [cartList, setCartList] = useState([]);

  const handleAddToCart = (productId) => {
    console.log("Added Product: ", productId);

    let index = cartList.findIndex(
      (cartItem) => cartItem.product.id === productId
    );
    let addProduct = products.filter((product) => product.id === productId);
    console.log("Added Product: ", addProduct);
    if (index === -1) {
      setCartList([...cartList, { product: addProduct, quantity: 1 }]);
      // console.log(cartList);
    } else {
      let updatedCartList = [...cartList];
      updatedCartList[index].quantity = cartList[index].quantity + 1;

      setCartList(updatedCartList);
      // console.log(updatedCartList, cartList);
    }
  };

  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route
          path="/products"
          element={<Products products={products} onAdd={handleAddToCart} />}
          exact
        />
        <Route path="/about" Component={""} exact />
        <Route path="/cart" element={<Cart cartList={cartList} />} exact />
        <Route path="/" Component={Home} exact />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

{
  /* <Box
        maxW="7xl"
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box> */
}
