// const flattenObj = (obj, parent) => {
//   const finalObj = {};
//   const magic = (obj, parent, finalObj) => {
//     for (let key in obj) {
//       if (
//         typeof obj[key] === "object" &&
//         !Array.isArray(obj[key]) &&
//         Object.keys(obj[key]).length !== 0
//       ) {
//         magic(obj[key], parent + "_" + key, finalObj);
//       } else {
//         finalObj[parent + "_" + key] = obj[key];
//       }
//     }
//   };
//   magic(obj, parent, finalObj);
//   return finalObj;
// };

// console.log(
//   flattenObj({ a: { b: { c: {}, d: [] }, x: [] }, D: {}, e: [] }, ""),
//   flattenObj({ a: { b: { c: { d: { e: {}, f: {} } } }, h: { i: {} } } }, "_"),
// );

// const copiedFlattenObj = (obj, parent, res = {}) => {
//   for (const key of Object.keys(obj)) {
//     const propName = parent ? parent + "." + key : key;
//     if (
//       typeof obj[key] === "object" &&
//       !Array.isArray(obj[key]) &&
//       Object.keys(obj[key]).length !== 0
//     ) {
//       copiedFlattenObj(obj[key], propName, res);
//     } else {
//       res[propName] = obj[key];
//     }
//   }
//   return res;
// };

// console.log(
//   copiedFlattenObj({ a: { b: { c: {}, d: [] }, x: [] }, D: {}, e: [] }),
//   copiedFlattenObj(
//     { a: { b: { c: { d: { e: {}, f: {} } } }, h: { i: {} } } },
//     "_",
//   ),
// );

// const flattenObjWDegree = (obj, degree, parent, res = {}) => {
//   if (degree === 0) {
//     res[parent] = obj;
//   } else {
//     for (const key in obj) {
//       const propName = parent ? parent + "." + key : key;
//       if (
//         typeof obj[key] === "object" &&
//         !Array.isArray(obj[key]) &&
//         Object.keys(obj[key]).length !== 0
//       ) {
//         flattenObjWDegree(obj[key], degree - 1, propName, res);
//       } else {
//         res[propName] = obj[key];
//       }
//     }
//   }
//   return res;
// };

// console.log(
//   flattenObjWDegree(
//     { a: { b: { c: {}, d: [] }, x: [] }, D: { y: { z: "a" } }, e: [] },
//     2,
//   ),
//   flattenObjWDegree(
//     { a: { b: { c: { d: { e: {}, f: {} } } }, h: { i: {} } } },
//     3,
//     "_",
//   ),
// );

// ------------------------------------------------------------------------------------------------------------------------

// // JavaScript inbuilt flat
// const arr = [1, 2, [3, 4, [5, [6, 7, { a: "b" }]]]];

// console.log(arr.flat(1)); // [1, 2, 3, 4, Array(2)]
// console.log(arr.flat(2)); // [1, 2, 3, 4, 5, Array(3)]
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, {…}]

// const sampl = [1, 2, 3, 4];
// const prod2 = (ele) => [[ele * 2]];
// console.log(sampl.map(prod2)); // [[1],[2],[3],[4]]
// console.log(sampl.flatMap(prod2)); // [1, 2, 3, 4]

// ------------------------------------------------------------------------------------------------------------------------

// // Infinity flat

// function flatten1(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten1(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(flatten1([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12]));

// ------------------------------------------------------------------------------------------------------------------------

// function flatten2(arr) {
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       return acc.concat(flatten2(val));
//     } else {
//       return acc.concat(val);
//     }
//   }, []);
// }
// console.log(flatten2([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12]));

// ------------------------------------------------------------------------------------------------------------------------

// function flatten3(arr, degree) {
//   let result = [];
//   if (degree === 0) {
//     return arr;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flatten3(arr[i], degree - 1));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(flatten3([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12], 0));

// ------------------------------------------------------------------------------------------------------------------------

// function flatten4(arr, degree) {
//   if (degree === 0) {
//     return arr;
//   }
//   return arr.reduce((acc, val) => {
//     if (Array.isArray(val)) {
//       return acc.concat(flatten4(val, degree - 1));
//     } else {
//       acc.push(val);
//       return acc;
//     }
//   }, []);
// }

// console.log(flatten4([1, 2, [3, 4, [5, [6, 7, [8, 9]], 10], 11], 12], 0));

// ------------------------------------------------------------------------------------------------------------------------

// Get no. of objects and arrays in a nested object with a given depth

// function countArraysAndObjects(obj, depth) {
//   let countObj = 0,
//     countArr = 0;
//   (function count(obj, depth) {
//     if (depth !== 0) {
//       for (let key in obj) {
//         if (Array.isArray(obj[key])) {
//           countArr++;
//         } else if (typeof obj[key] === "object") {
//           if (Object.keys(obj[key]).length !== 0) {
//             count(obj[key], depth - 1);
//           }
//           countObj++;
//         }
//       }
//     }
//   })(obj, depth);
//   return { countObj, countArr };
// }

// console.log(
//   countArraysAndObjects(
//     {
//       a: {
//         b: { c: { v: { m: {}, n: [], o: { l: { k: {} } } }, i: {} }, d: [] },
//         x: [],
//       },
//       D: {},
//       e: [],
//       f: {},
//     },
//     3,
//   ),
// );

// ------------------------------------------------------------------------------------------------------------------------

// how to Recursively count keys in a nested object?

// const recurseKeys = (obj) =>
//   Object.keys(obj).reduce((acc, curr) => {
//     if (typeof obj[curr] === "object") return ++acc + recurseKeys(obj[curr]);
//     else return ++acc;
//   }, 0);

// console.log(recurseKeys({ a: { b: { c: {}, d: [] } }, D: {}, e: [1, 2, 3] }));

// ------------------------------------------------------------------------------------------------------------------------
// Count keys in nested object level by level

// const properties = {
//   prop1: "",
//   prop2: "",
//   prop3: "",
//   prop4: {
//     subProp1: "",
//     subProp2: "",
//     subProp3: {
//       subSubprop1: "",
//     },
//   },
//   prop5: {},
// };

// function countKeysPerLevel(store, level, obj) {
//   const keys = Object.keys(obj);
//   const count = keys.length;

//   store[level] = (store[level] || 0) + count;

//   for (let i = 0; i < count; i++) {
//     const childObj = obj[keys[i]];
//     if (typeof childObj === "object") {
//       countKeysPerLevel(store, level + 1, childObj);
//     }
//   }
// }

// const result = {};
// countKeysPerLevel(result, 0, properties);
// console.log(result);
