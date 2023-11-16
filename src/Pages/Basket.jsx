import React, { useContext, useEffect } from "react";
import ParamContext from "../Context/Context";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import BasketCard from "../Components/basket.card";

const Basket = () => {
  const { setPageID, total, setTotal } = useContext(ParamContext);

  const removeFromBasket = (itemId) => {
    const newPageID = JSON.parse(localStorage.getItem("PageID")).filter(
      (item) => itemId !== item.id
    );
    setPageID(newPageID);
    localStorage.setItem("PageID", JSON.stringify(newPageID));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const newPageID = JSON.parse(localStorage.getItem("PageID")).map((item) =>
      item.id === itemId
        ? { ...item, quantity: newQuantity, total: item.price * newQuantity }
        : item
    );
    setPageID(newPageID);
    localStorage.setItem("PageID", JSON.stringify(newPageID));
  };

  const newPageID = JSON.parse(localStorage.getItem("PageID"));

  return (
    <Container
      maxW={"1600px"}
      justifyContent={"space-between"}
      display={"flex"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={"38px"}>
        {newPageID.map((item) => {
          return (
            <BasketCard
              key={item.id}
              item={item}
              func={removeFromBasket}
              onQuantityChange={handleQuantityChange}
            />
          );
        })}
      </Box>
      {newPageID.length ? (
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"400px"}
          height={"400px"}
          bg={"white"}
        >
          <Text fontSize={"30px"}>Total Sum</Text>
          <Text fontSize={"30px"}>{total} ₽</Text>
        </Box>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Basket;
