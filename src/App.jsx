import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Cards from './Cards/Cards'
import Brands from './Brands/Brands'
import About from './About/About'
import Footer from './Footer/Footer'
import Posters from './Posters/Posters'

const App = () => {
  return (
    <Box>
        <Carousel/>
        <Cards/>
        <Brands/>
        <About/>
        <Posters/>
    </Box>
  )
}

export default App