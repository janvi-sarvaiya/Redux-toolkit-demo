import React, { useEffect, useState } from "react";
import {
  useAddCartMutation,
  useUpdateCartMutation,
} from "../features/cart/cartApi";
import { useSelector, useDispatch } from "react-redux";
import { closeCurrentCart } from "../features/cart/cartSlice";
import CartList from "./CartList";

export default function CartForm() {
  const [addCart] = useAddCartMutation();
  const [updateCart] = useUpdateCartMutation();
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cartStore.currentCart);
  const data = {
    name: "",
    price: "",
    category: "",
    image: "",
  };
  const [item, setItem] = useState(data);

  useEffect(() => {
    if (currentCart) {
      setItem(currentCart);
    } else {
      setItem(data);
    }
  }, [currentCart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentCart) {
      await updateCart(item);
    } else {
      await addCart(item);
    }
    setItem(data);
    console.log(item);
    dispatch(closeCurrentCart());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="cartForm">
        <h1> {currentCart ? "Update Cart" : "Add New Cart"}</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            placeholder="enter product name"
          />
          <br />
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            placeholder="enter product price"
          />
          <br />
          <input
            type="text"
            name="category"
            value={item.category}
            onChange={handleChange}
            placeholder="enter category of product"
          />
          <br />
          <input
            type="text"
            name="image"
            value={item.image}
            onChange={handleChange}
            placeholder="enter image link"
          />
          <br />
          <button type="submit">
            {currentCart ? "Update Cart" : "Add Cart"}
          </button>
        </form>
      </div>
      <br />
      <CartList />
    </>
  );
}
