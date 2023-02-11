import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { ChakraBox } from "../../chakraMotion/DeclareMotion";
import Blog from "../../components/common/Blog";
import Product from "../../components/common/Product";
import Footer from "../../components/common/Footer";
import { data, products } from "../../dataTest";
import { useClientStore } from "../../store/client/hook";

// motion

const welcomeMotion = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

export default function Home() {
  // store
  const [stateClient, dispatchClient] = useClientStore();
  console.log(stateClient);
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      {/* welcome */}

      <ChakraBox variants={welcomeMotion} initial="hide" animate="visible">
        <Flex
          direction="column"
          alignItems="center"
          gap="0.5rem"
          mt="3rem"
          as={motion.div}
        >
          <Text fontWeight="bold" fontSize="1.2rem">
            The blog
          </Text>
          <Heading fontSize="3rem" lineHeight="unset">
            Writing from our team
          </Heading>
          <Text fontSize="1.2rem" color="gray.500" fontWeight="500">
            The latest industry, interviews, technologies, and resource.
          </Text>
        </Flex>
      </ChakraBox>

      {/* list blog */}

      <Box mt="4rem">
        {/* first blog */}
        {data
          .filter((item) => item.id === 1)
          .map((item) => (
            <Blog first={true} item={item} />
          ))}

        {/* blogs */}

        <Flex m="-1rem" mt="1rem" wrap="wrap">
          {data.map((item) => (
            <Blog
              first={false}
              w="calc(25% - 2rem)"
              m="1rem"
              h="md"
              item={item}
            />
          ))}
        </Flex>
      </Box>

      {/* store */}

      <Box mt="4rem">
        <Heading>Store</Heading>

        {/* list latest product */}

        <Flex wrap="wrap" marginInline="-1rem">
          {products
            .filter((item) => item.type[0] === "new")
            .map((item) => (
              <Product item={item} />
            ))}
        </Flex>

        <Box bg="pink" pos="relative" mb="2rem">
          <Button
            variant="link"
            pos="absolute"
            right="0"
            top="0"
            _hover={{ color: "green" }}
            fontSize="1.2rem"
          >
            See all Product
          </Button>
        </Box>
      </Box>

      {/* footer */}
      <Footer />
    </Container>
  );
}
