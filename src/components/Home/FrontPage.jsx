import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import LoginMobile from "../Login/LoginMobile.jsx";

import { useState } from "react";
import SignupMobile from "../Login/SignupMobile.jsx";

const FrontPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      {isSignup == false && (
        <LoginMobile
          isSignup={isSignup}
          setIsSignup={setIsSignup}
        ></LoginMobile>
      )}

      {isSignup && <SignupMobile />}
    </div>
  );
};

export default FrontPage;
