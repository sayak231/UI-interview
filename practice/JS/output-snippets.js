// console.log(null == undefined); //false
// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory

//----------------------------------------------------------------------------------------------------------------------

// "use strict";
// function restParams(...args) {
//   console.log(args);
// }
// restParams(1, 2, 3, 4, 5);

//----------------------------------------------------------------------------------------------------------------------

// console.log(a1); // Uncaught ReferenceError: Cannot access 'a1' before initialization
// const a1 = 0;
// console.log(b1); // undefined
// var b1 = "p";

// ----------------------------------------------------------------------------------------------------------------------

// clear interval after a counter change

// function outer() {
//   let count = 0;
//   function a() {
//     console.log(count);
//     count++;
//     if (count > 5) {
//       clearInterval(interval);
//     }
//   }
//   let interval = setInterval(a, 1000);
// }
// outer();

// ----------------------------------------------------------------------------------------------------------------------

// function sum() {
//   var total = 0;
//   for (var i = 0, len = arguments.length; i < len; ++i) {
//     total += arguments[i];
//   }
//   return total;
// }

// sum(1, 2, 3); // returns 6

// // Note: You can't apply array methods on arguments object.
// // But you can convert into a regular array as below.

// var argsArray = Array.prototype.slice.call(arguments);

// ----------------------------------------------------------------------------------------------------------------------

// "use strict";
// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);

// ----------------------------------------------------------------------------------------------------------------------

// output - empty index of array

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// ----------------------------------------------------------------------------------------------------------------------

// const obj = {
//   prop1: function () {
//     return 0;
//   },
//   prop2() {
//     return 1;
//   },
//   ["prop" + 3]() {
//     return 2;
//   },
// };

// console.log(obj.prop1()); // 0
// console.log(obj.prop2()); // 1
// console.log(obj.prop3()); // 2

// ----------------------------------------------------------------------------------------------------------------------

// == v/s === operator

// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);

// //Equivalent to
// console.log(10 === Number([10].valueOf().toString())); // 10

// ----------------------------------------------------------------------------------------------------------------------

// console.log(true || 2); // true
// console.log(true && 2); // 2
// console.log(2 && true); // true
// console.log(2 || true); // 2

// console.log(false || 2); // 2
// console.log(false && 2); // false
// console.log(2 && false); // false
// console.log(2 || false); // 2

// ----------------------------------------------------------------------------------------------------------------------

// function test() {
//   const name = "Sayak";

//   console.log(typeof name === "object"); // false
//   console.log(typeof name === "string"); // true

//   console.log(!(typeof name === "object")); // true
//   console.log(!(typeof name === "string")); // false

//   console.log(!typeof name === "object"); // false
//   console.log(!typeof name === "string"); // false

//   console.log(!false); // true
//   console.log(!true); // false

//   // typeof name = 'string'
//   // !'string' = false
//   // false === 'object' = false
// }
// test();

// ----------------------------------------------------------------------------------------------------------------------

// hoisting

// getName(); // Hello Sayak
// getNameArrow(); // Uncaught TypeError: getNameArrow is not a function
// console.log(x); // undefined
// console.log(q); // Uncaught ReferenceError: q is not defined
// console.log(z); // Uncaught ReferenceError: Cannot access 'z' before initialization
// console.log(y); // Uncaught ReferenceError: Cannot access 'z' before initialization

// var x = 10;
// let y = 10;
// const z = 10;

// function getName() {
//   console.log("Hello Sayak");
// }

// var getNameArrow = () => {
//   console.log("Hello Sayak");
// };

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// Different types of errors

// console.log(x); // Uncaught ReferenceError: x is not defined

// const b; // Uncaught SyntaxError: Missing initializer in const declaration

// const c = 1;
// c = 2; // Uncaught TypeError: Assignment to constant variable.

// ----------------------------------------------------------------------------------------------------------------------

// const arrReduce = [5, 5, 5, 5, 5];
// const ansReduce = arrReduce.reduce((acc, val) => acc + val, 5);
// console.log(ansReduce);

// ----------------------------------------------------------------------------------------------------------------------

// const objSpread = {
//   a: "new",
// };

// objSpread.a = { ...{ name: objSpread.a } };

// console.log(objSpread);

// ----------------------------------------------------------------------------------------------------------------------

// let x1 = 0;

// if (true) {
//   x1 = 1;
// }

// console.log(x1); // 1

// if (false) {
//   var test = 10;
// }

// console.log(test); // undefined

// ----------------------------------------------------------------------------------------------------------------------

// console.log(null);
// console.log(undefined);
// console.log(NaN);
// console.log(Infinity);
// console.log(-Infinity);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log(NaN + 1);
// console.log(null === undefined, null == undefined);
// console.log(null == null, null == null);
// console.log(null === NaN, NaN == undefined);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);
// console.log(NaN === NaN, NaN == NaN);
// console.log(Math.sqrt(-1));

// ----------------------------------------------------------------------------------------------------------------------

// // function to run for 5000ms
// function takeTime(delay) {
//   let startTime = Date.now();
//   let endTime = Date.now();
//   while (endTime < startTime + delay) {
//     endTime = Date.now();
//   }
// }
// let func = (i) => console.log(i);
// // setInterval
// // In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

// let i = 1;
// setInterval(function () {
//   takeTime(5000);
//   func(i++);
// }, 1000);

// // nested setTimeout for same execution as setInterval
// // takes 5000ms to run the function 'run' inside setTimeout and then waits for 3000ms and runs the function 'run' again
// // The nested setTimeout guarantees the fixed delay (here 100ms).
// let j = 1;
// setTimeout(function run() {
//   takeTime(5000);
//   func(j++);
//   setTimeout(run, 3000);
// }, 3000);

