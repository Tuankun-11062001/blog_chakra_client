import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { MdDelete, MdOutlinePreview } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useEffect } from "react";
import api from "../../../api/api";
import { useState } from "react";

export default function UserManagerA() {
  const [message, setMessage] = useState("");
  const [listUser, setListUser] = useState([]);
  const toast = useToast();
  useEffect(() => {
    // api get all users

    (async () => {
      try {
        const response = await api.get("/user/all");
        const { data, message } = response;
        if (message) {
          setMessage(message);
        }

        if (data) {
          setListUser(data);
        }
      } catch (error) {
        console.log("erro fetch list user", error);
      }
    })();
  }, []);

  // get all user again

  async function getListUser() {
    try {
      const response = await api.get("/user/all");
      const { data, message } = response;
      if (message) {
        setMessage(message);
      }

      if (data) {
        setListUser(data);
      }
    } catch (error) {
      console.log("erro fetch list user", error);
    }
  }

  // handle preview User
  const [dataUserPreview, setDataUserPreview] = useState({});
  const [messagePreview, setMessagePreview] = useState("");

  const handlePreviewUser = (e) => {
    const parent = e.target.parentElement.parentElement.parentElement;
    const idUser = parent.querySelector(".id").textContent;

    // call api find one user
    (async () => {
      try {
        const response = await api.get(`/user/${idUser}`);
        const { message, data } = response;

        if (message) {
          setMessagePreview(message);
        }

        if (data) {
          setDataUserPreview(data);
        }
      } catch (error) {
        console.log("error find one user", error);
      }
    })();
  };

  // handle edit
  const {
    isOpen: isOpenEdit,
    onClose: onCloseEdit,
    onOpen: onOpenEdit,
  } = useDisclosure();

  const [dataUserEdit, setDataUserEdit] = useState({});

  const handleEdit = (e) => {
    onOpenEdit();

    const parent = e.target.parentElement.parentElement.parentElement;
    console.log(parent);
    const idUser = parent.querySelector(".id").textContent;

    // call api find one user
    (async () => {
      try {
        const response = await api.get(`/user/${idUser}`);
        const { data } = response;

        if (data) {
          setDataUserEdit(data);
        }
      } catch (error) {
        console.log("error find one user", error);
      }
    })();
  };

  const handleChangeUserEdit = (e) => {
    setDataUserEdit((prev) => ({
      ...prev,
      role: e.target.value,
    }));
  };

  const handleSubmitChangeUserEdit = () => {
    // put api user (update user)

    (async () => {
      try {
        const response = await api.put(
          `/user/${dataUserEdit._id}`,
          dataUserEdit
        );

        if (response.status === 200) {
          console.log("okee");
          toast({
            title: "Update successful",
            description: "Thay đổi thành công.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          getListUser();
        }
      } catch (error) {
        console.log("edit user failed", error);
      }
    })();

    onCloseEdit();
  };

  // handle delete user

  const {
    isOpen: isOpenDelete,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useDisclosure();

  const [idUserDelete, setIdUserDelete] = useState("");

  const handleDeleteUser = (e) => {
    onOpenDelete();

    const parent = e.target.parentElement.parentElement.parentElement;
    const idUser = parent.querySelector(".id").textContent;

    // call api find one user
    (async () => {
      try {
        const response = await api.get(`/user/${idUser}`);
        const { _id } = response.data;

        if (response.data) {
          setIdUserDelete(_id);
        }
      } catch (error) {
        console.log("error find one user", error);
      }
    })();
  };

  async function handleAcceptDelete() {
    try {
      const response = await api.delete(`/user/${idUserDelete}`);
      const { message } = response.data;
      if (message) {
        toast({
          title: "Successful",
          description: message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }

      getListUser();

      setTimeout(() => {
        onCloseDelete();
      }, 1000);
    } catch (error) {
      console.log("error to delete user", error);
    }
  }
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
              <TableCaption>Total is {listUser.length}</TableCaption>
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>ID.</Th>
                  <Th>Username</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listUser.length < 1 ? (
                  <Center>
                    <Text>{message}</Text>
                  </Center>
                ) : (
                  listUser.map((item, index) => (
                    <Tr key={item.id}>
                      <Td>{index + 1}</Td>
                      <Td
                        w="5rem"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        className="id"
                      >
                        <Text
                          w="inherit"
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          <Tooltip label={item._id}>{item._id}</Tooltip>
                        </Text>
                      </Td>
                      <Td w="10rem" textOverflow="ellipsis" overflow="hidden">
                        <Text
                          w="inherit"
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          {item.username}
                        </Text>
                      </Td>
                      <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                        <Text
                          w="inherit"
                          textOverflow="ellipsis"
                          overflow="hidden"
                        >
                          {item.email}
                        </Text>
                      </Td>
                      <Td>{item.role}</Td>

                      <Td>
                        <Flex gap="1rem">
                          <Button
                            colorScheme="blue"
                            onClick={handlePreviewUser}
                          >
                            <MdOutlinePreview
                              style={{ pointerEvents: "none" }}
                            />
                            <Text ml="0.5rem" pointerEvents="none">
                              Preview
                            </Text>
                          </Button>
                          <Button colorScheme="green" onClick={handleEdit}>
                            <FiEdit style={{ pointerEvents: "none" }} />
                            <Text ml="0.5rem" pointerEvents="none">
                              Edit
                            </Text>
                          </Button>
                          <Button colorScheme="red" onClick={handleDeleteUser}>
                            <MdDelete style={{ pointerEvents: "none" }} />
                            <Text ml="0.5rem" pointerEvents="none">
                              Delete
                            </Text>
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* preview */}

        <Box flex="1">
          {dataUserPreview ? (
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
                      <Td>ID</Td>
                      <Td>{dataUserPreview._id}</Td>
                    </Tr>
                    <Tr>
                      <Td>UserName</Td>
                      <Td>{dataUserPreview.username}</Td>
                    </Tr>
                    <Tr>
                      <Td>Email</Td>
                      <Td>{dataUserPreview.email}</Td>
                    </Tr>
                    <Tr>
                      <Td>Phone</Td>
                      <Td>{dataUserPreview.phone}</Td>
                    </Tr>
                    <Tr>
                      <Td>Address</Td>
                      <Td>{dataUserPreview.address}</Td>
                    </Tr>
                    <Tr>
                      <Td>City</Td>
                      <Td>{dataUserPreview.city}</Td>
                    </Tr>
                    <Tr>
                      <Td>Province</Td>
                      <Td>{dataUserPreview.province}</Td>
                    </Tr>
                    <Tr>
                      <Td>Bio</Td>
                      <Td>Hi. minh la Tuan</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          ) : (
            <Center>
              <Text>{messagePreview}</Text>
            </Center>
          )}
        </Box>

        {/* edit */}
        <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Admin</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Select
                  value={dataUserEdit.role}
                  onChange={handleChangeUserEdit}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Select>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleSubmitChangeUserEdit}
              >
                Accept
              </Button>
              <Button colorScheme="red" mr={3} onClick={onCloseEdit}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* delete */}
        <Modal isOpen={isOpenDelete} onClose={onCloseDelete} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete User</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Bạn đã chắc chắn chứ ?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleAcceptDelete}>
                Accept
              </Button>
              <Button colorScheme="red" mr={3} onClick={onCloseDelete}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Container>
  );
}
