var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// What are classes in ES6
// In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance.
// For example, the prototype based inheritance written in function expression as below,

function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has" + this.color + " color";
};
// Whereas ES6 classes can be defined as an alternative

class Bike1 {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + " bike has" + this.color + " color";
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let per = new Person("Sayak", 23);

console.log(per);

class Person1 {
  constructor(name) {
    this.name = name;
  }
}

let object = new Person1("Sudheer");

console.log(object);
