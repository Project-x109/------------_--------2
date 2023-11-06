import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bigorphy from "./otherPages/Biography ";
import Discography from "./otherPages/Discography ";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bigorphy />} />
        <Route path="/discography" element={<Discography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
