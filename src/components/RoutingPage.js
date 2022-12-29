import React from "react";
import { Routes, Route } from "react-router-dom";
import Time from "../Time";
import LoginUser from "./auth/LoginUser";
import RegisterUser from "./auth/RegisterUser";
import Home from "./Home";

const RoutingPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginUser />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/home" element={<Home />} />
      <Route path="/time" element={<Time />} />
    </Routes>
  );
};

export default RoutingPage;
