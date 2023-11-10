import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image, Button } from "@chakra-ui/react";

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
    <div style={{ position: "relative" }}>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D"
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
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww"
          />
        </div>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww"
          />
        </div>
        <div>
          <Image
            width={"100%"}
            height={"490px"}
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww"
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
        pt={"8px"}
        fontSize={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        left={"8%"}
        top={"45%"}
        position={"absolute"}
        onClick={handlePrevious}
      >
        &#129032;
      </Button>
      <Button
        bg={"#FFFFFF"}
        borderRadius={"50px"}
        border={"none"}
        width={"54px"}
        height={"54px"}
        color={"green"}
        pt={"8px"}
        fontSize={"40px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        right={"8%"}
        top={"45%"}
        position={"absolute"}
        onClick={handleNext}
      >
        &#129034;
      </Button>
    </div>
  );
};

export default Carousel;
