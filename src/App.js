import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Routes/Home";
import About from "./Components/Routes/About";
import Contact from "./Components/Routes/Contact";
import Signup from "./Components/Routes/Signup";
import Login from "./Components/Routes/Login";
import FrontPage from "./Components/FrontPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
