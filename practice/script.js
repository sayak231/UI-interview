console.log(
  "%cThis webpage is for Practice",
  "color:green; font-size:40px;border: 1px solid red;margin: 10px; padding: 10px;"
);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const A = (b) => {
//   let a = 10;
//   return () => {
//     console.log(a + b, this);
//   };
// };

// let x = A(2);
// let y = A(4);

// console.log(x(), y());

//---------------------------------------------------

// const flatten = (obj, parent) => {
//   const finalObj = {};
//   const magic = (obj, parent, finalObj) => {
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         magic(obj[key], parent + "_" + key, finalObj);
//       } else {
//         finalObj[parent + "_" + key] = obj[key];
//       }
//     }
//   };
//   magic(obj, parent, finalObj);
//   return finalObj;
// };

//---------------------------------------------------

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let per = new Person("Sayak", 23);

// console.log(per);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let object = new Person("Sudheer");

// console.log(object);

//---------------------------------------------------
// .__proto__

// console.log([].__proto__.__proto__);
// console.log([].prototype);

//---------------------------------------------------

// const object1 = {};
// const array1 = [];
// object1.property1 = 42;
// array1[0] = 42;

// console.log(object1.propertyIsEnumerable('property1'));
// // expected output: true

// console.log(array1.propertyIsEnumerable(0));
// // expected output: true

// console.log(array1.propertyIsEnumerable('length'));
// // expected output: false

//---------------------------------------------------

// const object1 = {};
// object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));
// // expected output: true

// console.log(object1.hasOwnProperty('toString'));
// // expected output: false

// console.log(object1.hasOwnProperty('hasOwnProperty'));
// // expected output: false

//---------------------------------------------------

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
// invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }

// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);
// inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
// inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//---------------------------------------------------

// let arrayIntegers = [1, 2, 3, 4, 5, 6, 7];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //returns [5,6,7]
// let arrayIntegers3 = arrayIntegers.slice(-4); //returns [4,5,6,7]

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(-2); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
// console.log(arrayIntegers3);

//--------------------------------------------------------------

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

//--------------------------------------------------------------
// hoc

// const firstOrderFunc = () => console.log("Hello, I am a First order function");
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

//--------------------------------------------------------------

// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1, 2, 3)); // 6

// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
// curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
// curryUnaryFunction(1)(2); // returns a function: c => 3 + c
// curryUnaryFunction(1)(2)(3); // returns the number 6

// function curry(func) {
//   console.log("func.length", func.length);
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...more) {
//         console.log(
//           "func.length",
//           func.length,
//           "...args",
//           args,
//           "...more",
//           more
//         );
//         return curried(...args, ...more);
//       };
//     }
//   };
// }

// function multiply(a, b, c, d) {
//   return a * b * c * d;
// }
// // To get the curried version of multiply we pass it to our above curry function.
// let curried = curry(multiply);
// console.log(curried(2)(3)(4)(5)); // 24
// console.log(curried(2, 3)(4)); // 24
// console.log(curried(2, 3, 4)); // 24
// console.log(curried(5)(6, 7)); // 210

//--------------------------------------------------------------
//Impure
// let numberArray = [];
// const impureAddNumber = (number) => numberArray.push(number);
// //Pure
// const pureAddNumber = (number) => (argNumberArray) =>
//   argNumberArray.concat([number]);

// //Display the results
// console.log(impureAddNumber(6)); // returns 1
// console.log(numberArray); // returns [6]
// console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
// console.log(pureAddNumber(8)(numberArray)); // returns [6, 8]
// console.log(pureAddNumber(11)(numberArray)); // returns [6, 11]
// console.log(pureAddNumber(82)(numberArray)); // returns [6, 82]
// console.log(numberArray); // returns [6]

//--------------------------------------------------------------

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// const a = 0;
// console.log(b); // undefined
// var b = "p";

//--------------------------------------------------------------

// Memoization
// const memoizAddition = () => {
//   let cache = {};
//   return (value) => {
//     if (value in cache) {
//       console.log("Fetching from cache");
//       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     } else {
//       console.log("Calculating result");
//       let result = value + 20;
//       cache[value] = result;
//       return result;
//     }
//   };
// };
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached
// console.log(addition(20)); //output: 40 cached
// console.log(addition(19)); //output: 39 calculated

//--------------------------------------------------------------

// // What are classes in ES6
// // In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
// For example, the prototype based inheritance written in function expression as below,

// function Bike(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Bike.prototype.getDetails = function () {
//   return this.model + " bike has" + this.color + " color";
// };
// // Whereas ES6 classes can be defined as an alternative

// class Bike {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }

//   getDetails() {
//     return this.model + " bike has" + this.color + " color";
//   }
// }

//--------------------------------------------------------------
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const promise = new Promise(
//   (resolve) => {
//     setTimeout(() => {
//       resolve("I'm a Promise!");
//     }, 5000);
//   },
//   (reject) => {}
// );

// promise.then((value) => console.log(value));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise chaining
// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then(function (result) {
//     console.log(result); // 1
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result); // 2
//     return result * 3;
//   })
//   .then(function (result) {
//     console.log(result); // 6
//     return result * 4;
//   });

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// // all
// Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))

// // race
// var promise1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, 'one');
// });
// var promise2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, 'two');
// });

// Promise.race([promise1, promise2]).then(function(value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// What is the difference between document load and DOMContentLoaded events

// The DOMContentLoaded event is fired when the initial HTML
// document has been completely loaded and parsed,
// without waiting for assets(stylesheets, images, and subframes)
// to finish loading. Whereas The load event is fired when
// the whole page has loaded,
// including all dependent resources(stylesheets, images).

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function sum() {
//     var total = 0;
//     for (var i = 0, len = arguments.length; i < len; ++i) {
//         total += arguments[i];
//     }
//     return total;
// }

// sum(1, 2, 3) // returns 6

// // Note: You can't apply array methods on arguments object.
// // But you can convert into a regular array as below.

// var argsArray = Array.prototype.slice.call(arguments);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//   this.model = model;
//   this.color = color;
//   this.year = year;
//   this.country = country;
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// output

// ("use strict");
// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
// }

// console.log(foo(), typeof x, typeof y);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// output - empty index of array

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//?? operator - Nullish coalescing operator

// let a = null;
// console.log(a ?? "h");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Output

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(Math.max()); // -Infinity

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// == v/s === operator

// console.log(10 == [10]);
// console.log(10 == [[[[[[[10]]]]]]]);

// //Equivalent to
// console.log(10 === Number([10].valueOf().toString())); // 10

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// bubbling events, e.stopPrpagation();

// 02

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//debounce polyfill

// const debounce = (func, delay) => {
//   let timerId;
//   return (...args) => {
//     const boundFunc = func.bind(this, ...args);
//     clearTimeout(timerId);
//     timerId = setTimeout(boundFunc, delay);
//   };
// };

// const debouncedSearch = debounce(searchRestaurants, 300);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// throttle polyfill functions

// function throttle(callback, limit) {
//   var wait = false; // Initially, we're not waiting
//   return function () {
//     // We return a throttled function
//     if (!wait) {
//       // If we're not waiting
//       callback.call(); // Execute users function
//       wait = true; // Prevent future invocations
//       setTimeout(function () {
//         // After a period of time
//         wait = false; // And allow future invocations
//       }, limit);
//     }
//   };
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// Proof that "this keyword always points to global in case of arrow functions, arrow v/s normal"

// const n = { name: "Sayak" };
// // const print = (h, s) => {
// //   console.log(this.name + h + s);
// // };
// function print(h, s) {
//   console.log(this.name + h + s);
// }
// print.call(n, "dd", "ll");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// Retry API call polyfill function

// function wait(delay) {
//   return new Promise((resolve) => setTimeout(resolve, delay));
// }

// function fetchRetry(url, delay, tries, fetchOptions = {}) {
//   function onError(err) {
//     triesLeft = tries - 1;
//     if (!triesLeft) {
//       throw err;
//     }
//     return wait(delay).then(() =>
//       fetchRetry(url, delay, triesLeft, fetchOptions)
//     );
//   }
//   return fetch(url, fetchOptions).catch(onError);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//Promise All PolyFill

//let myPromiseAll
// Promise.all = (promises) => {
//   let responses = [];
//   let errorResp = [];
//   return new Promise((resolve, reject) => {
//     /** Loop over promises array **/
//     promises.forEach(async (singlePromise, i) => {
//       try {
//         /** wait for resolving 1 promise **/
//         let res = await singlePromise;
//         responses.push(res);
//         if (i == promises.length - 1) {
//           if (errorResp.length > 0) {
//             reject(errorResp);
//           } else {
//             // resolve(responses)
//             // To know our custom promise function returning result
//             resolve("custom promise ::" + responses);
//           }
//         }
//       } catch (err) {
//         errorResp.push(err);
//         reject(err);
//       }
//     });
//   });
// };

// let p1 = Promise.resolve("Promise1 resolved");

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved after 2 seconds");
//   }, 1000);
// });

// Promise.all([p1, p2]).then(
//   (res) => {
//     console.log("Response => ", res);
//     document.write("<b>Response => </b>" + res);
//   },
//   (err) => {
//     console.log("error =>", err);
//   }
// );

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5)); //120

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// cookies

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
// setCookie("password", "sg", 5);
// setCookie("fb", "sAg", 2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// What is Server-Side Rendering?

