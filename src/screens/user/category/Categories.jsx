import React from "react";
import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Blog from "../../../components/common/Blog";
import { data } from "../../../dataTest";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Box>
        <Heading fontSize="1.5rem">All Categories</Heading>

        <Flex mt="2rem" wrap="wrap">
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="green.900"
            // padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Link to="healthy">
              <Center h="full">
                <Text>Healthy</Text>
              </Center>
            </Link>
          </Box>
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="green"
            padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Center>
              <Text>Plant</Text>
            </Center>
          </Box>
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="pink"
            padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Center>
              <Text>Life</Text>
            </Center>
          </Box>
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="orange"
            padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Center>
              <Text>Funny story</Text>
            </Center>
          </Box>
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="blue.900"
            padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Center>
              <Text>Space</Text>
            </Center>
          </Box>
          <Box
            w="calc(20% - 2rem)"
            m="1rem"
            bg="red.500"
            padding="2rem"
            borderRadius="1rem"
            color="white"
            fontSize="1.3rem"
            boxShadow="md"
            fontWeight="bold"
          >
            <Center>
              <Text>Enviroment</Text>
            </Center>
          </Box>
        </Flex>
      </Box>

      {/* list latest Blog */}

      <Box>
        <Heading fontSize="1.5rem" mt="3rem">
          Latest Blog
        </Heading>

        <Flex marginInline="-1rem">
          {data.map((item) => (
            <Blog
              first={false}
              key={item.id}
              item={item}
              w="calc(20% - 2rem)"
              m="1rem"
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}
