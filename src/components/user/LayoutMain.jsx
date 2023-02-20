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
  useToast,
} from "@chakra-ui/react";
import React, { useState, useLayoutEffect, Suspense } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useClientStore } from "../../store/client/hook";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./layoutMain.css";
import {
  checkLocalStorageCart,
  initUser,
} from "../../store/client/clientAction";
import { BiUser } from "react-icons/bi";
import { MdPassword, MdEmail } from "react-icons/md";
import Loading from "../common/Loading";
import api from "../../api/api";

export default function LayoutMain() {
  const [stateClient, dispatchClient] = useClientStore();
  const { user, store } = stateClient;

  console.log(user);

  useLayoutEffect(() => {
    const localStore = window.localStorage.getItem("cart");
    const localUser = window.localStorage.getItem("infoUser");

    // parse string

    const pareLocalStore = JSON.parse(localStore);
    const pareLocalUser = JSON.parse(localUser);

    if (pareLocalStore) {
      dispatchClient(checkLocalStorageCart(pareLocalStore));
    }

    const defaultUser = {
      username: "",
      email: "",
      img: "",
      number: "",
      address: "",
      role: "",
    };
    if (pareLocalUser !== null) {
      dispatchClient(initUser(pareLocalUser));
    } else {
      dispatchClient(initUser(defaultUser));
    }
  }, []);

  // modal auth
  const {
    onOpen: onOpenLogin,
    isOpen: isOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    onOpen: onOpenSignup,
    isOpen: isOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();

  // form singup
  const [messageSignup, setMessageSignup] = useState("");

  const [formDataSignup, setFormDataSignup] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const toast = useToast();

  function changeDataSignup(e) {
    const { name, value } = e.target;

    setFormDataSignup((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessageSignup("");
  }

  async function submitFormSignup() {
    if (
      formDataSignup.username === "" ||
      formDataSignup.password === "" ||
      formDataSignup.email === "" ||
      formDataSignup.rePassword === ""
    ) {
      return setMessageSignup("Bạn điền thiếu thông tin.");
    }

    if (formDataSignup.password !== formDataSignup.rePassword) {
      return setMessageSignup("Mật khẩu chưa trùng khớp");
    }

    // api sign up

    try {
      const response = await api.post("/user/create", formDataSignup);
      const { message } = response.data;
      if (message) {
        setMessageSignup(message);
      } else {
        toast({
          title: "Tài khoản đã được tạo.",
          description: "Bạn đăng nhập tài khoản để trải nghiệm tốt hơn nhé!",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }

      setFormDataSignup({
        username: "",
        email: "",
        password: "",
        rePassword: "",
      });

      setTimeout(() => {
        onCloseSignup();
      }, 1000);
    } catch (error) {
      console.log("error", error);
    }
  }

  // form login
  const [messageLogin, setMessageLogin] = useState("");
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
    setMessageLogin("");
  }

  async function submitFormLogin() {
    if (formDataLogin.username === "" || formDataLogin.password === "") {
      return setMessageLogin("Bạn điền thiếu thông tin.");
    }

    // login api
    try {
      const response = await api.post("/user/login", formDataLogin);
      const { message, restUser } = response.data;
      if (message) {
        setMessageLogin(message);
      } else {
        dispatchClient(initUser(restUser));

        // save localstorage
        localStorage.setItem("infoUser", JSON.stringify(restUser));

        setFormDataLogin({
          username: "",
          password: "",
        });

        setTimeout(() => {
          onCloseLogin();
        }, 1000);
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  // user log out
  const navigate = useNavigate();
  function logOut() {
    const userDefalt = {
      username: "",
      email: "",
      img: "",
      number: "",
      address: "",
      role: "",
    };

    dispatchClient(initUser(userDefalt));

    // remove local storage

    localStorage.removeItem("infoUser");

    navigate("/");
  }

  return (
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

          {user.username ? (
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
                <MenuButton bg="white">
                  <Avatar src={user.image} size="sm" />
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
                  <MenuItem onClick={logOut}>Quit</MenuItem>
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
                onClick={onOpenLogin}
              >
                Login
              </Button>
              <Button colorScheme="black" bg="black" onClick={onOpenSignup}>
                Sign up
              </Button>
            </Flex>
          )}
        </Flex>

        {/* login modal*/}

        <Modal isOpen={isOpenLogin} onClose={onCloseLogin} isCentered>
          <ModalOverlay />
          <ModalContent>
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
                  <Text color="red.500">{messageLogin}</Text>
                  <Button
                    _hover={{ bg: "green.400", color: "white" }}
                    onClick={submitFormLogin}
                  >
                    Login
                  </Button>
                </Flex>
              </ModalBody>
            </>
          </ModalContent>
        </Modal>

        {/* signup modal */}
        <Modal isOpen={isOpenSignup} onClose={onCloseSignup} isCentered>
          <ModalOverlay />
          <ModalContent>
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
                    isRequired
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
                <Text color="red.500">{messageSignup}</Text>
                <Button
                  _hover={{ bg: "green.400", color: "white" }}
                  onClick={submitFormSignup}
                >
                  Sign up
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