// Server-side rendering (SSR) is an application’s ability to convert HTML files on the server into a fully rendered HTML page for the client.
// The web browser submits a request for information from the server, which instantly responds by sending a fully rendered page to the client.
// Search engines can crawl and index content prior to delivery, which is beneficial for Search Engine Optimization purposes.

// Popular examples of server-side rendering JavaScript frameworks include:
// Angular server side rendering, ejs server side rendering, server side rendering Express,
// Gatsby server side rendering, Google server side rendering, NestJS server side rendering,
// Next server side rendering, Nuxt server side rendering, React server side rendering, and Vue server side rendering.

// What are the Benefits of Server-Side Rendering?

// Some server-side rendering advantages include:

// A server-side rendered application enables pages to load faster, improving the user experience.
// When rendering server-side, search engines can easily index and crawl content because the content can be rendered before the page is loaded, which is ideal for SEO.
// Webpages are correctly indexed because web browsers prioritize web pages with faster load times.
// Rendering server-side helps efficiently load webpages for users with slow internet connection or outdated devices.

// What are the Risks of Server-Side Rendering?

// Server-side rendering disadvantages may include:

// Rendering server-side can be costly and resource-intensive as it is not the default for JavaScript websites,
// and the server takes on the full burden of rendering content for users and bots.
// While rendering static HTML server-side is efficient, rendering bigger, more complex applications server-side can increase load times due to the bottleneck.
// Server-side rendering may not be compatible with third-party JavaScript code.
// Rendering server-side may be ideal for static site generation,
// but frequent server requests and full page reloads can result in overall slower page rendering in more complex applications.

