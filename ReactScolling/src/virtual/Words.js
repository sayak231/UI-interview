import React, { memo, useMemo, useRef, useState, useEffect } from "react";
import { data } from "./data.js";

// Generic hook for detecting scroll:
const useScrollAware = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const ref = useRef();

  const onScroll = (e) =>
    requestAnimationFrame(() => {
      setScrollTop(e.target.scrollTop);
    });

  useEffect(() => {
    const scrollContainer = ref.current;
    console.log("scrollContainer", scrollContainer);

    setScrollTop(scrollContainer.scrollTop);
    scrollContainer.addEventListener("scroll", onScroll);
    return () => scrollContainer.removeEventListener("scroll", onScroll);
  }, []);

  return [scrollTop, ref];
};

const Item = memo(({ item }) => {
  console.log("Item", item);
  return (
    <div
      style={{
        height: "100px",
        width: "200px",
        color: "red",
        backgroundColor: "yellow",
      }}
    >
      {item}
    </div>
  );
});

const Words = ({
  itemCount = data.length,
  height = 500,
  childHeight = 60,
  renderAhead = 5,
}) => {
  const [show, setShow] = useState(false);
  const [scrollTop, targetRef] = useScrollAware();
  const totalHeight = itemCount * childHeight;

  let startNode = Math.floor(scrollTop / childHeight) - renderAhead;
  startNode = Math.max(0, startNode);

  let visibleNodeCount = Math.ceil(height / childHeight) + 2 * renderAhead;
  visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount);

  const offsetY = startNode * childHeight;

  const visibleChildren = useMemo(
    () =>
      data
        .slice(startNode, startNode + visibleNodeCount)
        .map((item, index) => <Item key={index + startNode} item={item} />),
    [startNode, visibleNodeCount],
  );
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{ height: "25px", width: "100px" }}
        onClick={() => setShow(!show)}
      >
        Show words virtual
      </button>
      <div
        style={{
          height,
          overflow: "auto",
        }}
        ref={targetRef}
      >
        {show && (
          <div
            className="viewport"
            style={{
              overflow: "hidden",
              willChange: "transform",
              height: totalHeight,
            }}
          >
            <div
              style={{
                willChange: "transform",
                transform: `translateY(${offsetY}px)`,
              }}
            >
              {visibleChildren}
            </div>
          </div>
        )}
      </div>
      {/* {show &&
        data.map((word, index) => (
          <div
            style={{
              height: "100px",
              width: "200px",
              color: "red",
              backgroundColor: "yellow",
            }}
            key={index}
          >
            {word}
          </div>
        ))} */}
    </div>
  );
};

export default memo(Words);
