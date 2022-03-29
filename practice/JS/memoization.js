// Memoization
const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
console.log(addition(20)); //output: 40 cached
console.log(addition(19)); //output: 39 calculated

// -------------------------------------------------------------------------------------------------------------------------------------------------

// memoize a function

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn(...args);
    }
    return cache[argsCache];
  };
};

const mul = (a, b, c) => {
  for (let i = 0; i < 1e9; i++);
  return a * b * c;
};

const memoizedMul = memoize(mul);

console.time("mul1");
console.log(memoizedMul(2, 3, 2));
console.timeEnd("mul1");
// mul1: 1179.956787109375 ms

console.time("mul2");
console.log(memoizedMul(2, 3, 2));
console.timeEnd("mul2");
// mul2: 0.066162109375 ms

// -------------------------------------------------------------------------------------------------------------------------------------------------
