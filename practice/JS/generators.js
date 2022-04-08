// function* generate() {
//   console.log("invoked 1st time");
//   yield 1;
//   console.log("invoked 2nd time");
//   yield 2;
// }

// let gen = generate();
// console.log(gen);

// let result = gen.next();
// console.log(result);

// result = gen.next();
// console.log(result);

// result = gen.next();
// console.log(result);

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// function* generate() {
//   console.log("invoked 1st time");
//   yield 1;
//   console.log("invoked 2nd time");
//   yield 2;
// }

// let gen = generate();

// for (const g of gen) {
//   console.log(g);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// function* forever() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// let f = forever();
// console.log(f.next()); // 0
// console.log(f.next()); // 1
// console.log(f.next()); // 2

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Using generators to implement iterators
// When you implement an iterator, you have to manually define the next() method.
// In the next() method, you also have to manually save the state of the current element.

// Since generators are iterables, they can help you simplify the code for implementing iterator.

// The following is a Sequence iterator created in the iterator tutorial:

// class SequenceWIterator {
//   constructor(start = 0, end = Infinity, interval = 1) {
//     this.start = start;
//     this.end = end;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let counter = 0;
//     let nextIndex = this.start;
//     return {
//       next: () => {
//         if (nextIndex < this.end) {
//           let result = { value: nextIndex, done: false };
//           nextIndex += this.interval;
//           counter++;
//           return result;
//         }
//         return { value: counter, done: true };
//       },
//     };
//   }
// }

// And here is the new Sequence iterator that uses a generator:

// class SequenceWGenerator {
//   constructor(start = 0, end = Infinity, interval = 1) {
//     this.start = start;
//     this.end = end;
//     this.interval = interval;
//   }
//   *[Symbol.iterator]() {
//     for (let index = this.start; index <= this.end; index += this.interval) {
//       yield index;
//     }
//   }
// }

// As you an see, the method Symbol.iterator is much simpler by using the generator.

// The following script uses the Sequence iterator to generate a sequence of odd numbers from 1 to 10:

// let oddNumbers = new SequenceWGenerator(1, 10, 2);

// for (const num of oddNumbers) {
//   console.log(num);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// class Bag {
//   constructor() {
//     this.elements = [];
//   }
//   isEmpty() {
//     return this.elements.length === 0;
//   }
//   add(element) {
//     this.elements.push(element);
//   }
//   *[Symbol.iterator]() {
//     for (let element of this.elements) {
//       yield element;
//     }
//   }
// }

// let bag = new Bag();

// bag.add(1);
// bag.add(2);
// bag.add(3);

// for (let e of bag) {
//   console.log(e);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//   let iterationCount = 0;
//   for (let i = start; i < end; i += step) {
//     iterationCount++;
//     yield i;
//   }
//   return iterationCount;
// }

// let rangeIterator = makeRangeIterator(1, 10, 1);

// console.log(rangeIterator.next()); // {value: 1, done: false}
// console.log(rangeIterator.next()); // {value: 2, done: false}
// console.log(rangeIterator.next()); // {value: 3, done: false}
// console.log(rangeIterator.next()); // {value: 4, done: false}
// console.log(rangeIterator.next()); // {value: 5, done: false}
// console.log(rangeIterator.next()); // {value: 6, done: false}
// console.log(rangeIterator.next()); // {value: 7, done: false}
// console.log(rangeIterator.next()); // {value: 8, done: false}
// console.log(rangeIterator.next()); // {value: 9, done: false}
// console.log(rangeIterator.next()); // {value: 10, done: false}
// console.log(rangeIterator.next()); // {value: undefined, done: true}

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// function* generatorSum() {
//   let x = yield "Please enter a number:";
//   let y = yield "Please enter another number:";
//   return x + y;
// }
// let genS = generatorSum();
// console.log(genS.next()); // {value: "Please enter a number:", done: false}
// console.log(genS.next(10)); // {value: "Please enter another number:", done: false}
// console.log(genS.next(20)); // {value: 30, done: true}

// --------------------------------------------------------------------------------------------------------------------------------------------------------
