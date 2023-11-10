import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Button } from "@chakra-ui/react";
import img1 from "../assets/image/img.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div style={{ position: "relative", margin: "38px 0 0" }}>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src={img1}
          />
        </div>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D"
          />
        </div>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
          />
        </div>
      </Slider>

      {/* Custom Buttons */}
      <Button
        bg={"#FFFFFF"}
        borderRadius={"50px"}
        border={"none"}
        width={"54px"}
        height={"54px"}
        color={"green"}
        pt={"5px"}
        fontSize={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        left={"8%"}
        top={"45%"}
        position={"absolute"}
        onClick={handlePrevious}
      >
        <AiOutlineLeft />
      </Button>
      <Button
        bg={"#FFFFFF"}
        borderRadius={"50px"}
        border={"none"}
        width={"54px"}
        height={"54px"}
        color={"green"}
        pt={"5px"}
        fontSize={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        right={"8%"}
        top={"45%"}
        position={"absolute"}
        onClick={handleNext}
      >
        <AiOutlineRight />
      </Button>
    </div>
  );
};

export default Carousel;
