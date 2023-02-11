import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

export default function UserManagerA() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Text>List Users</Text>

      <Flex gap="4rem">
        {/* list */}
        <Box flex="1">
          <TableContainer mt="2rem">
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Total is 3</TableCaption>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Username</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td w="10rem" textOverflow="ellipsis" overflow="hidden">
                    <Text w="inherit" textOverflow="ellipsis" overflow="hidden">
                      Tuan NGuyen
                    </Text>
                  </Td>
                  <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                    <Text w="inherit" textOverflow="ellipsis" overflow="hidden">
                      nhoxtuanhero1@gmail.com
                    </Text>
                  </Td>
                  <Td>Admin</Td>

                  <Td>
                    <Flex gap="1rem">
                      <Button colorScheme="blue">
                        <MdOutlinePreview />
                        <Text ml="0.5rem">Preview</Text>
                      </Button>
                      <Button colorScheme="green">
                        <FiEdit />
                        <Text ml="0.5rem">Edit</Text>
                      </Button>
                      <Button colorScheme="red">
                        <MdDelete />
                        <Text ml="0.5rem">Delete</Text>
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* preview */}

        <Box flex="1">
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="image_user"
              mb="2rem"
              h="30rem"
              w="full"
              objectFit="contain"
            />
            <TableContainer mt="2rem">
              <Table size="sm">
                <Tbody>
                  <Tr>
                    <Td>UserName</Td>
                    <Td>Tuan Nguyen</Td>
                  </Tr>
                  <Tr>
                    <Td>Email</Td>
                    <Td>nhoxtuanhero1@gmail.com</Td>
                  </Tr>
                  <Tr>
                    <Td>Phone</Td>
                    <Td>0826901362</Td>
                  </Tr>
                  <Tr>
                    <Td>Address</Td>
                    <Td>03 nguyen truong to</Td>
                  </Tr>
                  <Tr>
                    <Td>City</Td>
                    <Td>Bao Loc</Td>
                  </Tr>
                  <Tr>
                    <Td>Province</Td>
                    <Td>Lam Dong</Td>
                  </Tr>
                  <Tr>
                    <Td>Bio</Td>
                    <Td>Hi. minh la Tuan</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
