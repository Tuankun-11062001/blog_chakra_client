import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../../../dataTest";
import { BiLike, BiDislike, BiShare, BiUser } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default function BookDetail() {
  const param = useParams();
  //   console.log(param.name.split("-").join(" "));

  const [book, setBook] = useState();

  useEffect(() => {
    const item = books.filter((item) => item.nameSign === param.name);
    setBook(item[0]);
  }, []);

  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      {/* overview book */}
      <Flex gap="4rem">
        <Image
          src={book?.img}
          alt="img"
          h="30rem"
          w="20rem"
          objectFit="contain"
        />

        <Flex gap="1rem" flexDir="column">
          <Flex align="center" justify="space-between">
            <Heading>{book?.name}</Heading>
            <Button>
              <BsHeart />
            </Button>
          </Flex>
          <Text>Category : {book?.category}</Text>
          <Text>View : {book?.view}</Text>
          <Text>{book?.description}</Text>
        </Flex>
      </Flex>

      {/* chapter book */}

      <TableContainer mt="5rem">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>CHAPTER</Th>
              <Th>INFO</Th>
              <Th isNumeric>VIEW</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Chapter 1</Td>
              <Td>Mien dat hua</Td>
              <Td isNumeric>30k</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      {/* comment */}

      <Flex gap="3rem" mt="5rem">
        {/* list commnet */}

        <Box flex="1" p="1rem">
          <Text fontSize="1.4rem" fontWeight="500">
            List comment
          </Text>

          <Flex
            gap="1rem"
            pos="relative"
            border="1px"
            borderColor="gray.300"
            p="1rem"
            marginBlock="2rem"
            borderRadius="1rem"
            shadow="md"
          >
            <Avatar />
            <Box>
              <Text>Tuan Nguyen</Text>
              <Text>Binh Luan</Text>
            </Box>
            <Flex
              pos="absolute"
              bottom="-1.3rem"
              right="1rem"
              align="center"
              gap="1rem"
            >
              <Text
                p="0.5rem 1rem"
                bg="white"
                borderRadius="2rem"
                fontSize="1.1rem"
                fontWeight="400"
                shadow="md"
              >
                like : 1k
              </Text>
              <Button
                fontSize="1.4rem"
                shadow="md"
                _hover={{
                  bg: "green.400",
                  color: "white",
                }}
              >
                <BiLike />
              </Button>
              <Button
                fontSize="1.4rem"
                shadow="md"
                _hover={{
                  bg: "green.400",
                  color: "white",
                }}
              >
                <BiDislike />
              </Button>
              <Button
                fontSize="1.4rem"
                shadow="md"
                _hover={{
                  bg: "green.400",
                  color: "white",
                }}
              >
                <BiShare />
              </Button>
            </Flex>
          </Flex>
        </Box>

        {/* write coment */}

        <Box flex="1" p="1rem">
          <Text fontSize="1.4rem" fontWeight="500">
            Write comment
          </Text>

          <InputGroup mt="2rem" shadow="md">
            <InputLeftElement
              fontSize="1.3rem"
              pointerEvents="none"
              children={<HiOutlineMail />}
            />
            <Input type="email" placeholder="Your email" />
          </InputGroup>

          <InputGroup mt="1rem" shadow="md">
            <InputLeftElement
              fontSize="1.3rem"
              pointerEvents="none"
              children={<BiUser />}
            />
            <Input placeholder="Your Name" />
          </InputGroup>

          <Textarea
            placeholder="your comment"
            mt="1rem"
            height="10rem"
            resize="none"
            shadow="md"
          />

          <Button
            mt="1rem"
            variant="solid"
            bg="lightgreen"
            paddingInline="2rem"
            _hover={{ bg: "green.400", color: "white" }}
            shadow="md"
          >
            Post
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
