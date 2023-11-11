import {
  Box,
  Flex,
  Heading,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Rcards from "../R-Cards.jsx";
import bn1 from "../assets/image/bn1.png";
import bn2 from "../assets/image/bn2.png";
let Filter = ({ text, max, min }) => {
  return (
    <Flex flexDir={"column"}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text>{text}</Text>
        <AiOutlineClose />
      </Box>
      <Slider
        m={"13px 0 20px 0"}
        aria-label="slider-ex-1"
        defaultValue={30}
        colorScheme="teal"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text
          p={"5px 24px"}
          borderRadius={"4px"}
          color={"#939393"}
          border={"1px solid #939393"}
        >
          {min}
        </Text>
        <Text
          p={"5px 24px"}
          borderRadius={"4px"}
          color={"#939393"}
          border={"1px solid #939393"}
        >
          {max}
        </Text>
      </Box>
    </Flex>
  );
};
const Radiators = () => {
  return (
    <Box maxW={"1600px"} m={"0 auto"}>
      <Heading display={"block"} as={"h1"} my={"50px"}>
        Радиаторы
      </Heading>
      <Box maxW={1600} gap={"80px"} display={"flex"} m={"0 auto"}>
        <Box
          width={"285px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"24px"}
        >
          <Filter text={"ЦЕНА"} min={"мин. цена"} max={"макс. цена"} />
          <Filter text={"ВЫСОТА, ММ"} min={"от 5"} max={"до 3000"} />
          <Filter text={"ГЛУБИНА, ММ"} min={"от 1"} max={"до 180"} />
          <Filter text={"ПЛОЩАДЬ ОБОГРЕВА, М²"} min={"от 76"} max={"до 3000"} />
          <Filter text={"КОЛИЧЕСТВО ."} min={"от 76"} max={"до 3000"} />
          <Image src={bn1} />
          <Image src={bn2} />
        </Box>
        <Rcards />
      </Box>
    </Box>
  );
};

export default Radiators;