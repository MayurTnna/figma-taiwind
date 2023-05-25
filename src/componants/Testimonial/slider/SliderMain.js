import React from "react";
import "../slider/TestimonialSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "./CustomArrow";
import rightimage from "../../../assets/images/rightarrow.svg"
import leftimage from "../../../assets/images/leftarrow.svg"
import CardContainer from "../CardContainer/CardContainer";

const SliderMain = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomArrow imageUrl={rightimage} />,
    prevArrow: <CustomArrow imageUrl={leftimage} />,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="slider-container pt-[60px] ">
          <Slider {...settings}>
            <div className="main-slider-container">
             <CardContainer/>
            </div>
            <div className="main-slider-container">
            <CardContainer/>
            </div>
            <div className="main-slider-container">
            <CardContainer/>
            </div>
            <div className="main-slider-container">
            <CardContainer/>
            </div>
            <div className="main-slider-container">
            <CardContainer/>
            </div>
            <div className="main-slider-container">
            <CardContainer/>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderMain;
