import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Favourite() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Box>
        <Heading fontSize="1.4rem">Blog Favourite</Heading>
      </Box>
    </Container>
  );
}
