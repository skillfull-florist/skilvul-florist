import React from "react";
import { useState } from "react";
import "./keranjang.css"
const Counter = () => {
  const [counter, setCounter] = useState(0);


  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    };
  };
  return (



    <p>
      <button className="jumlah" onClick={decrement}>-</button>
      {counter}
      <button className="jumlah" onClick={increment}>+</button>
    </p>

  );
};

export default Counter;
