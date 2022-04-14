import { useState } from "react";

export default function AddInputs() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const renderInputs = () => {
    const inputsArray = [];
    for (let i = 1; i <= count; i++) {
      inputsArray.push(
        <input
          onChange={(e) => console.log(e.target.id)}
          id={`input${i}`}
          key={i}
          type="text"
        />,
      );
    }
    return inputsArray;
  };
  return (
    <div>
      <button onClick={handleCount}>Add input tag</button>
      {renderInputs()}
      <br />
    </div>
  );
}

// export default function AddInputs() {
//   const [count, setCount] = useState([]);
//   const handleCount = () => {
//     const countCopy = [...count];
//     const lastIndexValue = countCopy.length
//       ? countCopy[countCopy.length - 1]
//       : 1;
//     countCopy.push(lastIndexValue + 1);
//     setCount([...countCopy]);
//   };
//   return (
//     <div>
//       <button onClick={handleCount}>Add input tag</button>
//       {count.map((ele) => (
//         <input
//           onChange={(e) => console.log(e.target.id)}
//           id={`input${ele}`}
//           key={ele}
//           type="text"
//         />
//       ))}
//     </div>
//   );
// }
