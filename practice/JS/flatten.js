const flattenObj = (obj, parent) => {
  const finalObj = {};
  const magic = (obj, parent, finalObj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        magic(obj[key], parent + "_" + key, finalObj);
      } else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  };
  magic(obj, parent, finalObj);
  return finalObj;
};

// JavaScript inbuilt flat
const arr = [1, 2, [3, 4, [5, [6, 7, { a: "b" }]]]];

console.log(arr.flat(1)); // [1, 2, 3, 4, Array(2)]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, Array(3)]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, {…}]

const sampl = [1, 2, 3, 4];
const prod2 = (ele) => [[ele * 2]];
console.log(sampl.map(prod2)); // [[1],[2],[3],[4]]
console.log(sampl.flatMap(prod2)); // [1, 2, 3, 4]

// Infinity flat

function flatten1(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten1([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12]));

function flatten2(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten2(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}
console.log(flatten2([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12]));

function flatten3(arr, degree) {
  let result = [];
  if (degree === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten3(arr[i], degree - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flatten3([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12], 0));

function flatten4(arr, degree) {
  if (degree === 0) {
    return arr;
  }
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten4(val, degree - 1));
    } else {
      acc.push(val);
      return acc;
    }
  }, []);
}

console.log(flatten4([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12], 0));
