import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../Layout";
import Radiators from "../Radiators/Radiators";
import Product from "../Product";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/radiators" element={<Radiators />} />
        <Route path="/radiators/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default Routers;
