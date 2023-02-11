import {
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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function EditProduct({ open, close }) {
  return (
    <Modal isOpen={open} onClose={close} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* name , category */}

          <Flex gap="2rem">
            <InputGroup flexDir="column" gap="0.5rem">
              <Text>Name Product</Text>
              <Input />
            </InputGroup>
            <Box w="20rem">
              <Text mb="0.5rem">Category</Text>
              <Select>
                <option value="flower">Flower</option>
                <option value="DIY">DIY</option>
              </Select>
            </Box>
          </Flex>

          {/* stock , price , made */}

          <Flex mt="1rem" gap="2rem">
            <InputGroup flexDir="column" gap="0.5rem">
              <Text>Stock</Text>
              <Input />
            </InputGroup>
            <InputGroup flexDir="column" gap="0.5rem">
              <Text>Price</Text>
              <Input />
            </InputGroup>
            <InputGroup flexDir="column" gap="0.5rem">
              <Text>Made in</Text>
              <Input />
            </InputGroup>
          </Flex>

          {/* link image */}

          <Flex mt="1rem" gap="2rem">
            <Box flex="1">
              <InputGroup flexDir="column" gap="0.5rem">
                <Text>Image </Text>
                <Input />
              </InputGroup>
              <Box mt="1rem">
                {/* list image second */}

                <Flex mb="0.5rem" gap="1rem" w="full">
                  <Popover>
                    <PopoverTrigger>
                      <Button variant="link">
                        <Image
                          src="https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg"
                          alt="second-image"
                          w="5rem"
                          h="4rem"
                          objectFit="cover"
                          borderRadius="0.5rem"
                          bg="pink"
                        />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>Confirmation!</PopoverHeader>
                      <PopoverBody>
                        <Text>you want to delete it</Text>
                        <Flex mt="1rem" justify="end">
                          <Button colorScheme="red">Delete</Button>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Box>
                  <Text mb="0.5rem">Image Second</Text>
                  <InputGroup gap="1rem">
                    <Input />
                    <Button colorScheme="blue">Add</Button>
                  </InputGroup>
                </Box>
              </Box>
            </Box>
            <Box>
              <Image
                src="https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg"
                alt="img_preview"
                w="20rem"
                bg="pink"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* detail */}

          <Textarea w="full" h="20rem" resize="none" mt="2rem" />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
