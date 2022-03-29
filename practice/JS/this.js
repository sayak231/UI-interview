// Proof that "this keyword always equals the value of this variable just outside the arrow function in case of arrow functions, arrow v/s normal"

const n = { name: "Sayak" };
// const print = (h, s) => {
//   console.log(this.name + h + s);
// };
function print(h, s) {
  console.log(this.name + h + s);
}
print.call(n, "dd", "ll");

// --------------------------------------------------------------------------------------------------------------------------------------

// this keyword

let counter1 = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter1.next()); // 1

("use strict");
let counter2 = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

console.log(counter2.next()); // 1

console.log(this); // Window
this.color = "Red";
console.log(window.color); // 'Red'

("use strict");
console.log(this); // Window
this.color = "Red";
console.log(window.color); // 'Red'

function show() {
  console.log(this === window); // true
}

show();

("use strict");
function show() {
  console.log(this); // undefined
}

show();

let car1 = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car1.getBrand()); // Honda

let brand1 = car.getBrand;

console.log(brand1()); // undefined

let brand2 = car.getBrand.bind(car);
console.log(brand2()); // Honda

let car2 = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

let bike = {
  brand: "Harley Davidson",
};

let brand3 = car.getBrand.bind(bike);
console.log(brand3());

function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

let car3 = new Car("Honda");
console.log(car3.getBrand());

var bmw1 = Car("BMW");
console.log(bmw1.brand);
// => TypeError: Cannot read property 'brand' of undefined

function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}

function Car(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

let car4 = new Car("Honda");
console.log(car4.getBrand()); // Honda

var bmw2 = Car("BMW");
console.log(bmw2.brand); // Uncaught Error: Must use the new operator to call the function

function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda",
};
let audi = {
  brand: "Audi",
};
getBrand("Its a "); /// Its a undefined
getBrand.call(honda, "It's a "); // It's a Honda
getBrand.call(audi, "It's an "); // It's an Audi

const myObject1 = {
  myMethod(items) {
    console.log(this); // logs myObject
    const callback = () => {
      console.log(this); // logs myObject
    };
    items.forEach(callback);
  },
};
myObject1.myMethod([1, 2, 3]);

const myObject2 = {
  name: "Sayak",
  normal() {
    console.log(this);
    const newArrow = () => console.log(this); // myObject or newObject
    newArrow();
  },
  myMethod: function () {
    console.log(this);
  },
  myArrowMethod: () => {
    console.log(this);
  },
};
myObject2.normal(); // myObject
myObject2.myMethod(); // myObject
myObject2.myArrowMethod(); // Window

const newObject = {
  name: "Ghosh",
};

myObject2.normal.call(newObject); // newObject
myObject2.myMethod.call(newObject); // newObject
myObject2.myArrowMethod.call(newObject); // Window

const obj1 = {
  value: "abc",
  createArrowFn: function () {
    return () => console.log(this);
  },
};
const arrowFn = obj1.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }

let obj2 = {
  fname: "Sayak",
  sing() {
    return "lalalala " + this.fname;
  },
};

console.log(obj2.sing()); // // lalalala Sayak

let obj3 = {
  fname: "Sayak",
  sing: () => {
    return "lalalala " + this.fname;
  },
};

console.log(obj3.sing()); // lalalala undefined

let obj4 = {
  fname: "Sayak",
  sing: () => {
    return "lalalala " + obj4.fname;
  },
};

console.log(obj4.sing()); // lalalala Sayak

var myCar = {
  color: "blue",
  logColor: function () {
    var self = this;

    console.log("In logColor - this.color: " + this.color); // blue
    console.log("In logColor - self.color: " + self.color); // blue
    (function () {
      console.log("Inner - this.color: " + this.color); // undefined
      console.log("Inner - self.color: " + self.color); // blue
    })();
  },
};

myCar.logColor();
