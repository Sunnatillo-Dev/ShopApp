import React, { useContext, useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";
import ParamContext from "../Context/Context";

const BasketCard = ({ item, func, onQuantityChange }) => {
  let { total, setTotal } = useContext(ParamContext);
  const [quantity, setQuantity] = useState(item.quantity || 1);
  let price = item.price;

  const handleQuantityIncrement = () => {
    setTotal((total += price));
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleQuantityDecrement = () => {
    setTotal((total -= price));
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <Box
      p={"40px"}
      alignItems={"center"}
      width={"1030px"}
      height={"260px"}
      gap={"30px"}
      bg={"#fff"}
      display={"flex"}
      key={item.id}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"30px"} height={"150px"}>
        <Image
          height={"180px"}
          objectFit={"cover"}
          width={"180px"}
          src={item.thumbnail}
        />
        <Box
          py={"10px"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text
            color="#4B4B4B"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            {item.title}
          </Text>
          <Box alignItems={"center"} gap={"10px "} display={"flex"}>
            <Text>Quantity:</Text>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Button
                minW={0}
                onClick={() => {
                  if (quantity < 2) {
                    func(item.id);
                  }
                  handleQuantityDecrement();
                }}
                variant={"unstyled"}
              >
                <AiOutlineMinusCircle />
              </Button>
              <Text>{quantity}</Text>
              <Button
                minW={0}
                onClick={handleQuantityIncrement}
                variant={"unstyled"}
              >
                <AiOutlinePlusCircle />
              </Button>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Text>Price per unit:</Text>
            <Text
              color="#4B4B4B"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              textTransform="uppercase"
            >
              {item.price} ₽
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"space-between"}
        height={"150px"}
        alignItems={"flex-end"}
      >
        <Button
          onClick={() => {
            func(item.id);
            setTotal((total -= item.price * quantity));
          }}
          variant={"unstyled"}
        >
          <AiOutlineClose fontSize={"20px"} />
        </Button>
        <Text
          color="#4B4B4B"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          textTransform="uppercase"
        >
          {+item.price * +quantity} ₽
        </Text>
      </Box>
    </Box>
  );
};

export default BasketCard;
