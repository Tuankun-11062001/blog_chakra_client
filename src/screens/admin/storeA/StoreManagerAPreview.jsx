import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const parenMotion = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
    },
  },
};
export default function StoreManagerAPreview({ item }) {
  return (
    <>
      <Text>hello</Text>
    </>
    // <Box
    //   pos="relative"
    //   w="calc(20% - 2rem)"
    //   m="1rem"
    //   p="unset"
    //   as={motion.div}
    //   variants={parenMotion}
    //   initial="hide"
    //   // animate="visible"
    //   whileInView="visible"
    //   viewport={{ once: true, amount: 0.8 }}
    // >
    //   <Flex flexDirection="column" gap="1rem">
    //     {/* notification => new , stock, old */}

    //     <Box
    //       pos="absolute"
    //       right="1rem"
    //       top="1rem"
    //       bg="green"
    //       p="0.5rem 1rem"
    //       borderRadius="0.5rem"
    //       color="white"
    //       boxShadow="lg"
    //     >
    //       <Text>New</Text>
    //     </Box>

    //     {/* image product */}

    //     <Image
    //       // src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    //       src={item.img}
    //       alt={item.title}
    //       h="15rem"
    //       objectFit="cover"
    //       objectPosition="center"
    //     />

    //     {/* detail product */}

    //     <Box>
    //       <Flex justify="space-between" alignItems="center">
    //         <Text
    //           flex="1"
    //           textOverflow="ellipsis"
    //           wordBreak="break-word"
    //           overflow="hidden"
    //           noOfLines="1"
    //           fontSize="1.2rem"
    //           fontWeight="medium"
    //         >
    //           {item.title}
    //         </Text>
    //         <Text pl="1rem" fontSize="1.3rem" fontWeight="medium">
    //           {item.price}K
    //         </Text>
    //       </Flex>
    //       <Text
    //         fontSize="1rem"
    //         color="gray"
    //         textOverflow="ellipsis"
    //         noOfLines="2"
    //       >
    //         {item.description}
    //       </Text>

    //       <Flex align="center" justify="space-between">
    //         <Button
    //           border="0.1rem solid gray"
    //           marginBlock="0.5rem"
    //           _hover={{
    //             bg: "green",
    //             color: "white",
    //           }}
    //         >
    //           Add to Cart
    //         </Button>
    //       </Flex>
    //     </Box>
    //   </Flex>
    // </Box>
  );
}
