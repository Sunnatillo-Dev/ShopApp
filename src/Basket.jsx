import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import React, { useContext, useEffect, useState } from "react";
import ParamContext from "./Context/Context";
import { Box, Button, Container, Image, Text } from "@chakra-ui/react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineClose,
} from "react-icons/ai";

const Basket = () => {
  let { PageID, setPageID } = useContext(ParamContext);
  const [data, setData] = useState([]);

  const removeFromBasket = (itemId) => {
    setPageID((prevPageID) => {
      const newPageID = prevPageID.filter((item) => itemId !== item);
      localStorage.setItem("PageID", JSON.stringify(newPageID));
      return newPageID;
    });
  };

  useEffect(() => {
    if (PageID.length > 0) {
      const fetchData = async () => {
        const requests = PageID.map((item) =>
          axios.get(`https://dummyjson.com/products/${item}`)
        );

        const responses = await axios.all(requests);
        const newData = responses.map((response) => response.data);
        setData(newData);
      };

      fetchData();
    } else {
      setData([]);
    }
  }, [PageID]);

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      gap={"38px"}
      maxW={"1600px"}
    >
      {data.map((item) => (
        <Box
          p={"40px"}
          alignItems={"center"}
          maxW={"1030px"}
          height={"260px"}
          gap={"30px"}
          bg={"#fff"}
          display={"flex"}
          key={item.id}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"30px"}
            height={"150px"}
          >
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
                <Text>Количество:</Text>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <Button minW={0} variant={"unstyled"}>
                    <AiOutlineMinusCircle />
                  </Button>
                  <Text>{1}</Text>
                  <Button minW={0} variant={"unstyled"}>
                    <AiOutlinePlusCircle />
                  </Button>
                </Box>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Text>Цена за едeницу:</Text>
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
              onClick={() => removeFromBasket(item.id)}
              variant={"unstyled"}
            >
              <AiOutlineClose fontSize={"20px"} />
            </Button>
            {/* For now */}
            <Text
              color="#4B4B4B"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              textTransform="uppercase"
            >
              {item.price} ₽
            </Text>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Basket;
