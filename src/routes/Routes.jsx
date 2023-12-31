import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import Layout from "../Layout.jsx";
import Radiators from "../Components/Radiators.jsx";
import Product from "../Pages/Product.jsx";
import Basket from "../Pages/Basket.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/radiators" element={<Radiators />} />
        <Route path="/radiators/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};

export default Routers;
