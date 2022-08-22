import React from "react";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";

//pages
import Login from "./Login/Login";
import Home from "./Home/Home";
import FoodForm from "./FoodForm/FoodForm";
import ClientForm from "./ClientForm/ClientForm";
import Cart from "./Cart/Cart";

function Pages() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.path}>
      <Route path="/" element={<Home />} />
      <Route exact path="/prato/:id" element={<FoodForm />} />
      <Route exact path="/prato" element={<FoodForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<ClientForm />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}

export default Pages;
