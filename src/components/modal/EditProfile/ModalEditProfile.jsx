import {
  Button,
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
} from "@chakra-ui/react";
import React from "react";

export default function ModalEditProfile({ open, close }) {
  return (
    <Modal isOpen={open} onClose={close} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change infomation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing="1rem">
            {/* email */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">Email</Text>
              <Input placeholder="Your Email" />
            </InputGroup>
            {/* phone */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">Phone</Text>
              <Input placeholder="Your number phone" type="tel" />
            </InputGroup>
            {/* address */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">Address</Text>
              <Input placeholder="Your address" />
            </InputGroup>
            {/* city */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">City</Text>
              <Input placeholder="Your City" />
            </InputGroup>
            {/* province */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">Province</Text>
              <Input placeholder="Your Province" />
            </InputGroup>
            {/* bio */}
            <InputGroup flexDir="column">
              <Text mb="0.5rem">Bio</Text>
              <Input placeholder="Your Bio" />
            </InputGroup>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            Done!
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
