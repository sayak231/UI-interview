// const sym1 = Symbol("sym1");
// // const sym2 = new Symbol("sym2"); // Uncaught TypeError: Symbol is not a constructor

// console.log(sym1); // Symbol(sym1)
// console.log(typeof sym1); // symbol

// ----------------------------------------------------------------------------------------------------------------------------------------

// const sym1 = Symbol("Identifier");
// const sym2 = Symbol("Identifier");
// console.log(sym1 === sym2, sym1 == sym2); // false false

// ----------------------------------------------------------------------------------------------------------------------------------------

// const k1 = Symbol.for("key1");
// const k2 = Symbol("key2");
// const obj = {};
// obj[k1] = "value1";
// obj[k2] = "value2";
// obj.name = "Key Value Symbol Obj";
// console.log(obj); // { Symbol(key1): 'value1', Symbol(key2): 'value2', name: 'Key Value Symbol Obj' }

// // Symbol keys are not enumerable in for...in loops
// for (const key in obj) {
//   console.log(key); // name
// }

// console.log(Object.keys(obj)); // ['name']

// console.log(Object.getOwnPropertyNames(obj)); // ['name']

// console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(key1), Symbol(key2)]

// console.log(JSON.stringify(obj)); // {"name":"Key Value Symbol Obj"}

// ----------------------------------------------------------------------------------------------------------------------------------------

// let ssn = Symbol.for("ssn");
// let citizenID = Symbol.for("ssn");
// console.log(ssn === citizenID); // true

// console.log(Symbol.keyFor(citizenID)); // 'ssn'

// let systemID = Symbol("sys");
// console.log(Symbol.keyFor(systemID)); // undefined

// ----------------------------------------------------------------------------------------------------------------------------------------

// Well known symbols

// Symbol.hasInstance

class Stack1 {}
console.log([] instanceof Stack1); // false

// --------------------------------------------------------------------------------------------------------------------------------------------------------

class Stack2 {
  static [Symbol.hasInstance](obj) {
    return Array.isArray(obj);
  }
}
console.log([] instanceof Stack2); // true

// Symbol.isConcatSpreadable

let list1 = {
  0: "JavaScript",
  1: "Symbol",
  length: 2,
};
let message1 = ["Learning"].concat(list1);
console.log(message1); // ["Learning", Object]

let list2 = {
  0: "JavaScript",
  1: "Symbol",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
let message2 = ["Learning"].concat(list2);
console.log(message2); // ["Learning", "JavaScript", "Symbol"]

let list3 = {
  j: "JavaScript",
  s: "Symbol",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
let message3 = ["Learning"].concat(list3);
console.log(message3); // ["Learning", empty x 2]

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Symbol.iterator

var numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}
// 1
// 2
// 3

var iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // Object {value: 1, done: false}
console.log(iterator.next()); // Object {value: 2, done: false}
console.log(iterator.next()); // Object {value: 3, done: false}
console.log(iterator.next()); // Object {value: undefined, done: true}

// --------------------------------------------------------------------------------------------------------------------------------------------------------

class List {
  constructor() {
    this.elements = [];
  }

  add(element) {
    this.elements.push(element);
    return this;
  }

  *[Symbol.iterator]() {
    for (let element of this.elements) {
      yield element;
    }
  }
}

let chars = new List();
chars.add("A").add("B").add("C");

// because of the Symbol.iterator
for (let c of chars) {
  console.log(c);
}

// A
// B
// C

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Symbol.toPrimitive

function Money(amount, currency) {
  this.amount = amount;
  this.currency = currency;
}
Money.prototype[Symbol.toPrimitive] = function (hint) {
  var result;
  switch (hint) {
    case "string":
      result = this.amount + this.currency;
      break;
    case "number":
      result = this.amount;
      break;
    case "default":
      result = this.amount + this.currency;
      break;
  }
  return result;
};

var price = new Money(799, "USD");

console.log("Price is " + price); // Price is 799USD
console.log(+price + 1); // 800
console.log(price); // Money {amount: 799, currency: 'USD'}
console.log(String(price)); // 799USD

// ----------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------------------------
