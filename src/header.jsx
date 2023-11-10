import { Box, Container, Flex, Input, Link, Text } from '@chakra-ui/react'
import {BsTelephone, BsSearch} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {LuCalculator} from 'react-icons/lu'
import {AiOutlineArrowDown, AiOutlineShoppingCart} from 'react-icons/ai'

function Header() {
  return (
    <Box mt={40}>
      <Container maxW={1600} m={'0 auto'}>
        <Flex  justify={'space-between'}>
          <Box>
            <Text fontSize={30}>CompanyName</Text>
          </Box>
          <Box display={'flex'}  gap={10}>
            <Box>
              <BsTelephone color='green' fontSize={25}/>
            </Box>
            <Flex flexDirection={'column'} gap={5}>
              <Text fontSize={20}>+7 (977) 837-12-45</Text>
              <Text fontSize={14}>mail@mail.ru</Text>
              <Link textDecoration={'green'} fontSize={20} color={'green'}>Заказать звонок</Link>
            </Flex>
            <Box>
              <CiLocationOn color='green' fontSize={30}/>
            </Box>
            <Flex flexDirection={'column'} gap={5}>
              <Text  fontSize={18}>Москва, Павловская 16</Text>
              <Text  fontSize={14}>пн-пт 9:00-20:00</Text>
            </Flex>
          </Box>
          <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} width={363} height={40} border={'2px solid #939393'} borderRadius={5}>
            <Input fontSize={18}  placeholder='Поиск' border={'none'} outline={'none'}/>
            <BsSearch fontSize={25}/>
          </Box>
          <Flex alignItems={'center'} justifyContent={'center'} gap={5} width={213} height={50} borderRadius={10} bg={'#3A8F34'}>
            <LuCalculator color='white' fontSize={24}/>
            <Text color={'white'}>Заказать расчет</Text>
          </Flex>
        </Flex>
        <Flex justifyContent={'space-between'} mt={33}>
          <Flex>
            <Text>Радиаторы</Text>
            <AiOutlineArrowDown />
          </Flex>
          <Flex>
            <Text>Полотенцесушители</Text>
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
          <Box>
            <AiOutlineShoppingCart  fontSize={24} color='green'/>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