// Server-Side Rendering vs Client-Side Rendering

// In client-server rendering, rather than receiving all of the content from the HTML document,
// content is rendered in the browser using the client-side JavaScript library.
// The browser does not make a new request to the server when a new page is loaded.
// Search engine rankings may be negatively impacted as the content is not rendered until the page is loaded on the browser, however,
// website rendering tends to be faster in client-side rendered app. In considering server side vs client side rendering,
// the developer will assess factors such as the scale of the project, the complexity of the application, the number of users, and user experience priorities.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Asynchronous to synchronous function

// function AsyncRequest(k) {
//   return new Promise(function (resolve, reject) {
//     if (k < 3) {
//       resolve(k);
//     } else {
//       reject("Error");
//     }
//   });
// }

// function normal() {
//   let data;
//   AsyncRequest(2).then((res) => {
//     console.log(res);
//     data = res;
//   });
//   console.log(data);
// }
// normal();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// use of await other than Promises

// const thenable = {
//   then: function (resolve, reject) {
//     setTimeout(() => resolve(5), 100);
//   },
// };

// const value = async () => {
//   const val = await thenable;
//   console.log(val);
//   return val;
// };

// from mdn docs
// async function f2() {
//   const thenable = {
//     then: function (resolve, _reject) {
//       resolve("resolved!");
//     },
//   };
//   console.log(await thenable); // resolved!
// }

// f2();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// proof that arrow functions always point to global variables and there is no this variable for arrow functions
// const a = 32;
// const data = {
//   a: 2,
//   anonymous: function () {
//     // [32, 2]
//     return [a, this.a];
//   },
//   arrow: () => {
//     // [32, undefined]
//     return [a, this.a];
//   },
//   v: {
//     anonymous: function () {
//       // [32, undefined]
//       return [a, this.a];
//     },
//     arrow: () => {
//       // [32, undefined]
//       return [a, this.a];
//     },
//   },
// };
// console.log(data.anonymous());
// console.log(data.arrow());
// console.log(data.v.anonymous());
// console.log(data.v.arrow());

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// But here closure is formed with the parent
// const a = 32;

