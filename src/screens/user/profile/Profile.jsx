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
import { useClientStore } from "../../../store/client/hook";

export default function Profile() {
  const [stateClient, dispatchClient] = useClientStore();
  const { user } = stateClient;

  console.log(user);
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
        <Image src={user.bgUser} all="" w="full" h="25rem" objectFit="cover" />
        <Flex
          pos="absolute"
          left="5rem"
          bottom="-5rem"
          align="end"
          gap="2rem"
          right="5rem"
        >
          <Avatar src={user.image} alt="" size="2xl" />
          <Box>
            <Heading>{user.username}</Heading>
            <Text>{user.bio}</Text>
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
                  <Td w="10rem">UserName</Td>
                  <Td>{user.username}</Td>
                </Tr>
                <Tr>
                  <Td>Email</Td>
                  <Td>{user.email}</Td>
                </Tr>
                <Tr>
                  <Td>Phone</Td>
                  <Td>{user?.phone}</Td>
                </Tr>
                <Tr>
                  <Td>Address</Td>
                  <Td>{user?.address}</Td>
                </Tr>
                <Tr>
                  <Td>City</Td>
                  <Td>{user?.city}</Td>
                </Tr>
                <Tr>
                  <Td>Province</Td>
                  <Td>{user?.province}</Td>
                </Tr>
                <Tr>
                  <Td>Bio</Td>
                  <Td>{user?.bio}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* blog-manager */}

        <Box flex="1">
          <Heading>Your Blogs</Heading>
          <Tabs
            // variant="enclosed"
            // mt="2rem"
            // borderColor="green.500"
            colorScheme="green"
            // bg="white"
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
