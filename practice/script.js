// console.log(
//   "%cThis webpage is for Practice",
//   "color:green; font-size:40px;border: 1px solid red;margin: 10px; padding: 10px;",
// );

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.3 + 0.6); // 0.8999999999999999

// // tHIS WILL GIVE THE TIME TAKEN B/W CONSOLE.TIME AND CONSOLE.TIMEEND
// console.time("Timer");
// for (let i = 0; i < 100000000; i++) {
//   // do nothing
// }
// console.timeEnd("Timer");

// const x = 2;
// console.assert(x === 1, "1 is not equal to 1"); // Assertion failed: 1 is not equal to 1

// const people = [
//   { name: "John", age: 30 },
//   { name: "Mike", age: 23 },
//   { name: "Nancy", age: 40 },
// ];
// console.table(people); // prints in table format
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

//----------------------------------------------------------------------------------------------------------------------------

// // JavaScript inbuilt flat
// const arr = [1, 2, [3, 4, [5, [6, 7, { a: "b" }]]]];

// console.log(arr.flat(1)); // [1, 2, 3, 4, Array(2)]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, Array(3)]
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, {…}]

// const sampl = [1, 2, 3, 4];
// const prod2 = (ele) => [[ele * 2]];
// console.log(sampl.map(prod2)); // [[1],[2],[3],[4]]
// console.log(sampl.flatMap(prod2)); // [1, 2, 3, 4]

//----------------------------------------------------------------------------------------------------------------------------

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
// Prototype chaining
// .__proto__

// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// prototype is the object that is used to build __proto__ when you create an object with new:

// console.table([
//   {
//     "Object.prototype": Object.prototype,
//     "Array.prototype": Array.prototype,
//     "Function.prototype": Function.prototype,
//     "Object.__proto__": Object.__proto__,
//     "Array.__proto__": Array.__proto__,
//     "Function.__proto__": Function.__proto__,
//     "Object.__proto__.__proto__": Object.__proto__.__proto__,
//     "Array.__proto__.__proto__": Array.__proto__.__proto__,
//     "Function.__proto__.__proto__": Function.__proto__.__proto__,
//     "Object.__proto__.__proto__.__proto__":
//       Object.__proto__.__proto__.__proto__,
//     "Array.__proto__.__proto__.__proto__": Array.__proto__.__proto__.__proto__,
//     "Function.__proto__.__proto__.__proto__":
//       Function.__proto__.__proto__.__proto__,
//   },
// ]);

// console.log("Object.prototype", Object.prototype);
// console.log("Array.prototype", Array.prototype);
// console.log("Function.prototype", Function.prototype);
// console.log("Object.__proto__", Object.__proto__);
// console.log("Array.__proto__", Array.__proto__);
// console.log("Function.__proto__", Function.__proto__);
// console.log("Object.__proto__.__proto__", Object.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log("Array.__proto__.__proto__", Array.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log("Function.__proto__.__proto__", Function.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log(
//   "Object.__proto__.__proto__.__proto__",
//   Object.__proto__.__proto__.__proto__,
// ); // NULL
// console.log(
//   "Array.__proto__.__proto__.__proto__",
//   Array.__proto__.__proto__.__proto__,
// ); // NULL
// console.log(
//   "Function.__proto__.__proto__.__proto__",
//   Function.__proto__.__proto__.__proto__,
// ); // NULL
// console.log("Object.prototype.__proto__", Object.prototype.__proto__); // NULL

// console.log(Object.__proto__ === Array.__proto__); // true
// console.log(Object.__proto__ === Function.__proto__); // true
// console.log(Function.__proto__ === Array.__proto__); // true

// console.log([].__proto__.__proto__ === {}.__proto__); // true
// function fun() {
//   //haha
// }
// console.log(fun.__proto__ === Function.prototype); // true
// console.log(fun.__proto__.__proto__ === Object.prototype); // true
// console.log(fun.__proto__.__proto__.__proto__ === null); // true
// console.log(fun.__proto__ === {}.__proto__); // false
// console.log(fun.__proto__.__proto__ === {}.__proto__); // true

// console.log([].__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// console.log([].prototype); // undefined

// function Foo() {
//   // do something foo;
// }
// console.log(
//   new Foo().__proto__,
//   Foo.prototype,
//   new Foo().__proto__ === Foo.prototype,
// ); // {constructor: ƒ} {constructor: ƒ} true
// console.log(new Foo().prototype === undefined); // true

// var house = { color: "brown", size: "huge", expensive: true };

// console.log(house.prototype); // undefined
// console.log(house.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro

// // Note: 'house' is an object that has a __proto__ object, but does not have a prototype

// function add(a, b) {
//   return a + b;
// }

// console.log(add.prototype); // {constructor: ƒ}
// console.log(add.__proto__); // ƒ () { [native code] }

// Note: 'add' is a function that has a __proto__ and a prototype property.
// Try this code yourself and you'll see that the prorotype property is referenced in the __proto__ object within the constructor function

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

// call bind apply

// const employee1 = { firstName: "John", lastName: "Rodson" };
// const employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
//   );
// }

// invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// const employee1 = { firstName: "John", lastName: "Rodson" };
// const employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
//   );
// }

// invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
// invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

// const employee1 = { firstName: "John", lastName: "Rodson" };
// const employee2 = { firstName: "Jimmy", lastName: "Baily" };

// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
//   );
// }

// const inviteEmployee1 = invite.bind(employee1, "Hi");
// const inviteEmployee2 = invite.bind(employee2);
// inviteEmployee1("How are you?"); // Hello John Rodson, How are you?
// inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// PolyFill for call

// function runCall() {
//   console.log(arguments, arguments[0], this);
//   arguments[0].fn = this;
//   //converting arguments to proper array[],
//   let paramsArray = [];
//   for (let arg of arguments) {
//     paramsArray.push(arg);
//   }
//   arguments[0].fn(...paramsArray.slice(1));
//   //OR
//   //arguments[0].fn.apply(arguments[0], paramsArray.slice(1));
// }

// //runCall2 has defined parameters
// function runCall2(context, ...args) {
//   context.fn = this;
//   context.fn(...args);
//   //OR
//   //context.fn.apply(context, args);
// }

// Function.prototype.runCall = runCall;
// Function.prototype.runCall2 = runCall2;

// function displayUser(state, country, method) {
//   console.log("----- " + method + " -----");
//   console.log("Name : ", this.name);
//   console.log("Age : ", this.age);
//   console.log("City : ", this.city);
//   console.log("State : ", state);
//   console.log("Country : ", country);
// }
// var user = {
//   name: "John Stewart",
//   age: "🙊",
//   city: "Sanfrancisco",
// };
// displayUser.runCall(user, "CA", "USA", "call --> runCall"); //----> passing context, params
// displayUser.runCall2(user, "CA", "USA", "call --> runCall2"); //----> passing context, params

// PolyFill for apply

// function runApply() {
//   let context = arguments[0];
//   let args = arguments[1];
//   context.fn = this;
//   context.fn(...args);
// }

// Function.prototype.runApply = runApply;

// function displayUser(state, country, method) {
//   console.log("----- " + method + " -----");
//   console.log("Name : ", this.name);
//   console.log("Age : ", this.age);
//   console.log("City : ", this.city);
//   console.log("State : ", state);
//   console.log("Country : ", country);
// }
// var user = {
//   name: "John Stewart",
//   age: "🙊",
//   city: "Sanfrancisco",
// };
// displayUser.runApply(user, ["CA", "USA", "apply --> runApply"]);

// PolyFill for bind

// Function.prototype.myBind = function (context, ...args1) {
//   return (...args2) => {
//     this.apply(context, [...args1, ...args2]);
//   };
// };

// function displayUser(state, country, method) {
//   console.log("----- " + method + " -----");
//   console.log("Name : ", this.name);
//   console.log("Age : ", this.age);
//   console.log("City : ", this.city);
//   console.log("State : ", state);
//   console.log("Country : ", country);
// }
// let user = {
//   name: "John Stewart",
//   age: "🙊",
//   city: "Sanfrancisco",
// };
// let boundDisplayUser = displayUser.myBind(user, "CA");
// boundDisplayUser("USA", "bind --> myBind");

// uses of call

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = "food";
// }

// function Toy(name, price) {
//   Product.call(this, name, price);
//   this.category = "toy";
// }

// const cheese = new Food("feta", 5);
// const fun = new Toy("robot", 40);

