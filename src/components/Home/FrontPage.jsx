import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Login from "../Login/Login";
import LoginMobile from "../Login/LoginMobile";
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
