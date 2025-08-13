import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Login from "../Login/Login.jsx";
import LoginMobile from "../Login/LoginMobile.jsx";
const FrontPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="hidden lg:flex">
        <Login></Login>
      </div>
      <div className="lg:hidden">
        <LoginMobile></LoginMobile>
      </div>
    </div>
  );
};

export default FrontPage;