//-

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Fail" },
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function (i) {
//     this.print = function () {
//       console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
//   }.call(animals[i], i));
// }

//-

// 'use strict';

// var sData = 'Wisen';

// function display() {
//   console.log('sData value is %s ', this.sData);
// }

// display.call(); // Cannot read the property of 'sData' of undefined

// uses of apply

// // concat array
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// array.push.apply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]

// // min/max number in an array
// const numbers = [5, 6, 2, 3, 7];

// // using Math.min/Math.max apply
// let max = Math.max.apply(null, numbers);
// // This about equal to Math.max(numbers[0], ...)
// // or Math.max(5, 6, ...)

// let min = Math.min.apply(null, numbers);

// console.log(max, min);

// uses of bind

// function list() {
//   return Array.prototype.slice.call(arguments);
// }

// function addArguments(arg1, arg2) {
//   return arg1 + arg2;
// }

// const list1 = list(1, 2, 3);
// //  [1, 2, 3]

// const result1 = addArguments(1, 2);
// //  3

// // Create a function with a preset leading argument
// const leadingThirtysevenList = list.bind(null, 37);

// // Create a function with a preset first argument.
// const addThirtySeven = addArguments.bind(null, 37);

// const list2 = leadingThirtysevenList();
// //  [37]

// const list3 = leadingThirtysevenList(1, 2, 3);
// //  [37, 1, 2, 3]

// const result2 = addThirtySeven(5);
// //  37 + 5 = 42

// const result3 = addThirtySeven(5, 10);
// //  37 + 5 = 42
// //  (the second argument is ignored)

//-

// function LateBloomer() {
//   this.petalCount = 8;
// }

// // Declare bloom after a delay of 1 second
// LateBloomer.prototype.bloom = function () {
//   window.setTimeout(this.declare.bind(this), 3000); // I am a beautiful flower with 8 petals!
//   window.setTimeout(this.declare, 5000); // I am a beautiful flower with undefined petals!
// };

// LateBloomer.prototype.declare = function () {
//   console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
// };

// const flower = new LateBloomer();
// flower.bloom();
// //  after 3 seconds, calls 'flower.declare()'

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

// let multiply = function (c) {
//   return function (y) {
//     return c * y;
//   };
// };

// let multiplyByTwo = multiply(2);
// let multiplyByThree = multiply(3);

// console.log(multiplyByTwo(4)); // 8
// console.log(multiplyByThree(4)); // 12

// -

// let add = function (c) {
//   return function (y) {
//     return function (z) {
//       return c + y + z;
//     };
//   };
// };

// let addByTwo = add(2);
// let addByThree = add(3);

// console.log(addByTwo(4)(4)); // 10
// console.log(addByThree(4)(4)); // 11

//-
// how to make any function curryable
// const curry = (fn) => {
//   return (curried = (...args) => {
//     if (fn.length !== args.length) {
//       return curried.bind(null, ...args);
//     }
//     return fn(...args);
//   });
// };
// const totalNum = (x, y, z) => {
//   return x + y + z;
// };
// const curriedTotal = curry(totalNum);
// console.log(curriedTotal(10)(20)(30));

//-

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
//           more,
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

//-

// const add = (a, b, c) => a + b + c + 5;

// const mul = (a, b, c, d) => a * b * c * d;

// const perpetualCurry = function (fn) {
//   return function (...args) {
//     console.log("u", fn.length, args);
//     if (args.length === fn.length) {
//       // console.log("1", args.length, fn.length);
//       return fn(...args);
//     } else {
//       // console.log("2", args.length, fn.length);
//       return perpetualCurry(fn.bind(fn, ...args));
//     }
//   };
// };

// const multplyC = perpetualCurry(mul);
// console.log(multplyC(7)(3)(1)(5));
// const addC = perpetualCurry(add);
// console.log(addC(1)(2)(3));

//-

// // sum(a)(b)(c)(d)........(n)()

// // function sum(a) {
// //   return function (b) {
// //     if (b) {
// //       return sum(a + b);
// //     } else {
// //       return a;
// //     }
// //   };
// // }

// const sum = (a) => (b) => b ? sum(a + b) : a;

// console.log(sum(1)(2)(3)(4)()); // 10
// console.log(sum(2)(2)()); // 4
// console.log(sum(1)(2)(3)(4)(1)(2)(3)(4)()); // 20
// console.log(sum(4)(2)(3)(1)(5)()); // 15

//-
// DOM curry
// const updateElemText = (id) => (content) =>
//   (document.querySelector(`#${id}`).textContent = content);
// const updateHeaderText = updateElemText("header");
// updateHeaderText("Hello Samuel!");

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

// debounce polyfill without setTimeout

// const debounce = function (func, delay) {
//   let timer;
//   return function () {
//     //anonymous function
//     const context = this;
//     const args = arguments;

// cancelIdleCallback(timer);
// let startTime = Date.now();
// function check() {
//   if (Date.now() >= startTime + delay) func.apply(context, args);
//   else timer = requestIdleCallback(check);
// }
// timer = requestIdleCallback(check);
//   };
// };

// const fun = () => console.log("fun");

// const debouncedSearch = debounce(fun, 300);

// document.getElementById("inpt").addEventListener("input", debouncedSearch);

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

// function throttle(callback, limit) {
//   var wait = false; // Initially, we're not waiting
//   return function () {
//     // We return a throttled function
//     const context = this;
//     const args = arguments;
//     if (!wait) {
//       // If we're not waiting
//       callback.apply(context, args); // Execute users function
//       wait = true; // Prevent future invocations
//       let startTime = Date.now();
//       function check() {
//         if (Date.now() >= startTime + limit) wait = false;
//         else requestIdleCallback(check);
//       }
//       requestIdleCallback(check);
//     }
//   };
// }

// const fun = () => console.log("fun");

// const throttledSearch = throttle(fun, 3000);

// document.getElementById("idf").addEventListener("click", throttledSearch);

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

// function sleep(delay) {
//   var startTime = Date.now();

//   // loop until the current time exceeds the delayed time.
//   while (Date.now() > startTime + delay);
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

// function turnOn(machine) {
//   machine.isOn = true;
// }

// const computer = {
//   isOn: false,
// };

// turnOn(computer);
// console.log(computer.isOn); // true;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function reduceBy1(n) {
//   if (n == 0) return 1;
//   return reduceBy1(n - 1);
// }

// console.log(reduceBy1(100000)); //  Recursion call stack exceeds when its greater than 10^5

// Using closure :-
// function reduceBy1Closure(n) {
//   if (n == 0) return 1;
//   return () => reduceBy1Closure(n - 1);
// }

// let res = reduceBy1Closure(100000);
// while (typeof res == "function") {
//   res = res();
// }
// console.log(res);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function add(arg1) {
//   return function (arg2) {
//     return arg1 + arg2;
//   };
// }
// console.log(add(1)(2));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// merges and sorts two sorted arrays together
// function mergeSortedArray(a, b) {
//   let index = 0;

//   while (b.length > 0 && a[index]) {
//     if (a[index] > b[0]) {
//       a.splice(index, 0, b.shift());
//     }
//     index++;
//   }
//   return [...a, ...b];
// }

// const arr1 = [1, 4, 6, 9];
// const arr2 = [2, 5, 11]; //

// const arr3 = mergeSortedArray(arr1, arr2);

// console.log(arr3);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// closure ex
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(true || 2); // true
// console.log(true && 2); // 2
// console.log(2 && true); // true
// console.log(2 || true); // 2

// console.log(false || 2); // 2
// console.log(false && 2); // false
// console.log(2 && false); // false
// console.log(2 || false); // 2

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var arr = [];
// var obj = {};
// var str = "";
// for (var i = 0; i < 1024 * 1024 * 108; i++) {
// arr.push(1);
// obj[i] = 1;
// str += " ";
// }

// var value = null;
// function closure() {
//   var last = value;
//   (function () {
//     last;
//   })(last);
//   value = {
//     a: function () {},
//   };
// }
// setInterval(function () {
//   closure();
//   console.log(process.memoryUsage());
// }, 1);
// Run with node js
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var num1 = 10,
//   num2 = 1;
// for (var i = num1; i >= num2; i--) {
//   setTimeout(console.log, (num1 - i) * 1000, i);
// }

// for (var i = num1; i >= num2; i--) {
//   (function (i) {
//     setTimeout(() => console.log(i), (num1 - i) * 1000);
//   })(i);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var

// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//   var greeter = "say Hello instead";
//   var another = 4;
//   var insider = "hello";
//   console.log(another);
// }
// var another = 8;
// console.log(another);
// console.log(insider);

// console.log(greeter); // "say Hello instead"

// let

// let greeting = "say Hi";
// if (true) {
//   let greeting = "say Hello instead";
//   console.log(greeting); // "say Hello instead"
// }
// // let greeting = "say Bye"; // Uncaught SyntaxError: Identifier 'greeting' has already been declared
// console.log(greeting); // "say Hi"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Differen types of errors

// console.log(x); // Uncaught ReferenceError: x is not defined

// const b; // Uncaught SyntaxError: Missing initializer in const declaration

// const c = 1;
// c = 2; // Uncaught TypeError: Assignment to constant variable.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Block Scope
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c); // Uncaught ReferenceError: c is not defined

// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a); // 10
//   console.log(b); // 20
//   console.log(c); // 30
// }
// console.log(a); // 10
// a is shadowed and since its referring to the same memory location in global scope, its value is changed from inside the block.

// let a = 100;
// {
//   var a = 10; //Uncaught SyntaxError: Identifier 'a' has already been declared  ----- Illegal shadowing
// }

// var a = 100;
// {
//   let a = 10; // legal shadowing
// }

// let a = 100;
// {
//   const a = 10; ///Uncaught SyntaxError: Identifier 'a' has already been declared  ----- Illegal shadowing
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// this keyword

// let counter = {
//   count: 0,
//   next: function () {
//     return ++this.count;
//   },
// };

// console.log(counter.next()); // 1

// ("use strict");
// let counter = {
//   count: 0,
//   next: function () {
//     return ++this.count;
//   },
// };

// console.log(counter.next()); // 1

// console.log(this); // Window
// this.color = "Red";
// console.log(window.color); // 'Red'

// ("use strict");
// console.log(this); // Window
// this.color = "Red";
// console.log(window.color); // 'Red'

// function show() {
//   console.log(this === window); // true
// }

// show();

// "use strict";
// function show() {
//   console.log(this); // undefined
// }

// show();

// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// console.log(car.getBrand()); // Honda

// let brand = car.getBrand;

// console.log(brand()); // undefined

// let brand = car.getBrand.bind(car);
// console.log(brand()); // Honda

// let car = {
//   brand: "Honda",
//   getBrand: function () {
//     return this.brand;
//   },
// };

// let bike = {
//   brand: "Harley Davidson",
// };

// let brand = car.getBrand.bind(bike);
// console.log(brand());

// function Car(brand) {
//   this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//   return this.brand;
// };

// let car = new Car("Honda");
// console.log(car.getBrand());

// var bmw = Car("BMW");
// console.log(bmw.brand);
// // => TypeError: Cannot read property 'brand' of undefined

// function Car(brand) {
//   if (!(this instanceof Car)) {
//     throw Error("Must use the new operator to call the function");
//   }
//   this.brand = brand;
// }

// function Car(brand) {
//   if (!new.target) {
//     throw Error("Must use the new operator to call the function");
//   }
//   this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//   return this.brand;
// };

// let car = new Car("Honda");
// console.log(car.getBrand()); // Honda

// var bmw = Car("BMW");
// console.log(bmw.brand); // Uncaught Error: Must use the new operator to call the function

// function getBrand(prefix) {
//   console.log(prefix + this.brand);
// }

// let honda = {
//   brand: "Honda",
// };
// let audi = {
//   brand: "Audi",
// };
// getBrand("Its a "); /// Its a undefined
// getBrand.call(honda, "It's a "); // It's a Honda
// getBrand.call(audi, "It's an "); // It's an Audi

// const myObject = {
//   myMethod(items) {
//     console.log(this); // logs myObject
//     const callback = () => {
//       console.log(this); // logs myObject
//     };
//     items.forEach(callback);
//   },
// };
// myObject.myMethod([1, 2, 3]);

// const myObject = {
//   name: "Sayak",
//   normal() {
//     console.log(this);
//     const newArrow = () => console.log(this); // myObject or newObject
//     newArrow();
//   },
//   myMethod: function () {
//     console.log(this);
//   },
//   myArrowMethod: () => {
//     console.log(this);
//   },
// };
// myObject.normal(); // myObject
// myObject.myMethod(); // myObject
// myObject.myArrowMethod(); // Window

