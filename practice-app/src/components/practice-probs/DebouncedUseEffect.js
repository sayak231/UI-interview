import React, { useState, useEffect } from "react";

const DebouncedUseEffect = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch(`https://api.github.com/users/${input}`)
      .then((res) => res.json())
      .then((res) => setData([res]))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  console.log(data);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h2>Username:- {data[0]?.name} </h2>
    </div>
  );
};

export default DebouncedUseEffect;
