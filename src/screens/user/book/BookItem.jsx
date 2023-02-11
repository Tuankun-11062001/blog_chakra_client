import { Box, Container, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./bookItem.css";

export default function BookItem({ item, slide, w, m }) {
  return (
    <Container
      h={slide ? "30rem" : "20rem"}
      w={slide ? "inherit" : w}
      m={slide ? "unset" : m}
      display="flex"
    >
      <Link to={item.nameSign}>
        <Container
          className={slide && "bookItem"}
          boxShadow="md"
          alignSelf="center"
          display="flex"
          flexDir="column"
          overflow="hidden"
          justifyContent="space-between"
          h="inherit"
          border="1px"
          borderColor="transparent"
          _hover={{
            border: "1px",
            borderColor: "green",
          }}
        >
          <Image src={item.img} objectFit="cover" h="18rem" />

          <Box>
            <Text noOfLines={1} textAlign="center">
              {slide == false ? item.name : ""}
            </Text>
          </Box>
        </Container>
      </Link>
    </Container>
  );
}
