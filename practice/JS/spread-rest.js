// Apply for new operator
// When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]).
// However, an array can be easily used with new thanks to spread syntax:

let dateFields = [1970, 0, 1]; // 1 Jan 1970
let d = new Date(...dateFields);

// To use new with an array of parameters without spread syntax, you would have to do it indirectly through partial application:

function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

let myArguments = ["hi", "how", "are", "you", "mr", null];
let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
//  (internal log of myConstructor):           arguments.length: 6
//  (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
//  (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
