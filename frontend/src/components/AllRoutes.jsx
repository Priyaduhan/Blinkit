import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./Home/FrontPage";
import NewPage from "./Home/NewPage";
import ArrayRender from "./Home/ArrayRender";
import ShowingFirstname from "./Home/ShowingFirstname";
import Products from "./Home/Products";
import LoginMobile from "./Login/LoginMobile";
import AdminPage from "./AdminPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/user/:id" element={<NewPage />}></Route>
        <Route path="/userArray" element={<ArrayRender />}></Route>
        <Route path="/firstname" element={<ShowingFirstname />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<LoginMobile />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
