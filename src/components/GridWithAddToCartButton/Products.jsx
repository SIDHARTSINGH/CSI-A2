import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";

export const Products = (props) => {
  const { onAdd, products } = props;

  return (
    <Box
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
          <ProductCard
            key={product.id}
            product={product}
            onAdd={() => onAdd(product.id)}
          />
        ))}
      </ProductGrid>
    </Box>
  );
};
