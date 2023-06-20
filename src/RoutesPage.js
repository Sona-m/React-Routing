import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/buttons" element={<ButtonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
