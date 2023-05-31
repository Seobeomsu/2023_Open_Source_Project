import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import GoodDay from "./pages/GoodDay";
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/GoodDay" element={<GoodDay/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
