// Prototype chaining

// __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// prototype is the object that is used to build __proto__ when you create an object with new:

console.log("Object.prototype", Object.prototype);
console.log("Array.prototype", Array.prototype);
console.log("Function.prototype", Function.prototype);
console.log("Object.__proto__", Object.__proto__);
console.log("Array.__proto__", Array.__proto__);
console.log("Function.__proto__", Function.__proto__);
console.log("Object.__proto__.__proto__", Object.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log("Array.__proto__.__proto__", Array.__proto__.__proto__); //{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log("Function.__proto__.__proto__", Function.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log(
  "Object.__proto__.__proto__.__proto__",
  Object.__proto__.__proto__.__proto__,
); // NULL
console.log(
  "Array.__proto__.__proto__.__proto__",
  Array.__proto__.__proto__.__proto__,
); // NULL
console.log(
  "Function.__proto__.__proto__.__proto__",
  Function.__proto__.__proto__.__proto__,
); // NULL
console.log("Object.prototype.__proto__", Object.prototype.__proto__); // NULL

console.log(Object.__proto__ === Array.__proto__); // true
console.log(Object.__proto__ === Function.__proto__); // true
console.log(Function.__proto__ === Array.__proto__); // true

console.log([].__proto__.__proto__ === {}.__proto__); // true
function fun() {
  //haha
}
console.log(fun.__proto__ === Function.prototype); // true
console.log(fun.__proto__.__proto__ === Object.prototype); // true
console.log(fun.__proto__.__proto__.__proto__ === null); // true
console.log(fun.__proto__ === {}.__proto__); // false
console.log(fun.__proto__.__proto__ === {}.__proto__); // true

console.log([].__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
console.log([].prototype); // undefined

function Foo() {
  // do something foo;
}
console.log(
  new Foo().__proto__,
  Foo.prototype,
  new Foo().__proto__ === Foo.prototype,
); // {constructor: ƒ} {constructor: ƒ} true
console.log(new Foo().prototype === undefined); // true

var house = { color: "brown", size: "huge", expensive: true };

console.log(house.prototype); // undefined
console.log(house.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSet... (__pro

// Note: 'house' is an object that has a __proto__ object, but does not have a prototype

function add(a, b) {
  return a + b;
}

console.log(add.prototype); // {constructor: ƒ}
console.log(add.__proto__); // ƒ () { [native code] }

// Note: 'add' is a function that has a __proto__ and a prototype property.
// Try this code yourself and you'll see that the prorotype property is referenced in the __proto__ object within the constructor function
