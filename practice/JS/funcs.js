//Impure
let numberArray = [];
const impureAddNumber = (number) => numberArray.push(number);
//Pure
const pureAddNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

//Display the results
console.log(impureAddNumber(6)); // returns 1
console.log(numberArray); // returns [6]
console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
console.log(pureAddNumber(8)(numberArray)); // returns [6, 8]
console.log(pureAddNumber(11)(numberArray)); // returns [6, 11]
console.log(pureAddNumber(82)(numberArray)); // returns [6, 82]
console.log(numberArray); // returns [6]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// hoc;

const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Pass by value - for primitive values

function Passbyvalue(a, b) {
  let tmp;
  tmp = b;
  b = a;
  a = tmp;
  console.log(`Inside Pass by value
        function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value
        Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value
       Function -> a =${a} b = ${b}`);

//Pass by reference - for arrays and objects(including functions)

function PassbyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(`Inside Pass By Reference
        Function -> a = ${obj.a} b = ${obj.b}`);
}

let objA = {
  a: 10,
  b: 20,
};
console.log(`Before calling Pass By Reference
    Function -> a = ${objA.a} b = ${objA.b}`);

PassbyReference(objA);

console.log(`After calling Pass By Reference
    Function -> a = ${objA.a} b = ${objA.b}`);

// Example 1: Updating the object reference in the function.

function PassbyReference(obj) {
  // Changing the reference of the object
  obj = {
    a: 10,
    b: 20,
    c: "GEEKSFORGEEKS",
  };
  console.log(`Inside Pass by
        Reference Function -> obj `);

  console.log(obj);
}

let objB = {
  a: 10,
  b: 20,
};
console.log(`Updating the object reference -> `);
console.log(`Before calling Pass By
        Reference Function -> objB`);
console.log(objB);

PassbyReference(objB);
console.log(`After calling Pass By
        Reference Function -> objB`);
console.log(objB);

// Example 2: Mutating the original Object.

function PassbyReference(obj) {
  // Mutating the origanal object
  obj.c = "GEEKSFORGEEKS";
  console.log(`Inside Pass by
        Reference Function -> obj `);
  console.log(obj);
}

let objC = {
  a: 10,
  b: 20,
};
console.log(`Mutating the origanal object -> `);
console.log(`Before calling Pass By
        Reference Function -> objC`);
console.log(objC);

PassbyReference(objC);
console.log(`After calling Pass By
        Reference Function -> objC`);
console.log(objC);

("use strict");
function PassbyReference(a) {
  // Mutating the origanal array
  a[0] = ["GEEKSFORGEEKS"];
  a = ["GEEKSFORGEEKS"]; // doesn't work
  console.log(`Inside Pass by
        Reference Function -> a `);
  console.log(a);
}

let arr = [1, 2, 3, 4];
console.log(`Mutating the origanal array -> `);
console.log(`Before calling Pass By
        Reference Function -> arr`);
console.log(arr);

PassbyReference(arr);
console.log(`After calling Pass By
        Reference Function -> arr`);
console.log(arr);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
