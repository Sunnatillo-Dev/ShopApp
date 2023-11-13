import { Box, Container, Image } from "@chakra-ui/react";
import React from "react";
import poster1 from "../assets/image/poster1.png";
import poster2 from "../assets/image/poster2.png";
import poster3 from "../assets/image/poster3.png";

const Posters = () => {
  return (
    <Container maxW={1600}>
      <Box m={"120px 0 0"} display={"flex"} gap={"40px"}>
        <Image src={poster1} />
        <Box>
          <Image src={poster2} />
          <Image src={poster3} />
        </Box>
      </Box>
    </Container>
  );
};

export default Posters;
