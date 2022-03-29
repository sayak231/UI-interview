// var

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
  var another = 4;
  var insider = "hello";
  console.log(another);
}
var another = 8;
console.log(another);
console.log(insider);

console.log(greeter); // "say Hello instead"

// let

let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting); // "say Hello instead"
}
// let greeting = "say Bye"; // Uncaught SyntaxError: Identifier 'greeting' has already been declared
console.log(greeting); // "say Hi"

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Block Scope
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10
console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Uncaught ReferenceError: c is not defined

var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}
console.log(a); // 10
// a is shadowed and since its referring to the same memory location in global scope, its value is changed from inside the block.

let a = 100;
{
  var a = 10; //Uncaught SyntaxError: Identifier 'a' has already been declared  ----- Illegal shadowing
}

var a = 100;
{
  let a = 10; // legal shadowing
}

let a = 100;
{
  const a = 10; ///Uncaught SyntaxError: Identifier 'a' has already been declared  ----- Illegal shadowing
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
