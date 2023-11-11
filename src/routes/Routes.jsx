import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../Layout.jsx";
import Radiators from "../Radiators/Radiators.jsx";
import Product from "../Product.jsx";

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
