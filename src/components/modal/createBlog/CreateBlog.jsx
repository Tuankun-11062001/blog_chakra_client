import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
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
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./createBlog.scss";
import MenuBar from "./MenuBar";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import parser from "html-react-parser";

export default function CreateBlog({ open, close }) {
  // setting editor
  const [formData, setFormData] = useState();

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: `
  `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(html);
    },
  });

  const submit = () => {
    console.log(formData);
    console.log(parser(formData));
  };

  return (
    <Modal isOpen={open} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent maxW="100rem" m="2rem">
        <ModalHeader>Create Blog</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="2rem">
            <Stack spacing={4}>
              <Box>
                <Text mb="0.5rem">Title</Text>
                <InputGroup>
                  {/* <InputLeftElement
                  pointerEvents="none"
                  // children={<PhoneIcon color="gray.300" />}
                /> */}
                  <Input placeholder="Your Title" />
                </InputGroup>
              </Box>
              <Box>
                <Text mb="0.5rem">Category</Text>
                <InputGroup>
                  {/* <InputLeftElement
                  pointerEvents="none"
                  // children={<PhoneIcon color="gray.300" />}
                /> */}
                  <Input placeholder="Your Category" />
                </InputGroup>
              </Box>
            </Stack>
            <Box
              border="1px"
              borderColor="gray.700"
              mt="1rem"
              p="2rem"
              borderRadius="1rem"
            >
              <MenuBar editor={editor} />
              <EditorContent editor={editor} />
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={submit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
