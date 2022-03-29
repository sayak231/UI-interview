let multiply2Nums = function (c) {
  return function (y) {
    return c * y;
  };
};

let multiplyByTwo = multiply2Nums(2);
let multiplyByThree = multiply2Nums(3);

console.log(multiplyByTwo(4)); // 8
console.log(multiplyByThree(4)); // 12

// --------------------------------------------------------------------------------------------------------------------------------------

let add3Nums = function (c) {
  return function (y) {
    return function (z) {
      return c + y + z;
    };
  };
};

let addByTwo = add3Nums(2);
let addByThree = add3Nums(3);

console.log(addByTwo(4)(4)); // 10
console.log(addByThree(4)(4)); // 11

// --------------------------------------------------------------------------------------------------------------------------------------

// how to make any function curryable

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

function curry(func) {
  console.log("func.length", func.length);
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...more) {
        console.log(
          "func.length",
          func.length,
          "...args",
          args,
          "...more",
          more,
        );
        return curried(...args, ...more);
      };
    }
  };
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}
// To get the curried version of multiply we pass it to our above curry function.
let curried = curry(multiply);
console.log(curried(2)(3)(4)(5)); // 24
console.log(curried(2, 3)(4)); // 24
console.log(curried(2, 3, 4)); // 24
console.log(curried(5)(6, 7)); // 210

// --------------------------------------------------------------------------------------------------------------------------------------

const addition = (a, b, c) => a + b + c + 5;

const mul = (a, b, c, d) => a * b * c * d;

const perpetualCurry = function (fn) {
  return function (...args) {
    console.log("u", fn.length, args);
    if (args.length === fn.length) {
      // console.log("1", args.length, fn.length);
      return fn(...args);
    } else {
      // console.log("2", args.length, fn.length);
      return perpetualCurry(fn.bind(fn, ...args));
    }
  };
};

const multplyC = perpetualCurry(mul);
console.log(multplyC(7)(3)(1)(5));
const addC = perpetualCurry(addition);
console.log(addC(1)(2)(3));

// --------------------------------------------------------------------------------------------------------------------------------------

// sum(a)(b)(c)(d)........(n)()

// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     } else {
//       return a;
//     }
//   };
// }

const sum = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)()); // 10
console.log(sum(2)(2)()); // 4
console.log(sum(1)(2)(3)(4)(1)(2)(3)(4)()); // 20
console.log(sum(4)(2)(3)(1)(5)()); // 15

// --------------------------------------------------------------------------------------------------------------------------------------

// DOM curry

const updateElemText = (id) => (content) =>
  (document.querySelector(`#${id}`).textContent = content);
const updateHeaderText = updateElemText("header");
updateHeaderText("Hello Samuel!");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function add(arg1) {
  return function (arg2) {
    return arg1 + arg2;
  };
}
console.log(add(1)(2));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
