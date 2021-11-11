import React, { memo, useState } from "react";
import VirtualScroll from "./VirtualScroll";
import "./styles.css";

// usage:
const Item = memo(({ index }) => (
  <div
    style={{
      height: 30,
      lineHeight: "30px",
      display: "flex",
      justifyContent: "space-between",
      padding: "0 10px",
    }}
    className="row"
    key={index}
  >
    <img
      alt={index}
      src={`https://picsum.photos/id/${(index % 10) + 1}/200/300`}
    />
    row index {index}
  </div>
));

function VirtualScrollApp() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <h1>Virtual Scroll</h1>
      <input
        type="checkbox"
        onChange={(e) => setIsVisible((prev) => !prev)}
        checked={isVisible}
      />
      {isVisible ? (
        <VirtualScroll
          itemCount={10000}
          height={300}
          childHeight={30}
          Item={Item}
        />
      ) : null}
      <hr />
      <h1>Hooks are awesome!</h1>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/500tech/hook-cook-book"
      >
        Explore more examples
      </a>
    </div>
  );
}

export default VirtualScrollApp;
