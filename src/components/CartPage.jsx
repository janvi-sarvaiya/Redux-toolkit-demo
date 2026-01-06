import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../features/product/cartSlice";
import CartIcon from "./CartIcon";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart.cartData);

  const handleChange = (id, quantity) => {
    if (+quantity === "") {
      dispatch(updateCart({ id, quantity: "" }));
    } else if (quantity === 0) {
      dispatch(deleteCart(id));
    } else {
      dispatch(updateCart({ id, quantity: +quantity }));
    }
  };

  const data = cartData.map((elem) => {
    const productDetails = product.find(({ id }) => id === elem.id);
    return {
      ...elem,
      ...productDetails,
    };
  });

  console.log(data);
  const totalPrice = useMemo(() => {
    return data.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [data]);

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{ background: "none", fontSize: "30px", borderRadius: "10px" }}
        >
          &#8617;
        </button>
        <h1 style={{ textAlign: "center" }}>Your Cart List</h1>
        <CartIcon />
      </div>

      <div className="product">
        {data.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              backgroundColor: "lightgray",
              padding: "10px",
              width: "100%",
            }}
          >
            Your cart is empty!
          </p>
        ) : (
          <div>
            {data.map(({ id, image, title, category, price, quantity }) => (
              <div
                className="product-cart"
                key={id}
                style={{ float: "left", marginLeft: "30px", marginTop: "20px" }}
              >
                <img src={image} alt={title} height="150px" width="150px" />
                <h3>{category}</h3>
                <p>Price : ₹{price}/- </p>
                <input
                  type="number"
                  min="1"
                  className="quantityBox"
                  onKeyDown={(e) => {
                    if (["-", "+", "."].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => handleChange(id, e.target.value)}
                  value={quantity === 0 ? "" : quantity}
                  style={{ width: "80px" }}
                />
                <button onClick={() => dispatch(deleteCart(id))}>Delete</button>
                <p>total price : {(price * quantity).toFixed(1)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <p
        style={{
          textAlign: "center",
          backgroundColor: "#33758f",
          padding: "10px",
          color: "white",
        }}
      >
        {" "}
        Grand Total : {totalPrice.toFixed(1)}
      </p>
    </div>
  );
}
