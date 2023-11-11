import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Rcards = () => {
  const [data, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setState(result.data.products));
  }, []);
  let ToOtherPage = useNavigate();
  return (
    <Box maxW={1000}>
      <Grid gap={"20px"} templateColumns={"repeat(3,1fr)"}>
        {data.slice(0, 12).map((item) => {
          return (
            <GridItem
              onClick={() => ToOtherPage(`/radiators/${item.id}`)}
              width={"400px"}
              height={"471px"}
              key={item.id}
              borderRadius={"5px"}
              backgroundColor={"white"}
              p={"30px"}
            >
              <Image
                objectFit={"cover"}
                width={"340px"}
                height={"306px"}
                src={item.thumbnail}
              />
              <Box m={"20px 0 0"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"18px"} fontWeight={"bold"} color={"#666666"}>
                    {item.title}
                  </Text>
                </Box>
                <Box
                  m={"20px 0 8px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Text color={"#4B4B4B"} fontSize={"14px"}>
                      предыдущая цена:
                    </Text>
                  </Box>
                  <Text
                    fontSize={"14px"}
                    textTransform={"uppercase"}
                    textDecoration={"line-through"}
                    color={"#4B4B4B"}
                  >
                    {((item.price * item.discountPercentage) / 10).toFixed()} ₽
                  </Text>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Text color={"#4B4B4B"} fontSize={"14px"}>
                      текущая цена:
                    </Text>
                  </Box>
                  <Text
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    color={"#4B4B4B"}
                  >
                    {item.price} ₽
                  </Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Rcards;
