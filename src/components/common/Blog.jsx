import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsDot, BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const parentMotion = {
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

const childrenMotion = {
  hide: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
};

export default function Blog({ first, h, m, w, item }) {
  // style blog

  const firstStyle = {
    box: {
      w: first ? "full" : w,
      h: first ? "50rem" : h,
      m: first ? "unset" : m,
      pos: "relative",
    },

    // box wrapper

    boxWrapper: {
      position: "relative",
      flexDirection: "column",
      gap: "1rem",
      pos: "relative",
      w: "inherit",
      h: "inherit",
    },

    // image

    img: {
      w: "full",
      h: first ? "full" : "13rem",
      objectFit: "cover",
      flex: 1,
    },

    // detail

    detail: {
      flexDirection: "column",
      gap: "0.5rem",
      pos: first ? "absolute" : "unset",
      bottom: first ? "3rem" : "unset",
      left: first ? "3rem" : "unset",
      // bg:"#222",
      zIndex: "2",
      p: first ? "1rem" : "0.5rem",
      color: first ? "white" : "black",

      // css Time

      Time: {
        alignItems: "center",
        gap: "1px",
        color: first ? "white" : "black",

        // text

        Text: {
          fontSize: first ? "1.2rem" : "0.8rem",
          fontWeight: "500",
          transition: "0.3s ease",

          // hover
          hover: {
            textDecoration: "underline",
            color: "#222",
          },
        },
      },

      // title

      title: {
        fontSize: first ? "2rem" : "1.5rem",
        transition: "0.3s ease",

        // hover
        hover: {
          textDecoration: "underline",
          color: "#222",
        },
      },

      // decription

      decription: {},

      // categories

      categories: {
        mt: "0.5rem",
        item: {
          p: "0.3rem 2rem",
          borderRadius: "1rem",
          border: first ? "1px solid white" : "1px solid #222",
          transition: "0.3s ease",

          // hover

          hover: {
            bg: "#222",
            color: "#fff",
          },
        },
      },
    },
  };

  // update url blog

  const location = window.location.href;

  // heart btn

  const handleHeart = (e) => {
    e.preventDefault();
    console.log("heart");
  };

  return (
    <Box
      sx={firstStyle.box}
      as={motion.div}
      variants={parentMotion}
      initial="hide"
      // animate="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Link
        to={
          location.includes("/categories") === false
            ? "/categories/healthy/1"
            : location.includes("/categories/healthy")
            ? "/categories/healthy/1"
            : "healthy/1"
        }
      >
        <Img src={item.img} alt="first blog" sx={firstStyle.img} />

        {/* haert */}

        <Button
          pos="absolute"
          top="1rem"
          right="1rem"
          fontSize="1.5rem"
          onClick={handleHeart}
        >
          <BsHeart />
        </Button>

        <Flex sx={firstStyle.detail}>
          {/* user and Time */}
          <Flex sx={firstStyle.detail.Time}>
            <Text
              sx={firstStyle.detail.Time.Text}
              _hover={firstStyle.detail.Time.Text.hover}
            >
              <Link to="/author">{item.author}</Link>
            </Text>
            <Box>
              <BsDot style={{ fontSize: "2rem" }} />
            </Box>
            <Text
              sx={firstStyle.detail.Time.Text}
              _hover={firstStyle.detail.Time.Text.hover}
            >
              <Link to="/time">{item.time}</Link>
            </Text>
          </Flex>

          {/* title */}

          <Heading
            sx={firstStyle.detail.title}
            _hover={firstStyle.detail.title.hover}
          >
            <Link to="1">{item.title}</Link>
          </Heading>

          {/* description */}
          <Text>{item.description}</Text>

          {/* category */}
          <Wrap sx={firstStyle.detail.categories}>
            {item.categories.map((c) => (
              <WrapItem
                sx={firstStyle.detail.categories.item}
                _hover={firstStyle.detail.categories.item.hover}
              >
                <Link to={`/${c}`}>{c}</Link>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Link>
    </Box>
  );
}
