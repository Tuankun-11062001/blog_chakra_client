import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  StackDivider,
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
import { Link } from "react-router-dom";

export default function HomeA() {
  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Center flexDir="column" gap="1rem">
        <Text fontSize="1.2rem">Welcome back</Text>
        <Heading>Admin Tuan Nguyen</Heading>
        <Text fontSize="1.2rem">Have a nice day</Text>
      </Center>

      {/* content */}

      <Flex mt="3rem" gap="3rem">
        {/* left */}
        <Box p="1rem" flex="2">
          {/* number today */}

          <Box>
            <Heading fontSize="1.3rem">Number visit Today</Heading>
            <Flex mt="2rem" gap="2rem">
              <Box p="1rem 2rem" borderRadius="1rem" boxShadow="md">
                <Text textAlign="center" mb="0.5rem">
                  User
                </Text>
                <Heading>+20</Heading>
              </Box>
              <Box p="1rem 2rem" borderRadius="1rem" boxShadow="md">
                <Text textAlign="center" mb="0.5rem">
                  Blog
                </Text>
                <Heading>20</Heading>
              </Box>
              <Box p="1rem 2rem" borderRadius="1rem" boxShadow="md">
                <Text textAlign="center" mb="0.5rem">
                  Book
                </Text>
                <Heading>20</Heading>
              </Box>
              <Box p="1rem 2rem" borderRadius="1rem" boxShadow="md">
                <Text textAlign="center" mb="0.5rem">
                  Store
                </Text>
                <Heading>20</Heading>
              </Box>
            </Flex>
          </Box>

          {/* blog pending */}

          <Box mt="3rem">
            <Heading fontSize="1.3rem">Blog Pending</Heading>

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
          </Box>

          {/* number sign up */}

          <Box mt="3rem">
            <Heading fontSize="1.3rem">Signup</Heading>

            <TableContainer mt="2rem">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Total is 3</TableCaption>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Username</Th>
                    <Th>Email</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>June</Td>
                    <Td>June2001@gmail.com</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        {/* right (order) */}
        <Box p="1rem" w="40rem">
          <Card>
            <CardHeader>
              <Heading fontSize="1.3rem">Order</Heading>
            </CardHeader>
            <CardBody>
              <Stack spacing="1rem" divider={<StackDivider />}>
                <Flex align="center" gap="2rem">
                  <Box flex="1">
                    <Flex justify="space-between" mb="0.5rem">
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        Tuan Nguyen
                      </Heading>
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        VND 100k
                      </Heading>
                    </Flex>
                    <Text w="full" noOfLines={2}>
                      folower x 2, cup x 10
                    </Text>
                  </Box>

                  <Button p="0.5rem 1rem">Checking</Button>
                </Flex>
                <Flex align="center" gap="2rem">
                  <Box flex="1">
                    <Flex justify="space-between" mb="0.5rem">
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        Tuan Nguyen
                      </Heading>
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        VND 100k
                      </Heading>
                    </Flex>
                    <Text w="full" noOfLines={2}>
                      folower x 2, cup x 10
                    </Text>
                  </Box>

                  <Button p="0.5rem 1rem">Checking</Button>
                </Flex>
                <Flex align="center" gap="2rem">
                  <Box flex="1">
                    <Flex justify="space-between" mb="0.5rem">
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        Tuan Nguyen
                      </Heading>
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        VND 100k
                      </Heading>
                    </Flex>
                    <Text w="full" noOfLines={2}>
                      folower x 2, cup x 10
                    </Text>
                  </Box>

                  <Button p="0.5rem 1rem">Checking</Button>
                </Flex>
                <Flex align="center" gap="2rem">
                  <Box flex="1">
                    <Flex justify="space-between" mb="0.5rem">
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        Tuan Nguyen
                      </Heading>
                      <Heading fontSize="1.1rem" mb="0.5rem">
                        VND 100k
                      </Heading>
                    </Flex>
                    <Text w="full" noOfLines={2}>
                      folower x 2, cup x 10
                    </Text>
                  </Box>

                  <Button p="0.5rem 1rem">Checking</Button>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </Container>
  );
}
