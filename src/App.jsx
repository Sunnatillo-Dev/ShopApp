import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Components/Carousel.jsx";
import Cards from "./Components/Cards.jsx";
import Brands from "./Components/Brands.jsx";
import About from "./Components/About.jsx";
import Posters from "./Components/Posters.jsx";

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
