import React, { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import LoginMobile from "../Login/LoginMobile.jsx";
// import { useParams } from "react-router-dom";
import { useState } from "react";
import SignupMobile from "../Login/SignupMobile.jsx";
import Cart from "./Cart.jsx";

const FrontPage = () => {
  //   // let { userId } = useParams();
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await fetch("http://localhost:8000/verify", {
          method: "GET",
          credentials: "include", // send cookies
        });

        console.log("VERIFY response status:", res.status);

        if (!res.ok) {
          setIsLogin(false);
          return;
        }

        const data = await res.json();
        console.log("VERIFY response JSON:", data);

        if (data && data.success) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      } catch (err) {
        console.error("verify error", err);
        setIsLogin(false);
      }
    };

    verify();
  }, []);

  // while checking the cookie, show a loading UI
  if (isLogin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking session…</p>
      </div>
    );
  }

  const toggleDrawer = (newOpen) => () => {
    setIsCartOpen(newOpen);
  };

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id == product.id);
    if (existingProduct) {
      const addInCart = cartItems.map((item) =>
        item.id == product.id
          ? { ...item, addedQuantity: item.addedQuantity + 1 }
          : item
      );
      setCartItems(addInCart);
    } else {
      setCartItems([...cartItems, { ...product, addedQuantity: 1 }]);
    }
  };

  const IncreaseProductQuantity = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    const updateInCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...exist, addedQuantity: exist.addedQuantity + 1 }
        : item
    );
    setCartItems(updateInCart);
  };
  const decreaseProductQuantity = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.addedQuantity > 1) {
      const updateInCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...exist, addedQuantity: exist.addedQuantity - 1 }
          : item
      );
      setCartItems(updateInCart);
    }
    if (exist.addedQuantity == 1) {
      const removeFromCart = cartItems.filter((item) => item.id !== exist.id);
      setCartItems(removeFromCart);
    }
  };
  const TotalNoOfItems = cartItems.reduce((acc, current) => {
    return acc + current.addedQuantity;
  }, 0);

  const totalPriceAfterDiscount = cartItems.reduce((acc, current) => {
    return acc + current.price * current.addedQuantity;
  }, 0);

  const totalOfActualPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.originalPrice * curr.addedQuantity;
  }, 0);

  const deliveryCharge = totalPriceAfterDiscount > 500 ? 0 : 30;

  const handlingCharge = 2;

  const grandTotal = totalPriceAfterDiscount + deliveryCharge + handlingCharge;

  return (
    <div>
      <Navbar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        toggleDrawer={toggleDrawer}
        cartItems={cartItems}
        TotalNoOfItems={TotalNoOfItems}
        grandTotal={grandTotal}
      ></Navbar>
      <Hero
        addToCart={addToCart}
        cartItems={cartItems}
        IncreaseProductQuantity={IncreaseProductQuantity}
        decreaseProductQuantity={decreaseProductQuantity}
      ></Hero>

      {isSignup == false && isLogin == false && (
        <LoginMobile
          isSignup={isSignup}
          setIsSignup={setIsSignup}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setRole={setRole}
        ></LoginMobile>
      )}

      {isSignup && (
        <SignupMobile isSignup={isSignup} setIsSignup={setIsSignup} />
      )}
      <Cart
        isCartOpen={isCartOpen}
        toggleDrawer={toggleDrawer}
        cartItems={cartItems}
        setCartItems={setCartItems}
        IncreaseProductQuantity={IncreaseProductQuantity}
        decreaseProductQuantity={decreaseProductQuantity}
        TotalNoOfItems={TotalNoOfItems}
        totalPriceAfterDiscount={totalPriceAfterDiscount}
        totalOfActualPrice={totalOfActualPrice}
        deliveryCharge={deliveryCharge}
        handlingCharge={handlingCharge}
        grandTotal={grandTotal}
      />
    </div>
  );
};

export default FrontPage;
