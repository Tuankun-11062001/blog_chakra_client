import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Img,
  Spacer,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { useClientStore } from "../../../store/client/hook";
import {
  addToCart,
  addToDetail,
  editDetail,
} from "../../../store/client/clientAction";
import { motion } from "framer-motion";

// motion page

const parentMotion = {
  hide: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const imageMotion = {
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

export default function DetailProduct() {
  const param = useParams();

  // local
  const [stateClient, dispatchClient] = useClientStore();

  useEffect(() => {
    dispatchClient(addToDetail(param));
  }, []);

  const { detail } = stateClient.store;

  console.log(detail);
  //   review image

  const changeImage = (e) => {
    const buttons = document.querySelectorAll(".btn-img");
    buttons.forEach((item) => {
      item.style.border = "2px solid transparent";
    });

    const item = e.target;
    item.style.border = "2px solid green";
    const imgSrc = item.querySelector("img");

    const customDetail = {
      ...detail,
      img: imgSrc.src,
    };

    dispatchClient(editDetail(customDetail));
  };

  // description product

  const [detailsLine, setDetailsLine] = useState(false);

  const seeMore = () => {
    const parent = document.querySelector(".product-description");
    parent.classList.remove("css-1xbgx3m");
    setDetailsLine(!detailsLine);
  };

  const scrollBack = () => {
    const parent = document.querySelector(".product-description");
    parent.classList.add("css-1xbgx3m");
    setDetailsLine(!detailsLine);
  };

  // select color

  const selectColor = (e) => {
    const buttonsColor = document.querySelectorAll(".colors");

    buttonsColor.forEach((item) => {
      item.style.backgroundColor = "#EDF2F7";
    });

    e.target.style.background = "lightgreen";

    setErrorMessage("");

    const customDetail = {
      ...detail,
      colorSelect: e.target.innerHTML,
    };

    dispatchClient(editDetail(customDetail));
  };

  // quality and price
  /**
   * increase the quality => increase the price
   * decrease the quality => decrease the price
   */

  const [quality, setQuality] = useState(1);

  const increaseQuality = () => {
    setQuality((prev) => prev + 1);

    // price
    const price = (quality + 1) * detail.originPrice;

    const customDetail = {
      ...detail,
      quality: quality + 1,
      price,
    };

    dispatchClient(editDetail(customDetail));
  };

  const decreaseQuality = () => {
    setQuality((prev) => (prev <= 1 ? 1 : prev - 1));
    // price
    const price = (quality - 1) * detail.originPrice;

    const customDetail = {
      ...detail,
      quality: quality - 1,
      price,
    };

    dispatchClient(editDetail(customDetail));
  };

  // message for us

  const [messageOfUser, setMessageOfUser] = useState("");

  const changeMessage = (e) => {
    setMessageOfUser(e.target.value);
    setErrorMessage("");
  };

  // message error

  const [errorMessage, setErrorMessage] = useState("");

  // add to cart button

  const toast = useToast();

  const handleAddToCart = () => {
    const customDetail = {
      ...detail,
      message: messageOfUser,
    };

    if (detail.colorSelect === "") {
      return setErrorMessage("Choose your color");
    }

    if (
      detail.colorSelect !== "" ||
      detail.message === "" ||
      detail.message !== ""
    ) {
      toast({
        position: "bottom",
        render: () => (
          <Flex
            color="white"
            p={3}
            bg="green.500"
            gap="1rem"
            borderRadius="1rem"
            boxShadow="md"
            alignItems="center"
          >
            <BsCheckCircleFill />
            <Text>Success</Text>
            <Spacer />
            <Button
              variant="link"
              color="white"
              onClick={() => toast.closeAll()}
            >
              <IoClose
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </Button>
          </Flex>
        ),
      });

      dispatchClient(addToCart(customDetail));
    }
  };

  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
      as={motion.div}
      variants={parentMotion}
      initial="hide"
      animate="visible"
    >
      <Flex gap="3rem">
        {/* product image */}
        <Box flex="1" as={motion.div} variants={imageMotion}>
          <Img
            src={detail.img}
            alt={detail.title}
            objectFit="cover"
            w="full"
            h="40rem"
          />

          <Flex mt="2rem">
            {detail.imgReview === undefined
              ? []
              : detail.imgReview.map((item) => (
                  <Button onClick={changeImage} className="btn-img" h="4rem">
                    <Img
                      src={item}
                      w="full"
                      h="full"
                      objectFit="cover"
                      pointerEvents="none"
                    />
                  </Button>
                ))}
          </Flex>
        </Box>

        {/* detail product */}

        <Box flex="1" boxShadow="xl" pos="relative">
          {/* box head */}

          <Box bg="lightgreen" padding="1rem">
            <Text fontSize="1.5rem" fontWeight="medium" color="white">
              About Product
            </Text>
          </Box>

          {/* box detail */}

          <Box paddingInline="1rem" overflow="auto" h="37rem" pb="4rem">
            {/* product heading */}
            <Flex justify="space-between" align="center" marginBlock="2rem">
              <Heading fontSize="1.7rem">{detail.title}</Heading>
              <Heading fontSize="1.7rem">
                {detail.price}
                VND
              </Heading>
            </Flex>
            <Text color="gray" noOfLines={4} className="product-description">
              {/* {product?.description} */}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quae
              suscipit ab repudiandae velit unde amet distinctio iste enim
              dolore facilis tenetur aut, corporis quia perferendis, veniam
              reiciendis sit numquam. Deleniti fugiat vitae ipsa, quo delectus,
              consequatur debitis odio similique voluptas quia dolore magnam
              perspiciatis. Dignissimos magni facere deleniti atque eligendi
              repellat nostrum ea in sint! Cumque sunt temporibus amet! Itaque
              expedita ipsum eaque eius eos! In, excepturi! Unde sed est alias
              aspernatur magni quos harum nihil repellat. Beatae placeat ex est,
              numquam minima debitis sapiente amet cupiditate repellendus velit!
              Deleniti dolores doloremque quo minus dolore porro quaerat
              assumenda voluptate tempore cumque eos rerum, perspiciatis
              expedita? Inventore, veniam, dignissimos qui facere molestiae
              aliquam ullam dolor odit accusamus nulla et nisi. Dignissimos
              impedit laudantium officia tempora sed, accusamus aut fugiat totam
              voluptatem explicabo nulla dolore ad quos unde, reiciendis a
              atque. A illum nulla voluptates porro excepturi provident
              praesentium minima modi!
            </Text>

            {detailsLine ? (
              <Button mt="1rem" variant="link" onClick={scrollBack}>
                Scroll back
              </Button>
            ) : (
              <Button mt="1rem" variant="link" onClick={seeMore}>
                See more
              </Button>
            )}

            {/* box color and quality */}

            <Flex gap="4rem" mt="2rem">
              {/* choose color  */}

              <Flex alignItems="center" gap="1rem">
                <Text>Color : </Text>
                {detail.colors === undefined
                  ? []
                  : detail.colors.map((item) => (
                      <Button className="colors" onClick={selectColor}>
                        {item}
                      </Button>
                    ))}
              </Flex>

              {/* increase and descrease quality  */}

              <Flex align="center" gap="1rem">
                <Text>Quality : </Text>
                <Button onClick={decreaseQuality}>
                  <HiMinus />
                </Button>
                <Text fontSize="1.3rem">{quality}</Text>
                <Button onClick={increaseQuality}>
                  <HiPlus />
                </Button>
              </Flex>
            </Flex>

            {/* box text message */}

            <Textarea
              mt="2rem"
              resize="none"
              boxShadow="md"
              placeholder="Message for us !"
              fontSize="md"
              h="10rem"
              onChange={changeMessage}
              value={messageOfUser}
            />

            {/* message error */}

            <Center mt="2rem" color="red.600" fontSize="1.3rem">
              {errorMessage}
            </Center>
          </Box>

          {/* add to cart button */}
          <Button
            pos="absolute"
            bottom="0"
            left="0"
            w="full"
            p="2rem"
            fontSize="1.3rem"
            color="gray.600"
            _hover={{
              color: "white",
              bg: "lightgreen",
            }}
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
