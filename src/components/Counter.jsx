import React from "react";
import {
  incrememnt,
  decremennt,
  incrementByAmount,
  decremenntByAmount,
} from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const msg = useSelector((state) => state.message.msg);
  return (
    <div className="counter-app">
      <h1>Counter App</h1>
      <h2>Counter : {value}</h2>
      <button onClick={() => dispatch(incrememnt())}>Increament</button>
      <button onClick={() => dispatch(decremennt())}>decremennt</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        increment By 5
      </button>
      <button onClick={() => dispatch(decremenntByAmount(5))}>
        decremennt by 5
      </button>

      <ul>
        {msg.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
}
