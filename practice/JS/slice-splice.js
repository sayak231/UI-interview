let arrayIntegers = [1, 2, 3, 4, 5, 6, 7];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5,6,7]
let arrayIntegers4 = arrayIntegers.slice(-4); //returns [4,5,6,7]

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers5 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers6 = arrayIntegersOriginal2.splice(-2); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers7 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers8 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
console.log(arrayIntegers3);

// ----------------------------------------------------------------------------------------------------------------------------------------------

// slice

const animals1 = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals1.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals1.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// expected output: Array ["camel", "duck"]

const slicedAnimals1 = animals1.slice();

console.log(slicedAnimals1);
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals1 === slicedAnimals1);
// false

// -

// Using slice, create newCar from myCar.
let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
let newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log("myCar = ", myCar);
console.log("newCar = ", newCar);
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is " + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log("myCar[0].color = " + myCar[0].color);
console.log("newCar[0].color = " + newCar[0].color);
