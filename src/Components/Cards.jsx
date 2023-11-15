import {
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

const Cards = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setState(result.data.products));
  }, []);

  return (
    <Container maxW={1600}>
      <Box m={"90px 0 50px"}>
        <Text
          m={"0 0 50px"}
          fontWeight={"bold"}
          color={"#4B4B4B"}
          fontSize={"36px"}
        >
          Каталог
        </Text>
        <Grid templateColumns={"repeat(4,1fr)"} gap={"38px"}>
          {state.length ? (
            state.map((item) => {
              return (
                <GridItem
                  key={item.id}
                  borderRadius={"5px"}
                  backgroundColor={"white"}
                  p={"30px"}
                >
                  <Image
                    objectFit={"cover"}
                    width={"312px"}
                    height={"287px"}
                    src={item.thumbnail}
                  />
                  <Text m={"25px 0 0"} textAlign={"center"}>
                    {item.title}
                  </Text>
                </GridItem>
              );
            })
          ) : (
            <Grid templateColumns={"repeat(4,1fr)"} gap={"38px"}>
              {[0, 0, 0, 0, 0, 0, 0, 0].map((i,b) => (
                <Box key={b} padding="6" boxShadow="lg" bg="white">
                  <SkeletonCircle
                    borderRadius={0}
                    width={"312px"}
                    height={"287px"}
                  />
                  <SkeletonText
                    mt="4"
                    noOfLines={2}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cards;
