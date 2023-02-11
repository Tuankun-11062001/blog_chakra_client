import {
  Button,
  Container,
  Flex,
  Image,
  Tab,
  Table,
  TableCaption,
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
import { MdOutlinePreview, MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import EditProduct from "../../../components/modal/editProduct/EditProduct";

export default function StoreManagerA() {
  // modal box
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Tabs>
        <TabList>
          <Tab>All Product</Tab>
          <Tab>Order</Tab>
        </TabList>

        <TabPanels>
          {/* all product */}

          <TabPanel>
            <Button colorScheme="green">Create one!</Button>

            <Text mt="4rem"> All Product</Text>

            <TableContainer mt="1rem">
              <Table variant="striped" colorScheme="teal">
                <TableCaption>Total is 3</TableCaption>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Image</Th>
                    <Th>Name</Th>
                    <Th>Stock</Th>
                    <Th>Category</Th>
                    <Th>Made in</Th>
                    <Th>Price</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="center">1</Td>
                    <Td>
                      <Image
                        alt="img_product"
                        src="https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/marigold-flowers-orange-pixabay_12708.jpg"
                        w="10rem"
                        h="5rem"
                        objectFit="cover"
                      />
                    </Td>
                    <Td w="15rem" textOverflow="ellipsis" overflow="hidden">
                      <Text
                        w="inherit"
                        textOverflow="ellipsis"
                        overflow="hidden"
                      >
                        Marigold
                      </Text>
                    </Td>
                    <Td textAlign="center">15</Td>

                    <Td textAlign="center">Flower</Td>
                    <Td textAlign="center">Viet Nam</Td>
                    <Td textAlign="center">20k</Td>
                    <Td>
                      <Flex gap="1rem" justify="center">
                        <Link to="marigold">
                          <Button colorScheme="blue">
                            <MdOutlinePreview />
                            <Text ml="0.5rem">Preview</Text>
                          </Button>
                        </Link>
                        <Button colorScheme="green" onClick={onOpenEdit}>
                          <FiEdit />
                          <Text ml="0.5rem">Edit</Text>
                        </Button>
                        <Button colorScheme="red">
                          <MdDelete />
                          <Text ml="0.5rem">Delete</Text>
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>

          {/* order */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* modal */}
      <EditProduct open={isOpenEdit} close={onCloseEdit} />
    </Container>
  );
}
