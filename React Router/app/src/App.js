import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import  { BrowserRouter, Routes, Route,Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