// function express() {
//   const a = 22;
//   const nest = () => {
//     console.log(a, this.a);
//   };
//   console.log(a, this.a);
//   nest();
// }
// express();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// sleep function
// function sleep(k, ms) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       console.log("sleep timeout");
//       res(k);
//     }, ms);
//   });
// }
// console.log(sleep(5, 5000));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block so the output from the last then is used.

// const promise = new Promise((res) => res(2));
// promise
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .finally((v) => {
//     console.log(v);
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v);
//   });

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Tricky interview ques
//1.

// (function apple() {
//   const arr = [1, 2, 3, 4, 5];
//   arr.length = 3;
//   console.log(arr); //[1, 2, 3]
//   arr.length = 5;
//   console.log(arr); // [1, 2, 3, empty × 2]
// })();

// 2.

// let checkOutput = (x) => {
//     delete x
//     return x
// }
// console.log(checkOutput(0)) // 0

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
// console.log(`?x=${encodeURIComponent('test?')}`);
// // expected output: "?x=test%3F"

// console.log(`?x=${encodeURIComponent('шеллы')}`);
// // expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

// we have some other ways as well to persist the state in react.
// 1- Local Storage
// 2- Persist Redux
// 3- URL Params
// I personally recommend to use URL Params to persist the state in this case.

// 5.

//Destructure degree
// const student = {
//   name: "Sayak",
//   education: {
//     degree: "B.Tech",
//   },
// };

// const { education } = student;
// const { degree } = education;

// // Second way is nested destructing
// const {
//   education: { degree },
// } = student;

// 6.

// console.log(["1", "7", "11"].map(parseInt));
// // parseInt expects two arguments, 1st is the string, 2nd is the radix or base
// // So here '1' base 0 is 1, '7' base 1 is NaN, because base1 is illegal, and '11' base 2 is 3 - basically converting binary '11' to decimal, i.e., 3
// console.log(["1", "7", "11"].map(Number));
// console.log(parseInt("A1", 16)); // Hex

// 7.

// Can you delete variable a using delete keyword ?

// let a = 10; b= 11
// console.log(a, b); // 10 10
// delete a;
// delete b; // Uncaught ReferenceError: b is not defined
// console.log(a, b);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const promisify = (item, delay) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(item);
//       console.log(item);
//     }, delay);
//   });

// const a = () => promisify("a", 1000);
// const b = () => promisify("b", 5000);
// const c = () => promisify("c", 3000);

// a();
// b();
// c();

// async function parallel() {
//   const promises = [a(), b(), c()];
//   const [output1, output2, output3] = await Promise.all(promises);
//   return `parallel is done: ${output1} ${output2} ${output3}`;
// }
// parallel().then(console.log);

// async function race() {
//   const promises = [a(), b(), c()];
//   const output1 = await Promise.race(promises);
//   return `race is done: ${output1}`;
// }
// race().then(console.log);

// async function sequence() {
//   const output1 = await a();
//   const output2 = await b();
//   const output3 = await c();
//   return `sequence is done ${output1} ${output2} ${output3}`;
// }
// sequence().then(console.log);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// (async function showIndexedDBSpace() {
//   const quota = await navigator.storage.estimate();
//   const totalSpace = quota.quota;
//   const usedSpace = quota.usage;
//   console.log(quota, totalSpace, usedSpace);
// })();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
// };

// // let copiedPerson = Object.assign({}, person); // Shallow Copy
// let copiedPerson = { ...person }; // Shallow Copy
// // let copiedPerson = JSON.parse(JSON.stringify(person)); // Deep Copy

// copiedPerson.firstName = "Jane"; // disconnected

// copiedPerson.address.street = "Amphitheatre Parkway"; // connected
// copiedPerson.address.city = "Mountain View"; // connected

// console.log(copiedPerson);
// console.log(person);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function foo(array) {
//   return Object.freeze(
//     array.reduce((obj, item, index) => {
//       if (typeof item === "string") {
//         console.log(obj, index);
//         obj[(obj[index] = item.toUpperCase())] = index;
//       }
//       return obj;
//     }, {})
//   );
// }
// const bar = foo(["a", "B", "C"]);
// console.log(bar); // {0: "A",1: "B",2: "C",A: 0,B: 1,C: 2}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function turnOn(machine) {
  machine.isOn = true;
}

const computer = {
  isOn: false,
};

turnOn(computer);
console.log(computer.isOn); // true;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
