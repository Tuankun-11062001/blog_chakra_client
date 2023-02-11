import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import React from "react";
import { useState } from "react";
import { useClientStore } from "../../../store/client/hook";
import {
  updateItemOfCart,
  deleteItemOfCart,
} from "../../../store/client/clientAction";
import { useRef } from "react";

export default function CartProduct({ item }) {
  const [stateClient, dispatchClient] = useClientStore();
  const { buy } = stateClient.store;

  // favourite
  const [favourite, setFavourite] = useState(false);

  const favouriteButton = () => {
    setFavourite(!favourite);
  };

  // quality

  const [quality, setQuality] = useState(item.quality);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initRef = useRef(null);
  const finalRef = useRef(null);

  const increaseQuality = () => {
    setQuality((prev) => prev + 1);
    const customItem = {
      ...item,
      quality: quality + 1,
      price: (quality + 1) * item.originPrice,
    };

    dispatchClient(updateItemOfCart(customItem));
  };

  const decreaseQuality = () => {
    setQuality((prev) => (prev <= 1 ? 1 : prev - 1));

    const customItem = {
      ...item,
      quality: quality <= 1 ? 1 : quality - 1,
      price: (quality <= 1 ? 1 : quality - 1) * item.originPrice,
    };

    dispatchClient(updateItemOfCart(customItem));
  };

  // modal comfirm

  const confirmNo = () => {
    const customItem = {
      ...item,
      quality: 1,
      price: 1 * item.originPrice,
    };
    dispatchClient(updateItemOfCart(customItem));
    onClose();
  };

  // delete item

  const deleteItem = () => {
    dispatchClient(deleteItemOfCart(item));
  };
  return (
    <Container
      maxW="calc(50% - 2rem)"
      h="max-content"
      m="1rem"
      p="1rem"
      borderRadius="1rem"
      border="1px"
      borderColor="gray.300"
    >
      <Flex align="center" gap="1rem" justify="space-between">
        <Image
          // src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3VwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          src={item.img}
          w="5rem"
          h="7rem"
          objectFit="cover"
        />
        <Center flexDir="column" flex="2" gap="0.3rem">
          <Text fontSize="1.3rem" noOfLines={1} maxW="full" textAlign="center">
            {item.title}
          </Text>
          <Text fontSize="1rem" color="gray.700">
            {item.category}
          </Text>
        </Center>

        {/* origin price */}

        <Center flexDir="column" flex="1.5" gap="0.3rem">
          <Text>Origin Price</Text>
          <Text fontSize="1.3rem" fontWeight="medium">
            {item.originPrice}k
          </Text>
        </Center>

        {/*  price*/}

        <Center flexDir="column" flex="1.5" gap="0.3rem">
          <Text>Price</Text>
          <Text fontSize="1.3rem" fontWeight="medium">
            {item.price}k
          </Text>
        </Center>

        {/* quality */}

        <Flex flex="1" align="center" fontSize="1.3rem" gap="0.5rem">
          <Button onClick={decreaseQuality}>
            <HiMinus />
          </Button>
          <Text>{quality}</Text>
          <Button onClick={increaseQuality}>
            <HiPlus />
          </Button>
        </Flex>
        <Button color="red.400" w="max-content" onClick={favouriteButton}>
          {favourite ? (
            <AiFillHeart
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          ) : (
            <AiOutlineHeart
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          )}
        </Button>
        <Button
          w="max-content"
          color="gray.600"
          _hover={{
            color: "red.400",
          }}
          onClick={deleteItem}
        >
          <MdDeleteOutline
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initRef}
        finalFocusRef={finalRef}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm</ModalHeader>
          <ModalBody textAlign="center">bạn có thực sự muốn xoá ?</ModalBody>
          <ModalFooter>
            <Button>Yes</Button>
            <Button onClick={confirmNo}>No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
