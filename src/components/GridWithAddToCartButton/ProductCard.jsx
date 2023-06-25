import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { FiLogIn } from "react-icons/fi";
import { useState } from "react";

export const ProductCard = (props) => {
  const { product, cartList, onAdd, rootProps } = props;
  const { id, title, images, price, salePrice, rating } = product;

  return (
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
      // {...rootProps}
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={images[0]}
            alt={title}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{
              base: "md",
              md: "xl",
            }}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${title} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="teal" width="full" onClick={() => onAdd()}>
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  );
};
