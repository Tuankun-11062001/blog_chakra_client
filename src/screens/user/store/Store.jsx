import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Product from "../../../components/common/Product";
import { products } from "../../../dataTest";

export default function Store() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      {/* search product */}

      <Center>
        <InputGroup w="xl">
          <InputLeftElement pointerEvents="none" children={<BsSearch />} />
          <Input placeholder="search here..." />
        </InputGroup>
      </Center>

      {/* latest list product */}

      <Box>
        <Heading fontSize="1.8rem" marginBlock="2rem">
          Latest Product
        </Heading>

        <Flex wrap="wrap" marginInline="-1rem">
          {products
            .filter((item) => item.type[0] === "new")
            .map((item) => (
              <Product item={item} />
            ))}
        </Flex>
      </Box>
    </Container>
  );
}
