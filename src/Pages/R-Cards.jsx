import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import ParamContext from "../Context/Context";

const Rcards = () => {
  const [data, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setState(result.data.products));
  }, []);

  let ToOtherPage = useNavigate();
  let { PageID, setPageID } = useContext(ParamContext);

  const isItemInBasket = (item) => PageID.includes(item);

  const handleAddToBasket = (item) => {
    if (
      !PageID.some((item2) => {
        return item2.id == item.id;
      })
    ) {
      setPageID([...PageID, item]);
    }
    localStorage.setItem("PageID", JSON.stringify([...PageID, item]));
  };

  return (
    <Box maxW={"1600px"}>
      <Grid gap={"20px"} templateColumns={"repeat(3,1fr)"}>
        {data.length ? (
          data.slice(0, 12).map((item) => {
            const isInBasket = isItemInBasket(item);
            return (
              <GridItem
                width={"400px"}
                height={"530px"}
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
                  alt="image"
                />
                <Box m={"20px 0 0"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      fontSize={"18px"}
                      fontWeight={"bold"}
                      color={"#666666"}
                    >
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
                      {((item.price * item.discountPercentage) / 10).toFixed()}{" "}
                      ₽
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
                <Box
                  mt={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Button
                    leftIcon={<RiShoppingCart2Line />}
                    colorScheme="teal"
                    size="md"
                    onClick={() => {
                      handleAddToBasket(item);
                    }}
                  >
                    {isInBasket ? "Added !" : " Add to Basket"}
                  </Button>
                  <Button
                    colorScheme="teal"
                    size="md"
                    fontSize="md"
                    fontWeight="bold"
                    borderRadius="md"
                    onClick={() => ToOtherPage(`/radiators/${item.id}`)}
                    _hover={{
                      bg: "teal.600",
                    }}
                  >
                    Buy
                  </Button>
                </Box>
              </GridItem>
            );
          })
        ) : (
          <Grid gap={"20px"} templateColumns={"repeat(3,1fr)"}>
            {[0, 0, 0, 0, 0, 0, 0, 0].map((i, index) => (
              <Box
                width={"400px"}
                height={"530px"}
                borderRadius={"5px"}
                backgroundColor={"white"}
                key={index}
                p={"30px"}
                padding="6"
                boxShadow="lg"
                bg="white"
              >
                <SkeletonCircle
                  width={"340px"}
                  height={"306px"}
                  borderRadius={0}
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
  );
};

export default Rcards;
