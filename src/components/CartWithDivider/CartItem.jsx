import {
  Button,
  CloseButton,
  Flex,
  HStack,
  Input,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const QuantitySelect = (props) => {
  const { id, quantity, onChangeQuantity } = props;

  return (
    <>
      <HStack paddingX={5}>
        <Button size={"sm"} onClick={() => onChangeQuantity("increment", id)}>
          <AddIcon />
        </Button>
        <Input
          readOnly
          size={"sm"}
          maxW={12}
          alignContent={"center"}
          placeholder={quantity}
        />
        <Button size={"sm"} onClick={() => onChangeQuantity("decrement", id)}>
          <MinusIcon />
        </Button>
      </HStack>
    </>
  );
};

export const CartItem = (props) => {
  const {
    id,
    title,
    description,
    images,
    price,
    currency,

    quantity,

    onChangeQuantity,
    onClickDelete,
  } = props;

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        title={title}
        description={description}
        image={images[0]}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          id={id}
          quantity={quantity}
          onChangeQuantity={(type, id) => onChangeQuantity(type, id)}
        />
        <PriceTag price={price * quantity} currency={currency} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={() => onClickDelete(id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          quantity={quantity}
          onChangeQuantity={(type, id) => onChangeQuantity(type, id)}
        />
        <PriceTag price={price * quantity} currency={currency} />
      </Flex>
    </Flex>
  );
};
