import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";

export const Cart = ({ cartList }) => {
  console.log(cartList);
  return (
    <>
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
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
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartList.length === 0 ? "Zero" : cartList.length}{" "}
              items)
            </Heading>

            <Stack spacing="6">
              {/* {cartList.map((item) => (
                <CartItem
                  key={item.product.id}
                  {...item.product}
                  quantity={item.quantity}
                />
              ))} */}
              {cartList[1] && (
                <CartItem key={1} {...cartList[1]} quantity={cartList[1]} />
              )}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("teal.500", "teal.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};
