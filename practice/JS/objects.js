const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable("property1"));
// expected output: true

console.log(array1.propertyIsEnumerable(0));
// expected output: true

console.log(array1.propertyIsEnumerable("length"));
// expected output: false

const object2 = {};
object2.property1 = 42;

console.log(object2.hasOwnProperty("property1"));
// expected output: true

console.log(object2.hasOwnProperty("toString"));
// expected output: false

console.log(object2.hasOwnProperty("hasOwnProperty"));
// expected output: false

// ----------------------------------------------------------------------------------------------------------------------------

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

// let copiedPerson = Object.assign({}, person); // Shallow Copy
let copiedPerson = { ...person }; // Shallow Copy
// let copiedPerson = JSON.parse(JSON.stringify(person)); // Deep Copy

copiedPerson.firstName = "Jane"; // disconnected

copiedPerson.address.street = "Amphitheatre Parkway"; // connected
copiedPerson.address.city = "Mountain View"; // connected

console.log(copiedPerson);
console.log(person);

// ----------------------------------------------------------------------------------------------------------------------------

function turnOn(machine) {
  machine.isOn = true;
}

const computer = {
  isOn: false,
};

turnOn(computer);
console.log(computer.isOn); // true;

// ----------------------------------------------------------------------------------------------------------------------------

("use strict");
const person1 = Object.freeze({
  name: "Sayak",
  age: 23,
});

console.log(person1);
person1.name = "Ghosh"; // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
console.log(person1);

("use strict");
const person2 = Object.freeze({
  name: "Sayak",
  age: 23,
  address: {
    city: "Kolkata",
  },
  skills: ["JavaScript", "React", "Node"],
});
person2.hobbies = "music"; // Uncaught TypeError: Cannot add property hobbies, object is not extensible
person2.address.district = "Howrah"; // address: {city: 'Delhi', district: 'Howrah'}
delete person2.name; // Uncaught TypeError: Cannot delete property 'name' of #<Object>
console.log(person2);
person2.address.city = "Delhi"; // address: {city: 'Delhi'}
person2.skills.push("Python"); // skills: ['JavaScript', 'React', 'Node', 'Python']
console.log(person2);

const person3 = Object.freeze({
  name: "Sayak",
  age: 23,
  address: Object.freeze({
    city: "Kolkata",
  }),
  skills: Object.freeze(["JavaScript", "React", "Node"]),
});

console.log(person3);
person3.address.city = "Delhi"; // TypeError: Cannot assign to read only property 'city' of object '#<Object>'
person3.skills.push("Python"); // script.js:1570 Uncaught TypeError: Cannot add property 3, object is not extensible  at Array.push (<anonymous>)
console.log(person3);

/*
  Object.freeze doesn't let you add, change or delete any property but you can add, change or delete nested properties
  Object.seal doesn't let you add or delete any property but you can change existing properties
*/

("use strict");
const person4 = Object.seal({
  name: "Sayak",
  age: 23,
  address: {
    city: "Kolkata",
  },
  skills: ["JavaScript", "React", "Node"],
});
person4.hobbies = "music"; // Uncaught TypeError: Cannot add property hobbies, object is not extensible
delete person4.name; // Uncaught TypeError: Cannot delete property 'name' of #<Object>
console.log(person4);
person4.address.city = "Delhi"; // address: {city: 'Delhi'}
person4.skills.push("Python"); // skills: ['JavaScript', 'React', 'Node', 'Python']
console.log(person4);