// const newObject = {
//   name: "Ghosh",
// };

// myObject.normal.call(newObject); // newObject
// myObject.myMethod.call(newObject); // newObject
// myObject.myArrowMethod.call(newObject); // Window

// const obj = {
//   value: "abc",
//   createArrowFn: function () {
//     return () => console.log(this);
//   },
// };
// const arrowFn = obj.createArrowFn();
// arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }

// let obj = {
//   fname: "Sayak",
//   sing() {
//     return "lalalala " + this.fname;
//   },
// };

// console.log(obj.sing()); // // lalalala Sayak

// let obj = {
//   fname: "Sayak",
//   sing: () => {
//     return "lalalala " + this.fname;
//   },
// };

// console.log(obj.sing()); // lalalala undefined

// let obj = {
//   fname: "Sayak",
//   sing: () => {
//     return "lalalala " + obj.fname;
//   },
// };

// console.log(obj.sing()); // lalalala Sayak

// var myCar = {
//   color: "blue",
//   logColor: function () {
//     var self = this;

//     console.log("In logColor - this.color: " + this.color); // blue
//     console.log("In logColor - self.color: " + self.color); // blue
//     (function () {
//       console.log("Inner - this.color: " + this.color); // undefined
//       console.log("Inner - self.color: " + self.color); // blue
//     })();
//   },
// };

// myCar.logColor();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// setTimeout closure
// for (var i = 1; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function timer() {
//       console.log(j);
//     }, j * 1000);
//   })();
// }

