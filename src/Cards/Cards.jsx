import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
          {state.map((item) => {
            return (
              <GridItem
                key={item.id}
                borderRadius={"5px"}
                backgroundColor={"white"}
                p={"30px"}
              >
                <Image objectFit={"cover"} width={"312px"} height={"287px"} src={item.thumbnail} />
                <Text m={"25px 0 0"} textAlign={"center"}>
                  {item.title}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Cards;
