import React from "react";

import { Route, Routes } from "react-router-dom";

import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import  About  from "../Pages/About";
import Technologies from "../Pages/Technologies";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/technologies" element={<Technologies />}></Route>
    </Routes>
  );
};

export default AllRoute;
