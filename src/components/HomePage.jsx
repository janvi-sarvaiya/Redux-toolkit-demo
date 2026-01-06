import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/product/cartSlice";
import { fetchProduct } from "../features/product/fetchProduct";
import CartIcon from "./CartIcon";

export default function HomePage() {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const cartData = useSelector((state) => state.cart.cartData);

  const [inputQuantities, setInputQuantities] = useState({});
  const [updatedProduct, setUpdatedProduct] = useState([]);

  const fetchProd = () => {
    const updated = product.map((elem) => {
      return {
        ...elem,
        quantity: cartData.find(({ id }) => id === elem.id)?.quantity,
      };
    });
    setUpdatedProduct(updated);

    const initialQuantities = {};
    updated.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setInputQuantities(initialQuantities);
  };

  useEffect(() => {
    if (product) {
      fetchProd();
    }
  }, [product, cartData]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="container">
      <CartIcon />
      <h1>Product List</h1>
      <div className="product">
        {updatedProduct.map(({ id, title, category, price, image }) => (
          <div className="product-cart" key={id}>
            <img src={image} alt={title} height="150px" width="150px" />
            <h3>{category}</h3>
            <p>Price : ₹{price}/-</p>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              className="quantityBox"
              value={inputQuantities[id]}
              onKeyDown={(e) => {
                if (["-", "+", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
              onChange={(e) => {
                const value = e.target.value;
                if (value <= 0) {
                  setInputQuantities({
                    [id]: "",
                  });
                } else {
                  setInputQuantities({
                    ...inputQuantities,
                    [id]: +value,
                  });
                }
              }}
            />
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    productId: id,
                    pQuantity: +(inputQuantities[id] || 1),
                  })
                )
              }
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
