import {
  Box,
  Button,
  Container,
  Flex,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogManagerA() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Button colorScheme="green">Create One!</Button>

      <Tabs mt="4rem">
        <TabList>
          <Tab>isPending</Tab>
          <Tab>Blogs</Tab>
        </TabList>

        <TabPanels>
          {/* ispending */}

          <TabPanel>
            <TableContainer mt="2rem">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Total is 3</TableCaption>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Name</Th>
                    <Th>Category</Th>
                    <Th>User</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                      <Text
                        w="inherit"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi?Tinh Yeu
                        la gi? Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la
                        gi?Tinh Yeu la gi?
                      </Text>
                    </Td>
                    <Td>Life</Td>
                    <Td>Tuan Nguyen</Td>

                    <Td>
                      <Link to="admin">Check</Link>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                      <Text
                        w="inherit"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi?Tinh Yeu
                        la gi? Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la
                        gi?Tinh Yeu la gi?
                      </Text>
                    </Td>
                    <Td>Life</Td>
                    <Td>Tuan Nguyen</Td>

                    <Td>
                      <Link to="admin">Check</Link>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* blogs */}
          <TabPanel>
            <TableContainer mt="2rem">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Total is 3</TableCaption>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Name</Th>
                    <Th>Category</Th>
                    <Th>User</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                      <Text
                        w="inherit"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi?Tinh Yeu
                        la gi? Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la
                        gi?Tinh Yeu la gi?
                      </Text>
                    </Td>
                    <Td>Life</Td>
                    <Td>Tuan Nguyen</Td>

                    <Td>
                      <Button>Read</Button>
                    </Td>
                    <Td>
                      <Button>Delete</Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