// for (var i = 1; i <= 5; i++) {
//   let j = i;
//   setTimeout(function timer() {
//     console.log(j);
//   }, j * 1000);
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(function timer() {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 1; i <= 5; i++) {
//   setTimeout(console.log, i * 1000, i);
// }

// function big() {
//   setTimeout(() => {
//     console.log("big");
//   }, 1000);
//   for (let i = 0; i < 10000000000; i++) {
//     // do nothing
//   }
// }
// big();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// naming loops and scopes
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

// "use strict";
// const person = Object.freeze({
//   name: "Sayak",
//   age: 23,
// });

// console.log(person);
// person.name = "Ghosh"; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// console.log(person);

// "use strict";
// const person = Object.freeze({
//   name: "Sayak",
//   age: 23,
//   address: {
//     city: "Kolkata",
//   },
//   skills: ["JavaScript", "React", "Node"],
// });
// person.hobbies = "music"; // Uncaught TypeError: Cannot add property hobbies, object is not extensible
// person.address.district = "Howrah"; // address: {city: 'Delhi', district: 'Howrah'}
// delete person.name; // Uncaught TypeError: Cannot delete property 'name' of #<Object>
// console.log(person);
// person.address.city = "Delhi"; // address: {city: 'Delhi'}
// person.skills.push("Python"); // skills: ['JavaScript', 'React', 'Node', 'Python']
// console.log(person);

// const person2 = Object.freeze({
//   name: "Sayak",
//   age: 23,
//   address: Object.freeze({
//     city: "Kolkata",
//   }),
//   skills: Object.freeze(["JavaScript", "React", "Node"]),
// });

// console.log(person2);
// person2.address.city = "Delhi"; // TypeError: Cannot assign to read only property 'city' of object '#<Object>'
// person2.skills.push("Python"); // script.js:1570 Uncaught TypeError: Cannot add property 3, object is not extensible  at Array.push (<anonymous>)
// console.log(person2);

/* 
  Object.freeze doesn't let you add, change or delete any property but you can add, change or delete nested properties
  Object.seal doesn't let you add or delete any property but you can change existing properties
*/

// "use strict";
// const person = Object.seal({
//   name: "Sayak",
//   age: 23,
//   address: {
//     city: "Kolkata",
//   },
//   skills: ["JavaScript", "React", "Node"],
// });
// person.hobbies = "music"; // Uncaught TypeError: Cannot add property hobbies, object is not extensible
// delete person.name; // Uncaught TypeError: Cannot delete property 'name' of #<Object>
// console.log(person);
// person.address.city = "Delhi"; // address: {city: 'Delhi'}
// person.skills.push("Python"); // skills: ['JavaScript', 'React', 'Node', 'Python']
// console.log(person);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// Pass by value - for primitive values

// function Passbyvalue(a, b) {
//   let tmp;
//   tmp = b;
//   b = a;
//   a = tmp;
//   console.log(`Inside Pass by value
//         function -> a = ${a} b = ${b}`);
// }

// let a = 1;
// let b = 2;
// console.log(`Before calling Pass by value
//         Function -> a = ${a} b = ${b}`);

// Passbyvalue(a, b);

// console.log(`After calling Pass by value
//        Function -> a =${a} b = ${b}`);

// //Pass by reference - for arrays and objects(including functions)

// function PassbyReference(obj) {
//   let tmp = obj.a;
//   obj.a = obj.b;
//   obj.b = tmp;

//   console.log(`Inside Pass By Reference
//         Function -> a = ${obj.a} b = ${obj.b}`);
// }

// let obj = {
//   a: 10,
//   b: 20,
// };
// console.log(`Before calling Pass By Reference
//     Function -> a = ${obj.a} b = ${obj.b}`);

// PassbyReference(obj);

// console.log(`After calling Pass By Reference
//     Function -> a = ${obj.a} b = ${obj.b}`);

// Example 1: Updating the object reference in the function.

// function PassbyReference(obj) {
//   // Changing the reference of the object
//   obj = {
//     a: 10,
//     b: 20,
//     c: "GEEKSFORGEEKS",
//   };
//   console.log(`Inside Pass by
//         Reference Function -> obj `);

//   console.log(obj);
// }

// let obj = {
//   a: 10,
//   b: 20,
// };
// console.log(`Updating the object reference -> `);
// console.log(`Before calling Pass By
//         Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj);
// console.log(`After calling Pass By
//         Reference Function -> obj`);
// console.log(obj);

// Example 2: Mutating the original Object.

// function PassbyReference(obj) {
//   // Mutating the origanal object
//   obj.c = "GEEKSFORGEEKS";
//   console.log(`Inside Pass by
//         Reference Function -> obj `);
//   console.log(obj);
// }

// let obj = {
//   a: 10,
//   b: 20,
// };
// console.log(`Mutating the origanal object -> `);
// console.log(`Before calling Pass By
//         Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj);
// console.log(`After calling Pass By
//         Reference Function -> obj`);
// console.log(obj);

// "use strict";
// function PassbyReference(a) {
//   // Mutating the origanal array
//   a[0] = ["GEEKSFORGEEKS"];
//   a = ["GEEKSFORGEEKS"]; // doesn't work
//   console.log(`Inside Pass by
//         Reference Function -> a `);
//   console.log(a);
// }

// let arr = [1, 2, 3, 4];
// console.log(`Mutating the origanal array -> `);
// console.log(`Before calling Pass By
//         Reference Function -> arr`);
// console.log(arr);

// PassbyReference(arr);
// console.log(`After calling Pass By
//         Reference Function -> arr`);
// console.log(arr);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// JSON parse and stringify polyfill

// function looseJsonParse(obj) {
//   return Function('"use strict";return (' + obj + ")")();
// }
// console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));

// function parseJSON(sJSON) {
//   return eval(`(${sJSON})`);
// }

// let stringify = (function () {
//   var toString = Object.prototype.toString;
//   var isArray =
//     Array.isArray ||
//     function (a) {
//       return toString.call(a) === "[object Array]";
//     };
//   var escMap = {
//     '"': '\\"',
//     "\\": "\\\\",
//     "\b": "\\b",
//     "\f": "\\f",
//     "\n": "\\n",
//     "\r": "\\r",
//     "\t": "\\t",
//   };
//   var escFunc = function (m) {
//     return (
//       escMap[m] || "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
//     );
//   };
//   var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
//   return function stringify(value) {
//     if (value == null) {
//       return "null";
//     } else if (typeof value === "number") {
//       return isFinite(value) ? value.toString() : "null";
//     } else if (typeof value === "boolean") {
//       return value.toString();
//     } else if (typeof value === "object") {
//       if (typeof value.toJSON === "function") {
//         return stringify(value.toJSON());
//       } else if (isArray(value)) {
//         var res = "[";
//         for (var i = 0; i < value.length; i++)
//           res += (i ? ", " : "") + stringify(value[i]);
//         return res + "]";
//       } else if (toString.call(value) === "[object Object]") {
//         var tmp = [];
//         for (var k in value) {
//           if (value.hasOwnProperty(k))
//             tmp.push(stringify(k) + ": " + stringify(value[k]));
//         }
//         return "{" + tmp.join(", ") + "}";
//       }
//     }
//     return '"' + value.toString().replace(escRE, escFunc) + '"';
//   };
// })();

// const obj = {
//   a: 1,
//   b: "Go",
// };

// console.log(stringify(obj));
// console.log(parseJSON(stringify(obj)));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function mySetTimeout(callback, delay) {
//   if (typeof callback != "function")
//     throw new Error("callback should be a function");
//   if (typeof delay != "number" || delay < 0)
//     throw new Error("delay should be a positive number");
//   let startTime = Date.now();
//   function check() {
//     if (Date.now() >= startTime + delay) callback();
//     else requestIdleCallback(check);
//   }
//   requestIdleCallback(check);
// }

// mySetTimeout(() => console.log("Hello"), 50000000000000000);

// setInterval polyfill

// function createSetIntervalPolyfill() {
//   // closure
//   var intervalID = 0;
//   var intervalMap = {};

//   function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
//     if (typeof callbackFn !== "function") {
//       throw new TypeError("'callback' should be a function");
//     }

//     // Unique
//     var id = intervalID++;

//     function repeat() {
//       intervalMap[id] = setTimeout(() => {
//         callbackFn(...args);
//         // Terminating
//         if (intervalMap[id]) {
//           repeat();
//         }
//       }, delay);
//     }
//     repeat();

//     return id;
//   }

//   function clearIntervalPolyfill(intervalID) {
//     clearTimeout(intervalMap[intervalID]);
//     delete intervalMap[intervalID];
//   }

//   return {
//     setIntervalPolyfill,
//     clearIntervalPolyfill,
//   };
// }

// const { setIntervalPolyfill, clearIntervalPolyfill } =
//   createSetIntervalPolyfill();

// let counter = 0;
// let intervalID;

// function greeting(name) {
//   counter++;
//   console.log("Hello", name);
//   if (counter >= 3) {
//     clearIntervalPolyfill(intervalID);
//   }
// }

// intervalID = setIntervalPolyfill(greeting, 1000, "Sayak");

// (function () {
//   // List for mainataining callbacks corresponding to their id's
//   let timers = {};

//   // generates a new id for every mySetTimeout call
//   function generateNewId() {
//     let r = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
//     while (timers.hasOwnProperty(r)) {
//       // check weather the id already exists
//       r = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
//     }
//     return r;
//   }

//   function check() {
//     let t = Date.now();
//     // loop over all the timers
//     for (let timerId in timers) {
//       if (timers.hasOwnProperty(timerId) && t > timers[timerId].time) {
//         // check if the current timer needs to be executed
//         timers[timerId].callback();
//         myClearTimeout(timerId);
//       }
//     }
//     requestIdleCallback(check);
//   }

//   window.mySetTimeout = function (callback, delay) {
//     if (typeof callback != "function")
//       throw new Error("callback should be a function");
//     if (typeof delay != "number" || delay < 0)
//       throw new Error("delay should be a positive number");

//     // generate a new id
//     let newId = generateNewId();

//     // add it to the list of timers
//     timers[newId] = {
//       callback: callback,
//       time: Date.now() + delay, // add the time after which callback needs to be executed
//     };

//     // return the id to the consumer for referencing it for later use.
//     return newId;
//   };

//   // cancels the callback execution for an id.
//   window.myClearTimeout = function (id) {
//     if (timers.hasOwnProperty(id)) delete timers[id]; // if id exists just delete the timer and in the next check this timer won't be there
//   };

//   // call the checking process so that callbacks get executed.
//   requestIdleCallback(check);
// })();

// let id = mySetTimeout(() => console.log("Hello"), 5000);
// myClearTimeout(id);
// console.log(id, Date.now());

//The requestIdleCallback allows us to enqueue a callback in the message queue of the event loop.
// In this way, the callback does not get executed straight away.
// If an event like pressing a button would have come in-between,
// then it will be executed first because the event will be at higher priority in the message queue.

// const fun = () => console.log("Hello");
// requestIdleCallback(fun);
// console.log("hehe");

// // hehe
// // Hello

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// function to run for 5000ms
// function takeTime(delay) {
//   let startTime = Date.now();
//   let endTime = Date.now();
//   while (endTime < startTime + delay) {
//     endTime = Date.now();
//   }
// }
// let func = (i) => console.log(i);
// setInterval
//In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

// let i = 1;
// setInterval(function () {
//   takeTime(5000);
//   func(i++);
// }, 1000);

// nested setTimeout for same execution as setInterval
// takes 5000ms to run the function 'run' inside setTimeout and then waits for 3000ms and runs the function 'run' again
// The nested setTimeout guarantees the fixed delay (here 100ms).
// let j = 1;
// setTimeout(function run() {
//   takeTime(5000);
//   func(j++);
//   setTimeout(run, 3000);
// }, 3000);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

/* requestAnimationFrame() */

// previously: setInterval() and Element.animate()

// Benefits of reqestAnimationFrame:
// * The browser can optimize it, so animations will be smoother
// * Animations in inactive tabs will stop, allowing the CPU to chill
// * More battery-friendly

// let start;
// let stopId;
// let progress;
// let toggle = false;

// let element = document.getElementById("element");
// element.setAttribute(
//   "style",
//   "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;",
// );

// function step(timestamp) {
//   if (!start || progress > 400) start = timestamp;
//   progress = (timestamp - start) / 10 + 50;
//   element.style.top = progress + "px";
//   stopId = window.requestAnimationFrame(step);
// }

// function toggleAnimation() {
//   if (!toggle) {
//     toggle = true;
//     window.requestAnimationFrame(step);
//   } else {
//     toggle = false;
//     cancelAnimationFrame(stopId);
//   }
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// var value = 0;
// var iterationCount = 100000000;
// var req = window.requestIdleCallback;

// var workBtn = document.getElementById("work");
// var interactionBtn = document.getElementById("interaction");
// var playground = document.getElementById("play");

// var expensiveCalculation = function () {
//   console.log(iterationCount);
//   while (iterationCount > 0) {
//     value = Math.random() < 0.5 ? value + Math.random() : value + Math.random();

//     iterationCount = iterationCount - 1;
//   }
// };

// workBtn.addEventListener("click", expensiveCalculation);

// interactionBtn.addEventListener("click", function (event) {
//   if (playground.style.backgroundColor === "green") {
//     playground.style.backgroundColor = "red";
//   } else {
//     playground.style.backgroundColor = "green";
//   }
// });

// ---

// var value = 0;
// var iterationCount = 10000000;
// var req = window.requestIdleCallback;

// var workBtn = document.getElementById("work");
// var interactionBtn = document.getElementById("interaction");
// var playground = document.getElementById("play");

// var expensiveCalculation = function (deadline) {
//   console.log(deadline, deadline.timeRemaining(), iterationCount);
//   while (iterationCount > 0 && deadline.timeRemaining() > 1) {
//     value = Math.random() < 0.5 ? value + Math.random() : value + Math.random();

//     iterationCount = iterationCount - 1;
//   }

//   req(expensiveCalculation);
// };

// workBtn.addEventListener("click", function (event) {
//   req(expensiveCalculation);
// });

// interactionBtn.addEventListener("click", function (event) {
//   if (playground.style.backgroundColor === "green") {
//     playground.style.backgroundColor = "red";
//   } else {
//     playground.style.backgroundColor = "green";
//   }
// });

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// difference b/w function statement and a function expression is that function statement is hoisted and function expression is not hoisted.
// a(); // a
// b(); // Uncaught TypeError: b is not a function

// // function statement aka function declaration
// function a() {
//   console.log("a");
// }

// // function expression
// var b = function () {
//   console.log("b");
// };

// // Anonymous function
// function () { // Uncaught SyntaxError: Function statements require a function name
//   console.log("c");
// }

// // Named function expression
// var c = function xyz() {
//   console.log("c");
//   console.log(xyz); // ƒ xyz() { console.log("c"); console.log(xyz);}
// };
// c(); // c
// xyz(); // Uncaught ReferenceError: xyz is not defined

// Difference b/w parameters and arguments
// function foo(x, y, z) {
//   // x, y, z are parameters
//   console.log(x, y, z);
//   console.log(arguments); // arguments is an array-like object // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// }
// foo(1, 2, 3, 4, 5); // 1 2 3 are arguments

// First Class Functions - First Class Citizens
// The ability of functions to be used as values and to pass a function as an argument to another function and to return the function from the function.

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// memoize a function

// const memoize = (fn) => {
//   let cache = {};
//   return (...args) => {
//     let argsCache = JSON.stringify(args);
//     if (!cache[argsCache]) {
//       cache[argsCache] = fn(...args);
//     }
//     return cache[argsCache];
//   };
// };

// const mul = (a, b, c) => {
//   for (let i = 0; i < 1e9; i++);
//   return a * b * c;
// };

// const memoizedMul = memoize(mul);

// console.time("mul1");
// console.log(memoizedMul(2, 3, 2));
// console.timeEnd("mul1");
// // mul1: 1179.956787109375 ms

// console.time("mul2");
// console.log(memoizedMul(2, 3, 2));
// console.timeEnd("mul2");
// // mul2: 0.066162109375 ms

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// slice

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// const slicedAnimals = animals.slice();

// console.log(slicedAnimals);
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// console.log(animals === slicedAnimals);
// // false

// -

// // Using slice, create newCar from myCar.
// let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// let newCar = myCar.slice(0, 2);

// // Display the values of myCar, newCar, and the color of myHonda
// //  referenced from both arrays.
// console.log("myCar = ", myCar);
// console.log("newCar = ", newCar);
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);

// // Change the color of myHonda.
// myHonda.color = "purple";
// console.log("The new color of my Honda is " + myHonda.color);

// // Display the color of myHonda referenced from both arrays.
// console.log("myCar[0].color = " + myCar[0].color);
// console.log("newCar[0].color = " + newCar[0].color);

// Array.prototype.mySlice = function (start, end) {
//   let newArray = [];
//   if (start === undefined) {
//     start = 0;
//   }
//   if (end === undefined) {
//     end = this.length;
//   }
//   for (let i = start; i < end; i++) {
//     newArray.push(this[i]);
//   }
//   return newArray;
// };

// Array.prototype.customSlice = function (begin, end) {
//   var len = this.length;
//   var size;
//   var start = begin || 0;

//   start = start >= 0 ? start : Math.max(0, len + start);
//   end = end || len;

//   var up_to = typeof end == "number" ? Math.min(end, len) : len;
//   if (end < 0) up_to = len + end;

//   // actual expected size of the slice
//   size = up_to - start;

//   // if size is negative it should return an empty array
//   if (size <= 0) size = 0;

//   var typed_array_constructor = this.constructor;
//   var cloned = new typed_array_constructor(size);

//   for (var i = 0; i < size; i++) {
//     cloned[i] = this[start + i];
//   }

//   return cloned;
// };

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.customSlice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.customSlice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.customSlice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.customSlice(-2));
// // expected output: Array ["duck", "elephant"]

// console.log(animals.customSlice(2, -1));
// // expected output: Array ["camel", "duck"]

// const slicedAnimals = animals.customSlice();

// console.log(slicedAnimals);
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// console.log(animals === slicedAnimals);
// // false

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = 0;

// arr.forEach((a) => {
//   res = res + a;
// });

// console.log(res);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// const createPromise = (resolvePromise, message, delay = 0) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolvePromise ? resolve : reject, delay, message);
//   });
// };

// const pErr = createPromise(false, "Error", 2000);
// const pFast = createPromise(false, "Success", 2000);
// const pSlow = createPromise(true, "Success", 5000);

// Promise.all([pErr, pFast, pSlow])
//   .then((result) => console.log("all --> ", result))
//   .catch((err) => console.log("err --> ", err));

// Promise.allSettled([pErr, pFast, pSlow])
//   .then((result) => console.log("allSettled --> ", result))
//   .catch((err) => console.log("err --> ", err));

// Promise.race([pErr, pFast, pSlow])
//   .then((result) => console.log("race --> ", result))
//   .catch((err) => console.log("err --> ", err));

// Promise.any([pErr, pFast, pSlow])
//   .then((result) => console.log("any --> ", result))
//   .catch((err) => console.log("err --> ", err));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
