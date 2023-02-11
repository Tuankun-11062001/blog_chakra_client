import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useLayoutEffect, useState } from "react";
import { useClientStore } from "../../../store/client/hook";
import ProductBuyReview from "./ProductBuyReview";

export default function Payment() {
  // useStore
  const [stateClient, dispatchClient] = useClientStore();
  const { buy } = stateClient.store;

  // total

  const [total, setTotal] = useState();
  useLayoutEffect(() => {
    const t = buy.reduce((total, item) => total + parseInt(item.price), 0);
    setTotal(t);
  }, []);

  // form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    email: "",
    phone: "",
    payment: "",
  });

  const [message, setMessage] = useState("");

  const changeForm = (e) => {
    const { name, value } = e.target;
    setMessage("");
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.address === "" ||
      formData.city === "" ||
      formData.province === "" ||
      formData.payment === ""
    ) {
      setMessage("Missing Fields");
      return;
    }

    console.log(2);
  };

  return (
    <Container
      pos="absolute"
      top="7rem"
      paddingInline="5rem"
      paddingBlock="2rem"
      maxW="full"
    >
      <Flex justify="space-between" gap="3rem">
        <Box
          flex="1"
          boxShadow="xl"
          border="1px"
          borderColor={message ? "red.300" : "gray.300"}
          borderRadius="2rem"
        >
          <Flex flexDir="column" p="2rem" gap="1rem">
            <Flex justify="space-between" alignItems="center">
              <Heading fontSize="1.7rem">Your Order</Heading>
              <Heading fontSize="1.5rem">VND {total}k</Heading>
            </Flex>
            <Flex gap="1rem">
              <Box flex="1">
                <Text mb="0.5rem">First name</Text>
                <Input
                  placeholder="june"
                  value={formData.firstName}
                  onChange={changeForm}
                  name="firstName"
                />
              </Box>
              <Box flex="1">
                <Text mb="0.5rem">Last name</Text>
                <Input
                  name="lastName"
                  placeholder="Tuan"
                  value={formData.lastName}
                  onChange={changeForm}
                />
              </Box>
            </Flex>

            <Box>
              <Text mb="0.5rem">Address</Text>
              <Input
                placeholder="03 nguyen truong to street"
                value={formData.address}
                onChange={changeForm}
                name="address"
              />
            </Box>

            <Flex gap="1rem">
              <Box flex="2">
                <Text mb="0.5rem">Town/City</Text>
                <Input
                  placeholder="Bl"
                  value={formData.city}
                  onChange={changeForm}
                  name="city"
                />
              </Box>

              <Box flex="1">
                <Text mb="0.5rem">Province</Text>
                <Input
                  placeholder="VN"
                  value={formData.province}
                  onChange={changeForm}
                  name="province"
                />
              </Box>
            </Flex>

            <Box>
              <Text mb="0.5rem">Email</Text>
              <Input
                placeholder="email"
                type="email"
                value={formData.email}
                onChange={changeForm}
                name="email"
              />
            </Box>

            <Box>
              <Text mb="0.5rem">Number phone</Text>
              <Input
                placeholder="+84 1698914640"
                type="tel"
                value={formData.phone}
                onChange={changeForm}
                name="phone"
              />
            </Box>

            <Box>
              <Text mb="0.5rem">Payment</Text>
              <Select bg="gray.200" onChange={changeForm} name="payment">
                <option value="Payment when recive product">
                  Payment when recive product
                </option>
              </Select>
            </Box>

            {message && (
              <Text color="red.600" fontSize="1.3rem">
                {message}
              </Text>
            )}

            <Button
              mt="1rem"
              p="1.5rem"
              fontSize="1.4rem"
              bg="gray.300"
              color="blackAlpha.600"
              _hover={{
                bg: "lightgreen",
                color: "white",
              }}
              onClick={submitForm}
            >
              Payment
            </Button>
          </Flex>
        </Box>

        <Box w="50rem" boxShadow="xl" borderRadius="2rem" overflow="hidden">
          <ProductBuyReview />
        </Box>
      </Flex>
    </Container>
  );
}
