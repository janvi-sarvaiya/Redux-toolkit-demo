import React, { useMemo, useState } from "react";
import {
  useGetCartQuery,
  useDeleteCartMutation,
} from "../features/cart/cartApi";
import { setCurrentCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function CartList() {
  const [deleteCart] = useDeleteCartMutation();
  const { data = [], isLoading, error } = useGetCartQuery();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filterData = useMemo(() => {
    const searchData = search.toLowerCase();
    return data.filter(({ category }) =>
      category.toLowerCase().startsWith(searchData)
    );
  }, [data, search]);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Your Cart not found!!</h1>;
  }

  return (
    <>
      <h1>Show Cart List</h1>

      <label htmlFor="">Search Category : </label>
      <input
        type="text"
        name="search"
        placeholder="Enter Category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ textAlign: "center" }}>
        {data.length === 0 ? (
          <h4>Your cart is empty!</h4>
        ) : (
          <>
            {filterData.map(({ id, name, price, category, image }) => (
              <div
                className="cartlist"
                key={id}
                style={{
                  border: "1px solid darkgray",
                  width: "200px",
                  padding: "10px",
                  float: "left",
                  margin: "10px",
                }}
              >
                <img src={image} alt="" height="100px" width="100px" />
                <h4>Product Name : {name}</h4>
                <p>Product Price : {price}/-</p>
                <p>Category : {category}</p>
                <button onClick={() => deleteCart(id)}>Delete</button>
                <button
                  onClick={() =>
                    dispatch(
                      setCurrentCart({ id, name, price, category, image })
                    )
                  }
                >
                  Edit
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}
