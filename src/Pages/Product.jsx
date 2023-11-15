import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
import {
  Box,
  Button,
  Container,
  Grid,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import SliderC from "../Components/sliderC";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((result) => setData(result.data));
  }, [id]);

  let images = Array.isArray(data.images) ? [...data.images] : [];

  return (
    <Container mt={30} maxW={"1600px"}>
      {data.thumbnail ? (
        <Box display={"flex"} gap={"25px"}>
          <SliderC images={images} />
          <Box py={"40px"} display={"flex"} flexDir={"column"}>
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
                <Text as={"span"} display={"inline"} fontWeight={"500"}>
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
        </Box>
      ) : (
        <Grid mt={30} templateColumns={"repeat(4,1fr)"} gap={"38px"}>
          <Box boxShadow="lg">
            <SkeletonCircle
              borderRadius={0}
              width={"500px"}
              height={"320px"}
              display={"inline-block"}
            />{" "}
            <SkeletonCircle
              borderRadius={0}
              width={"500px"}
              height={"60px"}
              display={"inline-block"}
            />
          </Box>
          <Box>
            <SkeletonText mt="6" noOfLines={1} spacing="3" skeletonHeight="9" />
            <SkeletonText
              mt="6"
              noOfLines={1}
              width={"150px"}
              spacing="3"
              skeletonHeight="4"
            />
            <SkeletonText
              mt="7"
              noOfLines={4}
              width={"320px"}
              spacing="3"
              skeletonHeight="3"
            />
            <SkeletonText mt="6" noOfLines={2} spacing="3" skeletonHeight="2" />
            <SkeletonCircle
              borderRadius={5}
              width={"132px"}
              mt={"60px"}
              height={"48px"}
              display={"inline-block"}
            />
          </Box>
        </Grid>
      )}
    </Container>
  );
};

export default Product;
