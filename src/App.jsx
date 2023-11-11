import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel/Carousel.jsx";
import Cards from "./Cards/Cards.jsx";
import Brands from "./Brands/Brands.jsx";
import About from "./About/About.jsx";
import Posters from "./Posters/Posters.jsx";

const App = () => {
  return (
    <Box>
      <Carousel />
      <Cards />
      <Brands />
      <About />
      <Posters />
    </Box>
  );
};

export default App;
