import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiGift } from "react-icons/fi";

export const CartProductMeta = (props) => {
  const { image, title, description } = props;
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={title}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{title}</Text>
          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            {description.length <= 60
              ? description
              : description.substring(0, 60) + "..."}
          </Text>
        </Stack>

        <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
          <Icon as={FiGift} boxSize="4" />
          <Link fontSize="sm" textDecoration="underline">
            Add gift wrapping
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};
