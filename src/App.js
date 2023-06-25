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

function App() {
  const [cartList, setCartList] = useState([]);

  const handleAddToCart = (productId) => {
    let index = cartList.findIndex(
      (cartItem) => cartItem.product.id === productId
    );
    let addProduct = products.find((product) => product.id === productId);

    // console.log("ProductId: ", productId, " Added Product: ", addProduct);

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

  const handleChangeQuantity = (type, productId) => {
    // console.log("handle", type, "to quantity  of product", productId);

    let index = cartList.findIndex((item) => item.product.id === productId);
    let updatedCartList = [...cartList];

    if (type === "increment") {
      updatedCartList[index].quantity = cartList[index].quantity + 1;
    } else if (type === "decrement") {
      if (cartList[index].quantity - 1 === 0) {
        handleDeleteCartItem(productId);
        return;
      } else {
        updatedCartList[index].quantity = cartList[index].quantity - 1;
      }
    }

    setCartList(updatedCartList);
  };

  const handleDeleteCartItem = (productId) => {
    // console.log("handle delete of product", productId);

    let updatedCartList = cartList.filter(
      (item) => item.product.id !== productId
    );

    setCartList(updatedCartList);
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
        <Route
          path="/cart"
          element={
            <Cart
              cartList={cartList}
              // Both, Arrow function & referencing function works
              onChangeQuantity={(type, id) => handleChangeQuantity(type, id)}
              onClickDelete={handleDeleteCartItem}
            />
          }
          exact
        />
        <Route path="/" Component={Home} exact />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
