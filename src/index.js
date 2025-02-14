import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Showreel from "./pages/showreel";
import Profile from "./pages/profile";
import Contact from "./pages/contact";
import Thanks from "./pages/thanks";
import Nav from "./Nav";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Nav/> 
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="showreel" element={<Showreel/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="thanks" element={<Thanks/>}/>
    </Routes>
  </BrowserRouter>
);
