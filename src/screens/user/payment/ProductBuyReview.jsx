import { Container } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPayment from "./ProductPayment";
import { useClientStore } from "../../../store/client/hook";

export default function ProductBuyReview() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [stateClient, dispatchClient] = useClientStore();
  const { buy } = stateClient.store;

  return (
    <Slider {...settings}>
      {buy.map((item) => (
        <ProductPayment item={item} key={item.id} />
      ))}
    </Slider>
  );
}
