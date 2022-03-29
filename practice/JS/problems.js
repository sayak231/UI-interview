function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); //120

// ---------------------------------------------------------------------------------------------------------------------

//Asynchronous to synchronous function

function AsyncRequest(k) {
  return new Promise(function (resolve, reject) {
    if (k < 3) {
      resolve(k);
    } else {
      reject("Error");
    }
  });
}

function normal() {
  let data;
  AsyncRequest(2).then((res) => {
    console.log(res);
    data = res;
  });
  console.log(data);
}
normal();

// ---------------------------------------------------------------------------------------------------------------------

function arrayToObject(array) {
  return Object.freeze(
    array.reduce((obj, item, index) => {
      if (typeof item === "string") {
        console.log(obj, index);
        obj[(obj[index] = item.toUpperCase())] = index;
      }
      return obj;
    }, {}),
  );
}
const bar = foo(["a", "B", "C"]);
console.log(bar); // {0: "A",1: "B",2: "C",A: 0,B: 1,C: 2}

// ---------------------------------------------------------------------------------------------------------------------

// merges and sorts two sorted arrays together
function mergeSortedArray(a, b) {
  let index = 0;

  while (b.length > 0 && a[index]) {
    if (a[index] > b[0]) {
      a.splice(index, 0, b.shift());
    }
    index++;
  }
  return [...a, ...b];
}

const arr1 = [1, 4, 6, 9];
const arr2 = [2, 5, 11]; //

const arr3 = mergeSortedArray(arr1, arr2);

console.log(arr3);

// ---------------------------------------------------------------------------------------------------------------------

// get 2-D array of numbers and their frequencies in the array

const ar = [1, 2, 4, 1, 4, 6, 8, 2, 2, 5, 7];
ar.sort((a, b) => a - b);

const twoD = [];

let count = 1;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] === ar[i + 1]) {
    count++;
  } else {
    twoD.push([ar[i], count]);
    count = 1;
  }
}

console.log(twoD);

// ---------------------------------------------------------------------------------------------------------------------

// Get sum of all digits present in the string

const str = "a24kl3lk4l2klhug2j2mlm2ni3i6";

function sum(s) {
  let sum = 0;
  [...s].forEach((x) => {
    if (!isNaN(x)) {
      sum += parseInt(x);
    }
  });
  return sum;
}

console.log(sum(str));

// ---------------------------------------------------------------------------------------------------------------------
