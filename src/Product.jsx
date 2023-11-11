import { Box, Button, Container, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderC from "./sliderC.jsx";

const Product = () => {
  let params = useParams().id;
  let [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params}`)
      .then((result) => setData(result.data));
  }, []);

  let images = Array.isArray(data.images) ? [...data.images] : [];

  return (
    <Container display={"flex"} gap={"25px"} maxW={"1600px"}>
      <SliderC images={images} />
      <Box py={"40px"} display={"flex"} flexDir={"column"} >
        <Box display={"flex"} flexDir={"column"} gap={"15px"}>
          <Text fontSize={"36px"}>{data.title}</Text>
          <Text fontSize={"30px"} fontWeight={"900"} width={"350px"}>
            {data.brand}
          </Text>
          <Text fontSize={"20px"} width={"350px"}>
            {data.description}
          </Text>
          <Text fontSize={"20px"} fontWeight={"900"} width={"350px"}>
            Rating:{" "}
            <Text display={"inline"} fontWeight={"500"}>
              {data.rating} / 5
            </Text>
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"flex-start"}
          position={"relative"}
          height={"100%"}
        >
          <Text fontSize={"16px"}>
            BUY NOW, save {data.discountPercentage} % of your MONEY
          </Text>
          <Button
            position={"relative"}
            bottom={"-30px"}
            left={0}
            colorScheme="teal"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            borderRadius="md"
            _hover={{
              bg: "teal.600",
            }}
          >
            Buy / {data.price} ₽
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
