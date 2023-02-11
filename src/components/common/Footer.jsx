import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <Box p="1rem" mt="3rem">
      <Center flexDir="column">
        <Text fontSize="1.3rem" fontWeight="normal">
          June
        </Text>
        <Heading>Make Your Life Is Better.</Heading>
        <Text fontSize="1.3rem" fontWeight="normal">
          Jan 30 2023
        </Text>
      </Center>

      <Flex gap="5rem" mt="5rem" justify="space-between">
        {/* footer contact */}
        <Flex flexDir="column" gap="1rem">
          <Text fontSize="1.2rem" fontWeight="medium" mb="1rem">
            Contact with me
          </Text>
          <Button colorScheme="facebook">
            <FaFacebookF /> <Text ml="0.5rem">Facebook</Text>
          </Button>
          <Button colorScheme="messenger">
            <FaFacebookF /> <Text ml="0.5rem">Messenger</Text>
          </Button>
        </Flex>

        {/* footer subport */}

        <Flex flexDir="column" gap="1rem">
          <Text fontSize="1.2rem" fontWeight="medium" mb="1rem">
            Problem
          </Text>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Problem Interface
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Problem cart
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Problem payment
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Problem app slow
            </Text>
          </Link>
        </Flex>

        {/* footer latest product categories*/}

        <Flex flexDir="column" gap="1rem">
          <Text fontSize="1.2rem" fontWeight="medium" mb="1rem">
            Latest Categories
          </Text>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Decoration Room
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Plant
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Book
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              How to care your plant?
            </Text>
          </Link>
        </Flex>

        {/* footer latest book categories*/}

        <Flex flexDir="column" gap="1rem">
          <Text fontSize="1.2rem" fontWeight="medium" mb="1rem">
            Latest Book
          </Text>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Nhà giả kim
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Trở về từ sao hoả
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Làm sao học tiếng anh tốt hơn?
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Hãy khiến cuộc sống bạn trở nên tốt hơn
            </Text>
          </Link>
        </Flex>

        {/* footer latest blog*/}

        <Flex flexDir="column" gap="1rem">
          <Text fontSize="1.2rem" fontWeight="medium" mb="1rem">
            Should to Read
          </Text>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Nhà giả kim
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Trở về từ sao hoả
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Làm sao học tiếng anh tốt hơn?
            </Text>
          </Link>

          <Link to="/support">
            <Text fontSize="1.1rem" _hover={{ color: "green" }}>
              Hãy khiến cuộc sống bạn trở nên tốt hơn
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
