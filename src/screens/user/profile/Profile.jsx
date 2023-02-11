import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Tab,
  Table,
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
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CreateBlog from "../../../components/modal/createBlog/CreateBlog";
import ModalEditProfile from "../../../components/modal/EditProfile/ModalEditProfile";
import { BsHeartFill } from "react-icons/bs";

export default function Profile() {
  const {
    onOpen: onEditProfile,
    isOpen: isEditProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const {
    onOpen: onCreateBlog,
    isOpen: isCreateBlog,
    onClose: onCloseCreateBlog,
  } = useDisclosure();

  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Box pos="relative">
        <Image
          src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80"
          all=""
          w="full"
          h="25rem"
          objectFit="cover"
        />
        <Flex
          pos="absolute"
          left="5rem"
          bottom="-5rem"
          align="end"
          gap="2rem"
          right="5rem"
        >
          <Avatar src="" alt="" size="2xl" />
          <Box>
            <Heading>Tuan Nguyen</Heading>
            <Text>Hi. minh la Tuan</Text>
          </Box>
          <Spacer />
          <Button
            colorScheme="black"
            bg="black"
            _hover={{ bg: "green.500", color: "white" }}
            onClick={onEditProfile}
          >
            Edit Profiile
          </Button>
        </Flex>
      </Box>

      <Flex mt="8rem" gap="5rem">
        {/*  info */}

        <Box flex="1">
          <Heading>Your Info</Heading>
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

        {/* blog-manager */}

        <Box flex="1">
          <Heading>Your Blogs</Heading>
          <Tabs
            variant="enclosed"
            mt="2rem"
            borderColor="green.500"
            colorScheme="green"
          >
            <TabList>
              <Tab fontSize="1.2rem" fontWeight="medium" gap="0.5rem">
                <Text>Blog</Text> <Text>(2)</Text>
              </Tab>
              <Tab fontSize="1.2rem" fontWeight="medium">
                Favourite
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Button colorScheme="green" mt="1rem" onClick={onCreateBlog}>
                  Create one!
                </Button>

                {/* list < 5*/}

                <Box mt="1rem">
                  <Text>List blogs</Text>

                  <TableContainer mt="1rem" p="unset">
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>No.</Th>
                          <Th>Name</Th>
                          <Th>Category</Th>
                          <Th>Views</Th>
                          <Th>Favourite</Th>
                          <Th>Comment</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>1</Td>

                          <Td
                            noOfLines={1}
                            maxW="10rem"
                            _hover={{ color: "green.400" }}
                          >
                            <Link to="/">
                              Tinh yeu la gi? Tinh yeu la gi? Tinh yeu la gi?
                              Tinh yeu la gi? Tinh yeu la gi? Tinh yeu la gi?
                              Tinh yeu la gi? Tinh yeu la gi?
                            </Link>
                          </Td>
                          <Td _hover={{ color: "green.400" }}>
                            <Link to="/">Life</Link>
                          </Td>
                          <Td>20k</Td>
                          <Td>10k</Td>
                          <Td>50</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box mt="1rem">
                  <Text>List Favourite</Text>

                  <TableContainer mt="1rem" p="unset">
                    <Table size="sm">
                      <Thead>
                        <Tr>
                          <Th>No.</Th>
                          <Th>Name</Th>
                          <Th>Category</Th>
                          <Th>Views</Th>
                          <Th>Favourite</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>1</Td>

                          <Td
                            noOfLines={1}
                            maxW="10rem"
                            _hover={{ color: "green.400" }}
                          >
                            <Link to="/">
                              Tinh yeu la gi? Tinh yeu la gi? Tinh yeu la gi?
                              Tinh yeu la gi? Tinh yeu la gi? Tinh yeu la gi?
                              Tinh yeu la gi? Tinh yeu la gi?
                            </Link>
                          </Td>
                          <Td _hover={{ color: "green.400" }}>
                            <Link to="/">Life</Link>
                          </Td>
                          <Td>20k</Td>
                          <Td>
                            <Button color="red.500">
                              <BsHeartFill />
                            </Button>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
      {/* modal create blog */}
      <CreateBlog open={isCreateBlog} close={onCloseCreateBlog} />
      {/* modal info */}
      <ModalEditProfile open={isEditProfile} close={onCloseProfile} />
    </Container>
  );
}
