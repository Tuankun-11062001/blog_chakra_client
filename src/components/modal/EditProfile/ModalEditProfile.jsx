import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import api from "../../../api/api";
import { initUser } from "../../../store/client/clientAction";
import { useClientStore } from "../../../store/client/hook";

export default function ModalEditProfile({ open, close }) {
  const [stateClient, dispatchClient] = useClientStore();
  const { user } = stateClient;
  const toast = useToast();
  // const change user
  const [editUser, setEditUser] = useState({
    image: user.image,
    bgUser: user.bgUser,
    email: user.email,
    phone: user.phone,
    city: user.city,
    province: user.province,
    address: user.address,
    bio: user.bio,
  });

  const handleChangeUser = (e) => {
    const { name, value } = e.target;

    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // get data user from database and update it to current state user

  const updateUser = async () => {
    try {
      const response = await api.get(`/user/${user._id}`);
      const { data } = response;
      dispatchClient(initUser(data));
    } catch (error) {
      console.log("error to get user", error);
    }
  };

  const submitForm = async () => {
    try {
      const response = await api.put(`user/${user._id}`, editUser);
      const { message } = response.data;

      if (message) {
        updateUser();
        toast({
          title: "Updating",
          description: message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          close();
        }, 1000);
      }
    } catch (error) {
      console.log("error editing user", error);
    }
  };
  return (
    <Modal isOpen={open} onClose={close} size="5xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change infomation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="2rem">
            <Stack gap="1rem">
              {/* Image */}
              <Flex flexDir="column" gap="1rem">
                <InputGroup flexDir="column">
                  <Text mb="0.5rem">Image User</Text>
                  <Input
                    placeholder="Your Image"
                    value={editUser.image}
                    name="image"
                    onChange={handleChangeUser}
                  />
                </InputGroup>
                <Avatar
                  src={editUser.image}
                  alt="yourImage"
                  w="15rem"
                  h="15rem"
                  borderRadius="50%"
                  objectFit="cover"
                />
              </Flex>

              {/* bg user */}

              <Flex flexDir="column" gap="1rem">
                <InputGroup flexDir="column">
                  <Text mb="0.5rem">Background Image User</Text>
                  <Input
                    placeholder="Your Image"
                    value={editUser.bgUser}
                    name="bgUser"
                    onChange={handleChangeUser}
                  />
                </InputGroup>
                <Image
                  src={editUser.bgUser}
                  alt="yourImage"
                  w="15rem"
                  h="10rem"
                  objectFit="cover"
                />
              </Flex>
            </Stack>
            <Stack spacing="1rem" flex="1">
              {/* email */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">Email</Text>
                <Input
                  placeholder="Your Email"
                  value={editUser.email}
                  name="email"
                  onChange={handleChangeUser}
                />
              </InputGroup>
              {/* phone */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">Phone</Text>
                <Input
                  placeholder="Your number phone"
                  type="tel"
                  value={editUser.phone}
                  name="phone"
                  onChange={handleChangeUser}
                />
              </InputGroup>
              {/* address */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">Address</Text>
                <Input
                  placeholder="Your address"
                  value={editUser.address}
                  name="address"
                  onChange={handleChangeUser}
                />
              </InputGroup>
              {/* city */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">City</Text>
                <Input
                  placeholder="Your City"
                  value={editUser.city}
                  name="city"
                  onChange={handleChangeUser}
                />
              </InputGroup>
              {/* province */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">Province</Text>
                <Input
                  placeholder="Your Province"
                  value={editUser.province}
                  name="province"
                  onChange={handleChangeUser}
                />
              </InputGroup>
              {/* bio */}
              <InputGroup flexDir="column">
                <Text mb="0.5rem">Bio</Text>
                <Input
                  placeholder="Your Bio"
                  value={editUser.bio}
                  name="bio"
                  onChange={handleChangeUser}
                />
              </InputGroup>
            </Stack>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={submitForm}>
            Change
          </Button>
          <Button colorScheme="red" mr={3} onClick={close}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
