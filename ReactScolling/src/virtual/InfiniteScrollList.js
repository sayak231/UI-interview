import React, { useEffect, useRef, useState } from "react";
import { data } from "./data.js";

export default function InfiniteScrollList() {
  const lastItemRef = useRef();
  const containerRef = useRef();
  const observer = useRef();
  const [arr, setArr] = useState(data.slice(0, 5));
  const [page, setPage] = useState(1);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 1,
    };
    const callback = (entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        const newPage = page + 1;
        setArr((arr) => [...arr, ...data.slice(arr.length, newPage * 5)]);
        setPage(newPage);
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }
    return () => {
      observer.current.disconnect();
    };
  });
  return (
    <div>
      <div
        style={{
          height: "500px",
          width: "30vw",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {arr.map((a, i) => {
          if (i === arr.length - 5) {
            return (
              <div
                style={{
                  margin: "10px",
                  height: "80px",
                  backgroundColor: "turquoise",
                  border: "1px solid black",
                }}
                key={a}
                ref={lastItemRef}
              >
                {a}
              </div>
            );
          }
          return (
            <div
              style={{
                margin: "10px",
                height: "80px",
                backgroundColor: "turquoise",
                border: "1px solid black",
              }}
              key={a}
            >
              {a}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Add Infinite Scrolling with the Intersection Observer API
// The Intersection Observer API lets us add infinite scrolling easily within our React app because we can use it to detect the element at the bottom of the list.

// We assign a ref to the element at the bottom of the page, then we can use the Intersection Observer API to detect when it crosses the screen’s edge and displayed on the page.

// We have the lastItemRef which is the ref which we assign to the bottom element of the page.

// observer is a ref that we use to store the observer.

// arr is what we render onto the page.

// We have the page element to tell us what page we’re at.

// Then we have the useEffect hook with a callback that has the options object to store the options for the Intersection Observer.

// root is the scroll container, which is the document object. This is the html element.

// rootMargin is how near is the element we’re observing is at the edge of the screen for it to be considered to be intersecting with the edge of the screen.

// threshold means how much the observed element is visible within the elements specified by the root option for the callback top to be run.

// Then we have the callback to check whether isIntersecting is true for it to be considered an intersection.

// Then we call setArr to add more items to arr if it’s true .

// Then we call observe with the element that we’re observing, which is stored in lastItemRef current.

// And we return a callback that calls disconnect to clear the intersection observer when the component unmounts.

// Finally, we render the arr items into p elements, and we ass the lastItemRef to the element that’s rendered last, which is the one at the bottom of the screen.

// https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/
