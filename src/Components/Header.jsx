import { Box, Container, Flex, Input, Text } from "@chakra-ui/react";
import { BsTelephone, BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LuCalculator } from "react-icons/lu";
import { AiOutlineArrowDown, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from "react";
import ParamContext from "../Context/Context";

function Header() {
  let navigate = useNavigate();
  let { PageID } = useContext(ParamContext);
  let newPageID =
    JSON.parse(localStorage.getItem("PageID")).length || [].length;
  return (
    <Box width={"100%"} mb={"20px"} py={"40px"} bg={"#fff"}>
      <Container maxW={1600} m={"0 auto"}>
        <Flex alignItems={"center"} justify={"space-between"}>
          <Box>
            <Text fontSize={30}>CompanyName</Text>
          </Box>
          <Box display={"flex"} gap={10}>
            <Box>
              <BsTelephone color="green" fontSize={25} />
            </Box>
            <Flex flexDirection={"column"} gap={5}>
              <Text fontSize={20}>+7 (977) 837-12-45</Text>
              <Text fontSize={14}>mail@mail.ru</Text>
              <a>Products:</a>
            </Flex>
            <Box>
              <CiLocationOn color="green" fontSize={30} />
            </Box>
            <Flex flexDirection={"column"} gap={5}>
              <Text fontSize={18}>Москва, Павловская 16</Text>
              <Text fontSize={14}>пн-пт 9:00-20:00</Text>
            </Flex>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"363px"}
            height={"40px"}
            border={"2px solid #939393"}
            borderRadius={5}
          >
            <Input
              fontSize={18}
              placeholder="Поиск"
              border={"none"}
              outline={"none"}
            />
            <BsSearch fontSize={25} />
          </Box>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
            width={213}
            height={50}
            borderRadius={10}
            bg={"#3A8F34"}
          >
            <LuCalculator color="white" fontSize={24} />
            <Text color={"white"}>Заказать расчет</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={"space-between"} mt={33}>
          <Flex>
            <Link to={"/"}>Home</Link>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Link to={"/radiators"}>Радиаторы</Link>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>Полотенцесушители </Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>конвекторы</Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>Теплые полы</Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>комплектующие</Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>бренды</Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>доставка и оплата</Text>
          </Flex>
          <Flex>
            <Text>О нас</Text>
          </Flex>
          <Flex>
            <Text>контакты</Text>
          </Flex>
          <Box position={"relative"}>
            <RiShoppingCart2Line
              cursor={"pointer"}
              onClick={() => navigate("/basket")}
              fontSize={24}
              color="green"
            />
            <Text
              userSelect={"none"}
              top={"-7px"}
              backgroundColor={newPageID ? "green" : ""}
              width={"20px"}
              height={"20px"}
              borderRadius={"50px"}
              textAlign={"center"}
              color={"white"}
              right={"-7px"}
              position={"absolute"}
            >
              {newPageID ? newPageID : ""}
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
export default Header;
