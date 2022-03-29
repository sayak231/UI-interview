// Create an input and give comma separated numbers.
// Display the numbers below one after another

import React, { useState } from "react";

const CounterDisplay = () => {
  const [count, setCount] = useState([]);

  const handleChange = (e) => {
    const text = e.target.value;
    setCount(text.split(","));
  };

  return (
    <>
      <input type="text" value={count} onChange={handleChange} />
      {count.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default CounterDisplay;
