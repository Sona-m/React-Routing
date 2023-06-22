import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import DynamicPage from "./pages/DynamicPage";
import Uselocation from "./pages/Uselocation";
import RouteList from "./pages/RouteList";
import RouteID from "./components/RouteID";
import NewRoute from "./components/NewRoute";
import PageNotFound from "./pages/PageNotFound";
import SearchForm from "./pages/UseSearchParam";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "./pages/HomePage";

const RoutesPage = () => {
  return (
      <Routes>
         <Route path = "/" element={<HomePage/>} exact />
         <Route path = "/login" element={< LoginPage/>} />
        <Route path = "/search" element={<ProtectedRoute>< SearchForm/></ProtectedRoute>} />
        <Route path="/accordion" element={<ProtectedRoute><AccordionPage /></ProtectedRoute>} />
        <Route path="/dropdown" element={<ProtectedRoute><DropdownPage /></ProtectedRoute>} />
        <Route path="/buttons" element={<ProtectedRoute><ButtonPage /></ProtectedRoute>} />
        <Route path="/dynamic" element={<ProtectedRoute><DynamicPage /></ProtectedRoute> }/>
        <Route path="/dynamic/:id" element={<Uselocation />} />
        <Route path="/nested" element = {<ProtectedRoute><RouteList/></ProtectedRoute>}>
               <Route path=":id" element = {<RouteID/>} />
               <Route path="new" element = {<NewRoute/>} />
        </Route>
        <Route path="*" element = {<PageNotFound/>} />
    </Routes>
    
  );
};

export default RoutesPage;
