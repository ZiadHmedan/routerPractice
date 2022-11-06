import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Component/Header";
import About from "./Navbar/About";
import Home from "./Navbar/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
