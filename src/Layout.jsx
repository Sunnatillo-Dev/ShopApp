import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
