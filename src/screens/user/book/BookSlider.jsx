import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookItem from "./BookItem";
import { books } from "../../../dataTest";

export default function BookSlider() {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {books.map((item) => (
        <BookItem item={item} key={item.id} slide={true} />
      ))}
    </Slider>
  );
}
