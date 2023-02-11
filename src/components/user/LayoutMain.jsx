import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useLayoutEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useClientStore } from "../../store/client/hook";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./layoutMain.css";
import { checkLocalStorageCart } from "../../store/client/clientAction";
import { BiUser } from "react-icons/bi";
import { MdPassword, MdEmail } from "react-icons/md";
import AdminLayout from "../admin/AdminLayout";

export default function LayoutMain() {
  const [stateClient, dispatchClient] = useClientStore();
  const { user, store } = stateClient;

  useLayoutEffect(() => {
    const localStore = window.localStorage.getItem("cart");
    const pareLocalStore = JSON.parse(localStore);
    console.log("localstorage", pareLocalStore);
    if (pareLocalStore) {
      dispatchClient(checkLocalStorageCart(pareLocalStore));
    }
  }, []);

  // modal auth
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [openLogin, setOpenLogin] = useState(false);

  const toggleAuthLogin = () => {
    setOpenLogin(true);
    onOpen();
  };

  const toggleAuthSignup = () => {
    setOpenLogin(false);
    onOpen();
  };

  // form singup

  const [formDataSignup, setFormDataSignup] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  function changeDataSignup(e) {
    const { name, value } = e.target;

    setFormDataSignup((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitFormSignup() {
    console.log("form sign up", formDataSignup);
  }

  // form login
  const [formDataLogin, setFormDataLogin] = useState({
    username: "",
    password: "",
  });

  function changeDataLogin(e) {
    const { name, value } = e.target;
    setFormDataLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitFormLogin() {
    console.log("login form", formDataLogin);
  }

  return (
    <>
      {user.role ? (
        <AdminLayout />
      ) : (
        <>
          <Container
            maxWidth="full"
            bg="white"
            pos="fixed"
            height="7rem"
            paddingInline="20"
            boxShadow="lg"
            zIndex="5"
          >
            {/* container admin nav*/}

            {/*  container user nav */}
            <Flex h="inherit" justify="space-between" alignItems="center">
              {/* left */}

              <Flex gap="20">
                <Box>
                  <Link to="/">
                    <Text fontSize="30px" fontWeight="bold" mb="5px">
                      June
                    </Text>
                  </Link>
                </Box>

                <Flex gap="10" alignItems="center">
                  <NavLink className="navLink" to="/">
                    <Text fontSize="17px" fontWeight="semibold" color="gray">
                      Home
                    </Text>
                  </NavLink>
                  <NavLink className="navLink" to="categories">
                    <Text fontSize="17px" fontWeight="semibold" color="gray">
                      Categories
                    </Text>
                  </NavLink>
                  <NavLink className="navLink" to="store">
                    <Text fontSize="17px" fontWeight="semibold" color="gray">
                      Store
                    </Text>
                  </NavLink>
                  <NavLink className="navLink" to="book">
                    <Text fontSize="17px" fontWeight="semibold" color="gray">
                      Book
                    </Text>
                  </NavLink>
                </Flex>
              </Flex>

              {/* right */}

              {user.name ? (
                <Flex gap="2rem" align="center">
                  <Link to="/cart">
                    <Box position="relative" _hover={{ color: "green" }}>
                      <HiOutlineShoppingBag
                        style={{ width: "2rem", height: "2rem" }}
                      />
                      <Text
                        pos="absolute"
                        top="-0.2rem"
                        left="-0.9rem"
                        w="1.7rem"
                        h="1.7rem"
                        bg="green.600"
                        borderRadius="50%"
                        display={store?.buy.length < 1 ? "none" : "block"}
                      >
                        <Center h="inherit" color="white" fontSize="0.9rem">
                          {store.buy?.length}
                        </Center>
                      </Text>
                    </Box>
                  </Link>

                  <Menu>
                    <MenuButton>
                      <Avatar
                        src="https://images.unsplash.com/photo-1674925271352-7ad44cae54ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        size="sm"
                      />
                    </MenuButton>
                    <MenuList>
                      <Link to="my-profile">
                        <MenuItem>Profile</MenuItem>
                      </Link>
                      <Link to="my-profile/blog-manager">
                        <MenuItem>Blog Manager</MenuItem>
                      </Link>
                      <Link to="my-profile/favourite">
                        <MenuItem>Favourite</MenuItem>
                      </Link>
                      <MenuItem>Quit</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              ) : (
                <Flex gap="2rem">
                  <Button
                    colorScheme="whiteAlpha"
                    bg="#f8f8f8"
                    color="black"
                    paddingInline="1rem"
                    onClick={toggleAuthLogin}
                  >
                    Login
                  </Button>
                  <Button
                    colorScheme="black"
                    bg="black"
                    onClick={toggleAuthSignup}
                  >
                    Sign up
                  </Button>
                </Flex>
              )}
            </Flex>

            {/* login modal*/}

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                {openLogin ? (
                  <>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="2rem">
                      <Flex direction="column" gap="1.3rem">
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiUser color="gray.300" />}
                          />
                          <Input
                            placeholder="Username"
                            name="username"
                            value={formDataLogin.username}
                            onChange={changeDataLogin}
                          />
                        </InputGroup>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdPassword color="gray.300" />}
                          />
                          <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formDataLogin.password}
                            onChange={changeDataLogin}
                          />
                        </InputGroup>
                        <Button
                          _hover={{ bg: "green.400", color: "white" }}
                          onClick={submitFormLogin}
                        >
                          Login
                        </Button>
                      </Flex>
                    </ModalBody>
                  </>
                ) : (
                  <>
                    <ModalHeader>signup</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="2rem">
                      <Flex direction="column" gap="1.3rem">
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiUser color="gray.300" />}
                          />
                          <Input
                            placeholder="Username"
                            name="username"
                            onChange={changeDataSignup}
                            value={formDataSignup.username}
                          />
                        </InputGroup>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdEmail color="gray.300" />}
                          />
                          <Input
                            placeholder="Email"
                            type="email"
                            isrequired
                            name="email"
                            onChange={changeDataSignup}
                            value={formDataSignup.email}
                          />
                          <InputRightAddon children="@gmail.com" />
                        </InputGroup>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdPassword color="gray.300" />}
                          />
                          <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={changeDataSignup}
                            value={formDataSignup.password}
                          />
                        </InputGroup>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdPassword color="gray.300" />}
                          />
                          <Input
                            type="password"
                            placeholder="RePassword"
                            name="rePassword"
                            onChange={changeDataSignup}
                            value={formDataSignup.rePassword}
                          />
                        </InputGroup>
                        <Button
                          _hover={{ bg: "green.400", color: "white" }}
                          onClick={submitFormSignup}
                        >
                          Sign up
                        </Button>
                      </Flex>
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>
          </Container>
          <Outlet />
        </>
      )}
    </>
  );
}
