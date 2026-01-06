import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const cartData = useSelector((state) => state.cart.cartData);
  const cartItems = cartData.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0);
  return (  
    <div className="cart">
      <Link to="/product"> Cart [{cartItems}]</Link>
    </div>
  );
}


