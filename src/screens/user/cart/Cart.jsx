import { Box, Button, Center, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClientStore } from "../../../store/client/hook";
import CartProduct from "./CartProduct";

export default function Cart() {
  // using local store
  const [stateClient, dispatchClient] = useClientStore();

  const { buy } = stateClient.store;

  console.log(buy);
  // total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(buy.reduce((total, item) => total + parseInt(item.price), 0));
  }, [buy]);

  // payment button
  const navigate = useNavigate();

  const paymentBtn = () => {
    navigate("/payment");
  };
  return (
    <Container
      pos="absolute"
      top="10rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      {/* container cart*/}
      <Box
        pos="relative"
        border="1px"
        borderColor="gray.400"
        p="3rem 2rem"
        borderRadius="1rem"
      >
        {/* header cart */}

        <Flex
          pos="absolute"
          top="-1.8rem"
          left="2rem"
          right="2rem"
          justify="space-between"
        >
          <Center
            gap="1rem"
            fontSize="1.5rem"
            p="0.5rem 1rem"
            bg="white"
            border="1px"
            borderColor="gray.400"
          >
            <Text>My Cart</Text>
            <Text
              fontSize="1rem"
              w="2rem"
              h="2rem"
              borderRadius="50%"
              bg="red.400"
              textAlign="center"
              lineHeight="2"
              color="white"
            >
              {buy.length}
            </Text>
          </Center>
          <Flex
            fontSize="1.5rem"
            p="0.5rem 1rem"
            bg="white"
            gap="0.5rem"
            border="1px"
            borderColor="gray.400"
            align="center"
          >
            <Text fontSize="1.3rem">Total : </Text>
            <Text>{total}k VND</Text>
          </Flex>
        </Flex>

        {/* context cart */}

        <Flex wrap="wrap" h="35rem" overflow="auto">
          {buy.map((item) => (
            <CartProduct item={item} key={item.id} />
          ))}
        </Flex>

        {/* payment */}

        <Button
          pos="absolute"
          bottom="-1.5rem"
          right="2rem"
          p="1.5rem"
          fontSize="1.5rem"
          border="1px"
          borderColor="gray.300"
          fontWeight="medium"
          color="blackAlpha.800"
          _hover={{
            bg: "green.300",
            color: "white",
          }}
          onClick={paymentBtn}
        >
          Payment
        </Button>
      </Box>
    </Container>
  );
}
