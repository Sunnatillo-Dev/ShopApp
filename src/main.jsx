import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routes.jsx";
import { ParamsContext } from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <ParamsContext>
        <Routers />
      </ParamsContext>
    </BrowserRouter>
  </ChakraProvider>
);
