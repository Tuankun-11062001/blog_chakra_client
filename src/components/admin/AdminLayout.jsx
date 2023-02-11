import {
  Avatar,
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
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
              <NavLink className="navLink" to="/admin">
                <Text fontSize="17px" fontWeight="semibold" color="gray">
                  Home
                </Text>
              </NavLink>
              <NavLink className="navLink" to="blog-manager">
                <Text fontSize="17px" fontWeight="semibold" color="gray">
                  Blog
                </Text>
              </NavLink>
              <NavLink className="navLink" to="book-manager">
                <Text fontSize="17px" fontWeight="semibold" color="gray">
                  Book
                </Text>
              </NavLink>
              <NavLink className="navLink" to="store-manager">
                <Text fontSize="17px" fontWeight="semibold" color="gray">
                  Store
                </Text>
              </NavLink>
              <NavLink className="navLink" to="user-manager">
                <Text fontSize="17px" fontWeight="semibold" color="gray">
                  User
                </Text>
              </NavLink>
            </Flex>
          </Flex>

          {/* right */}

          <Flex gap="2rem" align="center">
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
                <MenuItem>Quit</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
      <Outlet />
    </>
  );
}