// ----------------------------------------------------------------------------------------------------------------------

// // naming loops and scopes
// loop1: for (let i = 0; i < 5; i++) {
//   loop2: for (let j = 0; j < 5; j++) {
//     if (i === 1) {
//       break loop1;
//     }
//     console.log("i = ", i, ", j = ", j);
//   }
// }

// name: {
//   console.log("before");
//   break name;
//   console.log("after");
// }

// ----------------------------------------------------------------------------------------------------------------------

// (async function showIndexedDBSpace() {
//   const quota = await navigator.storage.estimate();
//   const totalSpace = quota.quota;
//   const usedSpace = quota.usage;
//   console.log(quota, totalSpace, usedSpace);
// })();

// ----------------------------------------------------------------------------------------------------------------------

// Tricky interview ques
// 1.

// (function apple() {
//   const arr = [1, 2, 3, 4, 5];
//   arr.length = 3;
//   console.log(arr); //[1, 2, 3]
//   arr.length = 5;
//   console.log(arr); // [1, 2, 3, empty × 2]
// })();

// 2.

// let checkOutput = (x) => {
//   delete x;
//   return x;
// };
// console.log(checkOutput(0)); // 0

// 3.

// Promise.resolve(0)
//   .then((x) => x + 1)
//   .then((x) => x + 2)
//   .then((x) => {})
//   .then((x) => x + 3)
//   .then((x) => console.log(x))
//   .catch(console.error); // NaN

// 4.

// // encodes characters such as ?,=,/,&,:
// console.log(`?x=${encodeURIComponent("test?")}`);
// // expected output: "?x=test%3F"

// console.log(`?x=${encodeURIComponent("шеллы")}`);
// // expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

// we have some other ways as well to persist the state in react.
// 1- Local Storage
// 2- Persist Redux
// 3- URL Params
// I personally recommend to use URL Params to persist the state in this case.

// 5.

// Destructure degree
// const student = {
//   name: "Sayak",
//   education: {
//     degree: "B.Tech",
//     degree1: "B.Tech",
//   },
// };

// const { education } = student;
// const { degree } = education;

// // Second way is nested destructing
// const {
//   education: { degree1 },
// } = student;

// 6.

// console.log(["1", "7", "11"].map(parseInt));
// // parseInt expects two arguments, 1st is the string, 2nd is the radix or base
// // So here '1' base 0 is 1, '7' base 1 is NaN, because base1 is illegal, and '11' base 2 is 3 - basically converting binary '11' to decimal, i.e., 3
// console.log(["1", "7", "11"].map(Number));
// console.log(parseInt("A1", 16)); // Hex

// 7.

// Can you delete variable a using delete keyword ?

// let ax = 10;
// byy = 11;
// console.log(ax, byy); // 10 10
// // delete ax;
// // delete byy; // Uncaught ReferenceError: byy is not defined
// console.log(ax, byy);

// ----------------------------------------------------------------------------------------------------------------------

// console.log(Math.max()); // -Infinity
// console.log(Math.min()); // Infinity

// ----------------------------------------------------------------------------------------------------------------------

// const A = (b) => {
//   let a = 10;
//   return () => {
//     console.log(a + b, this);
//   };
// };

// let x11 = A(2);
// let y11 = A(4);

// console.log(x11(), y11());

// ----------------------------------------------------------------------------------------------------------------------

// // What is nullish coalescing operator (??)?
// // It is a logical operator that returns its right-hand side
// // operand when its left-hand side operand is null or undefined,
// // and otherwise returns its left-hand side operand.
// // This can be contrasted with the logical OR (||) operator,
// // which returns the right-hand side operand if the left operand
// // is any falsy value, not only null or undefined.

// console.log(null ?? true); // true
// console.log(false ?? true); // false
// console.log(undefined ?? true); // true
// console.log("" || true); // true

// let ax11 = null;
// console.log(ax11 ?? "h");

// ----------------------------------------------------------------------------------------------------------------------

// Call Stack checking
// function subtractTwo(num) {
//   return num - 2;
// }

// function calculate(num) {
//   num = num + 2;
//   return subtractTwo(num);
// }

// // debugger;
// console.log(calculate(4));

// ----------------------------------------------------------------------------------------------------------------------

// const weather = (function getWeather(temp) {
//   switch (true) {
//     case temp < 0:
//       return "freezing";
//     case temp < 10:
//       return "cold";
//     case temp < 24:
//       return "cool";
//     default:
//       return "unknown";
//   }
// })(-9);
// console.log(weather);

// ----------------------------------------------------------------------------------------------------------------------

// const avar = 32;
// const data = {
//   avar: 2,
//   anonymous: function () {
//     // [32, 2]
//     return [avar, this.avar];
//   },
//   arrow: () => {
//     // [32, undefined]
//     return [avar, this.avar];
//   },
//   v: {
//     anonymous: function () {
//       // [32, undefined]
//       return [avar, this.avar];
//     },
//     arrow: () => {
//       // [32, undefined]
//       return [avar, this.avar];
//     },
//   },
// };
// console.log(data.anonymous());
// console.log(data.arrow());
// console.log(data.v.anonymous());
// console.log(data.v.arrow());

// ----------------------------------------------------------------------------------------------------------------------

// var ten = 10;
// function hoistTen() {
//   console.log("ten", ten); // undefined
//   var ten = 10;
// }
// hoistTen();

// let hundred = 100;
// function hoistHundred() {
//   console.log("hundred", hundred); // Uncaught ReferenceError: Cannot access 'hundred' before initialization
//   let hundred = 100;
// }
// hoistHundred();

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------
