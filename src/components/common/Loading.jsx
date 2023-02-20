import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Flex
      pos="fixed"
      zIndex={10}
      bg="white"
      h="100vh"
      top={0}
      left={0}
      bottom={0}
      right={0}
      maxW="full"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      gap="1rem"
    >
      <Spinner w="5rem" h="5rem" />
      <Text fontSize="2rem">Loading...</Text>
    </Flex>
  );
}
