import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Cart } from "./components/CartWithDivider/Cart";
import { Products } from "./components/GridWithAddToCartButton/Products";
import { Home } from "./components/Home";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Routes>
        <Route path="/products" Component={Products} exact />
        <Route path="/about" Component={""} />
        <Route path="/cart" Component={Cart} exact />
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
