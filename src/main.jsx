import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Routers from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <ChakraProvider>
         <Routers />
      </ChakraProvider>
   </BrowserRouter>
);
