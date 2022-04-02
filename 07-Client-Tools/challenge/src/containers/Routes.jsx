import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import LandingPage from "../components/LandingPage";

const Routesjsx = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default Routesjsx;
