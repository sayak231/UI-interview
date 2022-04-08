// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//   let nextIndex = start;
//   let iterationCount = 0;

//   const rangeIterator = {
//     next: function () {
//       let result;
//       if (nextIndex < end) {
//         result = { value: nextIndex, done: false };
//         nextIndex += step;
//         iterationCount++;
//         return result;
//       }
//       return { value: iterationCount, done: true };
//     },
//   };
//   return rangeIterator;
// }

// const iterator = makeRangeIterator(1, 10, 1);

// let result = iterator.next();
// while (!result.done) {
//   console.log(result.value); // 1 3 5 7 9
//   result = iterator.next();
// }

// console.log("Iterated over sequence of size: ", result.value);
// // [5 numbers returned, that took interval in between: 0 to 10]

// ------------------------------------------------------------------------------------------------------------------------------------------

// const fruitsIterator = (fruits) => {
//   let nextIndex = 0;
//   return {
//     next: () => {
//       if (nextIndex < fruits.length) {
//         const result = { value: fruits[nextIndex], done: false };
//         nextIndex++;
//         return result;
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//   };
// };

// const fruitsArr = ["Apple", "Banana", "Orange", "Pear"];
// const fruits = fruitsIterator(fruitsArr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());

// --------------------------------------------------------------------------------------------------------------------------------------------------

class LinkedList {
  constructor(data) {
    this.data = data;
  }

  firstItem() {
    return this.data.find((i) => i.head);
  }

  findById(id) {
    return this.data.find((i) => i.id === id);
  }

  [Symbol.iterator]() {
    let item = { next: this.firstItem().id };
    return {
      next: () => {
        item = this.findById(item.next);
        if (item) {
          return { value: item.value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const myList = new LinkedList([
  { id: "a10", value: "First", next: "a13", head: true },
  { id: "a11", value: "Last", next: null, head: false },
  { id: "a12", value: "Third", next: "a11", head: false },
  { id: "a13", value: "Second", next: "a12", head: false },
]);

for (let item of myList) {
  console.log(item); // 'First', 'Second', 'Third', 'Last'
}

// --------------------------------------------------------------------------------------------------------------------------------------------------

class SpecialList {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }

  values() {
    return this.data
      .filter((i) => i.complete)
      .map((i) => i.value)
      [Symbol.iterator]();
  }
}

const mySpecialList = new SpecialList([
  { complete: true, value: "Lorem ipsum" },
  { complete: true, value: "dolor sit amet" },
  { complete: false },
  { complete: true, value: "adipiscing elit" },
]);

for (let item of mySpecialList) {
  console.log(item); // The exact data passed to the SpecialList constructor above
}

for (let item of mySpecialList.values()) {
  console.log(item); // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}

// ----------------------------------------------------------------------------------------------------------------------------------------

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        console.log("cleaning up...");
        return { value: undefined, done: true };
      },
    };
  }
}

let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

let oddNumbers = new Sequence(1, 10, 2);

for (const num of oddNumbers) {
  if (num > 5) {
    break;
  }
  console.log(num);
}

// ----------------------------------------------------------------------------------------------------------------------------------------
