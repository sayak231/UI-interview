import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../redux/actions/addCount.js";

export const Count = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount())}>Add to count</button>
    </main>
  );
};
