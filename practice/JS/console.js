console.log(
  "%cThis webpage is for Practice",
  "color:green; font-size:40px;border: 1px solid red;margin: 10px; padding: 10px;",
);

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.3 + 0.6); // 0.8999999999999999

// tHIS WILL GIVE THE TIME TAKEN B/W CONSOLE.TIME AND CONSOLE.TIMEEND
console.time("Timer");
for (let i = 0; i < 100000000; i++) {
  // do nothing
}
console.timeEnd("Timer");

const x = 2;
console.assert(x === 1, "1 is not equal to 1"); // Assertion failed: 1 is not equal to 1

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];
console.table(people); // prints in table format
