import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";
import { BsFacebook, BsYoutube, BsSearch, BsTelephone } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <Box
      maxW={"1920px"}
      height={"412px"}
      bg={"#3A8F34"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      m={"90px 0 0"}
    >
      <Flex flexDirection={"column"} gap={"68px"}>
        <Box display={"flex"} flexDirection={"column"} gap={"43px"}>
          <Box>
            <Text color={"white"} fontSize={30}>
              CompanyName
            </Text>
          </Box>
          <Flex gap={"15px"}>
            <BsFacebook color="white" fontSize={25} />
            <BsYoutube color="white" fontSize={25} />
            <SlSocialVkontakte color="white" fontSize={25} />
            <AiFillTwitterCircle color="white" fontSize={25} />
            <BiLogoInstagramAlt color="white" fontSize={25} />
          </Flex>
        </Box>
        <Box>
          <Text color={"white"} fontSize={12}>
            @ 2020 Company Все права защищены
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection={"column"} gap={"15px"} color={"white"}>
        <Text>Трубчатые радиаторы</Text>
        <Text>Биметаллические радиаторы</Text>
        <Text>Алюминиевые радиаторы</Text>
        <Text>Панельные радиаторы</Text>
        <Text>Полотенцесушители</Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"15px"} color={"white"}>
        <Text>Внутрипольные конвекторы</Text>
        <Text>Напольные конвекторы</Text>
        <Text>Тёплые полы</Text>
        <Text>Комплектующие</Text>
        <Text>Бренды</Text>
      </Flex>
      <Flex flexDirection={"column"} gap={"15px"} color={"white"}>
        <Text>Каталог</Text>
        <Text>Бренды</Text>
        <Text>Сертификаты</Text>
        <Text>Услуги</Text>
        <Text>О нас</Text>
        <Text>Доставка и оплата</Text>
      </Flex>
      <Box display={"flex"} flexDirection={"column"} gap={"25px"}>
        <Box
          width={"363px"}
          height={"40px"}
          border={"1px solid white"}
          borderRadius={"5px"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Input
            bg={"transparent"}
            fontSize={18}
            color={"white"}
            placeholder="Поиск"
            border={"none"}
            outline={"none"}
          />
          <BsSearch color="white" fontSize={25} />
        </Box>
        <Flex flexDirection={"column"} gap={"20px"}>
          <Flex alignItems={"center"}>
            <Box>
              <CiLocationOn color="white" fontSize={25} />
            </Box>
            <Flex flexDirection={"column"} color={"white"}>
              <Text fontSize={18}>Москва, Павловская 16</Text>
              <Text fontSize={14}>пн-пт 9:00-20:00</Text>
            </Flex>
          </Flex>
          <Flex gap={5}>
            <Box>
              <BsTelephone color="white" fontSize={20} />
            </Box>
            <Flex flexDirection={"column"} gap={"10px"} color={"white"}>
              <Text fontSize={18}>+7 (977) 837-12-45</Text>
              <Text fontSize={14}>пн-пт 9:00-20:00</Text>
              <Flex>
                <Link>Заказать звонок</Link>
                <Link>Заказать расчет</Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Footer;
