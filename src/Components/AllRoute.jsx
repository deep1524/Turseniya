import React from "react";

import { Route, Routes } from "react-router-dom";

import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import  About  from "../Pages/About";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AllRoute;
