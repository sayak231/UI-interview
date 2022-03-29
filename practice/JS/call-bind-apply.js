// call bind apply

const employee1 = { firstName: "John", lastName: "Rodson" };
const employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

const employee3 = { firstName: "John", lastName: "Rodson" };
const employee4 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
  );
}

invite.apply(employee3, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee4, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?

const employee5 = { firstName: "John", lastName: "Rodson" };
const employee6 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2,
  );
}

const inviteEmployee5 = invite.bind(employee5, "Hi");
const inviteEmployee6 = invite.bind(employee6);
inviteEmployee5("How are you?"); // Hello John Rodson, How are you?
inviteEmployee6("Hello", "How are you?"); // Hello Jimmy Baily, How are you?

// PolyFill for call

function runCall() {
  console.log(arguments, arguments[0], this);
  arguments[0].fn = this;
  //converting arguments to proper array[],
  let paramsArray = [];
  for (let arg of arguments) {
    paramsArray.push(arg);
  }
  arguments[0].fn(...paramsArray.slice(1));
  //OR
  //arguments[0].fn.apply(arguments[0], paramsArray.slice(1));
}

//runCall2 has defined parameters
function runCall2(context, ...args) {
  context.fn = this;
  context.fn(...args);
  //OR
  //context.fn.apply(context, args);
}

Function.prototype.runCall = runCall;
Function.prototype.runCall2 = runCall2;

function displayUser(state, country, method) {
  console.log("----- " + method + " -----");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}
var user = {
  name: "John Stewart",
  age: "🙊",
  city: "Sanfrancisco",
};
displayUser.runCall(user, "CA", "USA", "call --> runCall"); //----> passing context, params
displayUser.runCall2(user, "CA", "USA", "call --> runCall2"); //----> passing context, params

// PolyFill for apply

function runApply() {
  let context = arguments[0];
  let args = arguments[1];
  context.fn = this;
  context.fn(...args);
}

Function.prototype.runApply = runApply;

function displayUser(state, country, method) {
  console.log("----- " + method + " -----");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}
var user = {
  name: "John Stewart",
  age: "🙊",
  city: "Sanfrancisco",
};
displayUser.runApply(user, ["CA", "USA", "apply --> runApply"]);

// PolyFill for bind

Function.prototype.myBind = function (context, ...args1) {
  return (...args2) => {
    this.apply(context, [...args1, ...args2]);
  };
};

function displayUser(state, country, method) {
  console.log("----- " + method + " -----");
  console.log("Name : ", this.name);
  console.log("Age : ", this.age);
  console.log("City : ", this.city);
  console.log("State : ", state);
  console.log("Country : ", country);
}
let user = {
  name: "John Stewart",
  age: "🙊",
  city: "Sanfrancisco",
};
let boundDisplayUser = displayUser.myBind(user, "CA");
boundDisplayUser("USA", "bind --> myBind");

// uses of call

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

const cheese = new Food("feta", 5);
const fun = new Toy("robot", 40);

// -

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Fail" },
];

for (let i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log("#" + i + " " + this.species + ": " + this.name);
    };
    this.print();
  }.call(animals[i], i));
}

// -

("use strict");

var sData = "Wisen";

function display() {
  console.log("sData value is %s ", this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined

// uses of apply

// concat array
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

let min = Math.min.apply(null, numbers);

console.log(max, min);

// uses of bind

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

const list1 = list(1, 2, 3);
//  [1, 2, 3]

const result1 = addArguments(1, 2);
//  3

// Create a function with a preset leading argument
const leadingThirtysevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

const list2 = leadingThirtysevenList();
//  [37]

const list3 = leadingThirtysevenList(1, 2, 3);
//  [37, 1, 2, 3]

const result2 = addThirtySeven(5);
//  37 + 5 = 42

const result3 = addThirtySeven(5, 10);
//  37 + 5 = 42
//  (the second argument is ignored)

// -

function LateBloomer() {
  this.petalCount = 8;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 3000); // I am a beautiful flower with 8 petals!
  window.setTimeout(this.declare, 5000); // I am a beautiful flower with undefined petals!
};

LateBloomer.prototype.declare = function () {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom();
//  after 3 seconds, calls 'flower.declare()'
