import {
  Box,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import Blog from "../../../components/common/Blog";
import { data } from "../../../dataTest";

export default function DetailCategory() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Flex justify="center" align="center" pos="relative">
        <Heading fontSize="1.5rem" pos="absolute" left="0">
          All blog of "Healthy"
        </Heading>
        <InputGroup w="xl">
          <InputLeftElement pointerEvents="none" children={<BsSearch />} />
          <Input placeholder="search here..." />
        </InputGroup>
      </Flex>

      {/* list blog */}

      <Flex wrap="wrap" mt="3rem" marginInline="-1rem">
        {data.map((item) => (
          <Blog item={item} first={false} w="calc(20% - 2rem)" m="1rem" />
        ))}
      </Flex>
    </Container>
  );
}
