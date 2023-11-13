import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import brand1 from "../assets/image/brand1.png";
import brand2 from "../assets/image/brand2.png";

const Brands = () => {
  return (
    <Container maxW={1600}>
      <Box>
        <Text
          m={"0 0 50px"}
          fontWeight={"bold"}
          color={"#4B4B4B"}
          fontSize={"36px"}
        >
          С кем мы работаем
        </Text>
        <Flex
          align={"center"}
          justify={"space-between"}
          templatecolumns={"repeat(4,1fr)"}
          padding={"90px 20px"}
        >
          <Box>
            <Image src={brand1} />
          </Box>
          <Box>
            <Image src={brand1} />
          </Box>
          <Box>
            <Image src={brand2} />
          </Box>
          <Box>
            <Image src={brand1} />
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Brands;
