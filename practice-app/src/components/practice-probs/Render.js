// At first time render, don't show message
// At second time render and so on, show message

import { useEffect, useState, useRef } from "react";

export default function App() {
  const [counter, setCounter] = useState(1);
  const ref = useRef(1);
  const [showMessage, setShowMessage] = useState(false);

  const printMessage = () => <h2>Counter has increased</h2>;

  // useEffect(() => {
  //   ref.current = 1;
  // }, []);

  useEffect(() => {
    if (ref.current === 1) {
      ref.current = ref.current + 1;
    } else {
      setShowMessage(true);
    }
  }, [counter]);

  const handleIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      {showMessage && printMessage()}
    </div>
  );
}
