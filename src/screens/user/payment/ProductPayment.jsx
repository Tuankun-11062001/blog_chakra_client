import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import "./productPayment.css";

const motionBox = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export default function ProductPayment({ item }) {
  return (
    <Container pos="relative" maxW="full" p="unset">
      <Image src={item.img} w="full" h="45rem" objectFit="cover" />
      <Box
        pos="absolute"
        bottom="2rem"
        left="2rem"
        right="2rem"
        bg="gray.500"
        p="1rem 2rem"
        className="box"
      >
        <Heading color="white" mb="1rem">
          {item.title}
        </Heading>
        <Flex color="white" flexDir="column" gap="0.5rem">
          <Text>Price : {item.originPrice}k</Text>
          <Text>Quality : {item.quality}</Text>
          <Text>Category : {item.category}</Text>
        </Flex>
      </Box>
    </Container>
  );
}
