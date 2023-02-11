import {
  Button,
  Container,
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
import { Link, useNavigate } from "react-router-dom";

export default function BookManagerA() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Button colorScheme="green">Create one!</Button>
      <TableContainer mt="2rem">
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Total is 3</TableCaption>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                <Text w="inherit" textOverflow="ellipsis" overflow="hidden">
                  Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi?Tinh Yeu la gi?
                  Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi?Tinh Yeu la gi?
                </Text>
              </Td>
              <Td>Life</Td>

              <Td>
                <Button>
                  <Link to="caube">Detail</Link>
                </Button>
              </Td>
              <Td>
                <Button>Delete</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}
