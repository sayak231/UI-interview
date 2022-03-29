import React, { useState, useEffect, useRef } from "react";

export const SetIntervalProblem = () => {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      //   if (seconds === 10) {
      //     setSeconds(1);
      //   } else {
      //     setSeconds((seconds) => seconds + 1);
      //   }
      // above or below
      setSeconds((seconds) => (seconds === 10 ? 1 : seconds + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return <div>{seconds}</div>;
};

export function Counter() {
  const [count, setCount] = useState(0);

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Counter and Continue Counting
      </button>
      <button
        onClick={() => {
          setCount(0);
          clearInterval(intervalId.current);
        }}
      >
        Reset and Stop Count
      </button>
      <button
        onClick={() => {
          clearInterval(intervalId.current);
        }}
      >
        Stop Count and Clear Interval
      </button>
    </>
  );
}
