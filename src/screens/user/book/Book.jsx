import {
  Box,
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
import BookSlider from "./BookSlider";
import { books } from "../../../dataTest";
import BookItem from "./BookItem";

export default function Book() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Flex gap="2rem" align="center" h="30rem">
        <Box flex="1">
          <Heading fontSize="4rem" color="blackAlpha.800" mb="1rem">
            New & Trending
          </Heading>
          <Text fontSize="1.6rem" color="gray.600" mb="1rem">
            Explorer new world from authors
          </Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<BsSearch />} />
            <Input placeholder="Name book here ...." />
          </InputGroup>
        </Box>
        <Box w="80rem" p="1rem">
          <BookSlider />
        </Box>
      </Flex>

      {/* lastest book */}

      <Box>
        <Heading>Lastest books</Heading>
        <Flex mt="2rem" wrap="wrap">
          {books.map((item) => (
            <BookItem
              item={item}
              key={item.id}
              w={"calc(16.66% - 2rem)"}
              m={"1rem"}
              slide={false}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}
