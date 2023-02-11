import {
  Box,
  Button,
  Container,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import ChartLine from "../../../components/chart/ChartLine";
import CreateBlog from "../../../components/modal/createBlog/CreateBlog";
import Delete from "../../../components/modal/delete/Delete";
import EditBlog from "../../../components/modal/editBlog/EditBlog";

export default function BlogManager() {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();

  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();

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
      <Button colorScheme="green" onClick={onOpenCreate}>
        Create one !
      </Button>

      <Flex gap="3rem">
        {/* table list blog */}

        <TableContainer mt="2rem" flex="1.5">
          <Table variant="striped" colorScheme="green">
            <TableCaption>
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Name</Th>
                <Th>Date</Th>
                <Th>View</Th>
                <Th>Category</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td w="20rem">
                  <Tooltip label="tinh yeu la gi?">
                    <Text noOfLines={1} w="inherit">
                      Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu la gi? Tinh Yeu
                      la gi?
                    </Text>
                  </Tooltip>
                </Td>
                <Td>8/2/2023</Td>
                <Td>80k</Td>
                <Td>Life</Td>
                <Td>
                  <Button onClick={onOpenEdit}>
                    <FiEdit />
                  </Button>
                </Td>
                <Td>
                  <Button onClick={onOpenDelete}>
                    <AiOutlineDelete />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        {/* chart */}
        <Box flex="1" h="full">
          <ChartLine />
        </Box>
      </Flex>
      {/* modal */}
      <Delete open={isOpenDelete} close={onCloseDelete} />
      <EditBlog open={isOpenEdit} close={onCloseEdit} />
      <CreateBlog open={isOpenCreate} close={onCloseCreate} />
    </Container>
  );
}
