// // Best example or callback hell --> promises chaining --> async/await

// // Example asynchronous function
// function asynchronousRequestWithoutPromise(args, callback) {
//   // Throw an error if no arguments are passed
//   if (!args) {
//     return callback(new Error("Whoa! Something went wrong."));
//   } else {
//     return setTimeout(
//       // Just adding in a random number so it seems like the contrived asynchronous function
//       // returned different data
//       () =>
//         callback(null, { body: args + " " + Math.floor(Math.random() * 10) }),
//       1000,
//     );
//   }
// }

// // Nested asynchronous requests
// (function callbackHell() {
//   asynchronousRequestWithoutPromise("First", function first(error, response) {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log(response.body);
//     asynchronousRequestWithoutPromise("Second", function second(error, response) {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log(response.body);
//       asynchronousRequestWithoutPromise(null, function third(error, response) {
//         if (error) {
//           console.log(error);
//           return;
//         }
//         console.log(response.body);
//       });
//     });
//   });
// })();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Promises
// function asynchronousRequestWithPromise(onSuccess, ...args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Handle resolve and reject in the asynchronous API
//       if (onSuccess) {
//         resolve({ body: args + " " + Math.floor(Math.random() * 10) });
//       } else {
//         reject(new Error("Whoa! Something went wrong."));
//       }
//     }, 1000);
//   });
// }

// asynchronousRequestWithPromise(true, "First")
//   .then((response) => {
//     console.log(response.body);
//   })
//   .then(() => {
//     return asynchronousRequestWithPromise(true, "Second");
//   })
//   .then((response) => {
//     console.log(response.body);
//   })
//   .then(() => {
//     return asynchronousRequestWithPromise(false, "Third");
//   })
//   .then((response) => {
//     console.log(response.body);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //async await version
// async function callbackHell() {
//   try {
//     let response1 = await asynchronousRequestWithPromise(true, "First");
//     console.log(response1.body);
//     let response2 = await asynchronousRequestWithPromise(true, "Second");
//     console.log(response2.body);
//     let response3 = await asynchronousRequestWithPromise(false, "Third");
//     console.log(response3.body);
//   } catch (error) {
//     console.log(error);
//   }
// }
// callbackHell();

// --------------------------------------------------------------------------------------------------------------------------------------------------------

// Callback Hell

// function addition(val, callback) {
//   return callback(val + 5, false);
// }

// function subtraction(val, callback) {
//   return callback(val - 2, false);
// }

// function multiplication(val, callback) {
//   return callback(val * 2, false);
// }

// function division(val, callback) {
//   return callback(val / 2, false);
// }

// addition(5, function (addRes, err) {
//   if (err) {
//     console.log(err);
//   } else {
//     subtraction(addRes, function (subRes, err) {
//       if (err) {
//         console.log(err);
//       } else {
//         multiplication(subRes, function (mulRes, err) {
//           if (err) {
//             console.log(err);
//           } else {
//             division(mulRes, function (divRes, err) {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(divRes);
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// // setTimeout(() => {
// //   addition(5, function (addRes, err) {
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       console.log("After Addition: ", addRes);
// //       setTimeout(() => {
// //         subtraction(addRes, function (subRes, err) {
// //           if (err) {
// //             console.log(err);
// //           } else {
// //             console.log("After Subtraction: ", subRes);
// //             setTimeout(() => {
// //               multiplication(subRes, function (mulRes, err) {
// //                 if (err) {
// //                   console.log(err);
// //                 } else {
// //                   console.log("After Multiplication: ", mulRes);
// //                   setTimeout(() => {
// //                     division(mulRes, function (divRes, err) {
// //                       if (err) {
// //                         console.log(err);
// //                       } else {
// //                         console.log("After Division: ", divRes);
// //                       }
// //                     });
// //                   }, 4000);
// //                 }
// //               });
// //             }, 3000);
// //           }
// //         });
// //       }, 1000);
// //     }
// //   });
// // }, 2000);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Avoiding the above callback hell using Promises

// function addition(val) {
//   return val + 5;
// }

// function subtraction(val) {
//   return val - 2;
// }

// function multiplication(val) {
//   return val * 2;
// }

// function division(val) {
//   return val / 2;
// }

// const calcPromise = new Promise((resolve, reject) => {
//   resolve(5);
// });
// calcPromise
//   .then(addition)
//   .then((addRes) => {
//     console.log("After Addition: ", addRes);
//     return addRes;
//   })
//   .then(subtraction)
//   .then((subRes) => {
//     console.log("After Subtraction: ", subRes);
//     return subRes;
//   })
//   .then(multiplication)
//   .then((mulRes) => {
//     console.log("After Multiplication: ", mulRes);
//     return mulRes;
//   })
//   .then(division)
//   .then((divRes) => {
//     console.log("After Division: ", divRes);
//     return divRes;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // const calcPromise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(5);
// //   }, 2000);
// // });

// // calcPromise
// //   .then(addition)
// //   .then((addRes) => {
// //     console.log("After Addition: ", addRes);
// //     return addRes;
// //   })
// //   .then((addRes) => {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(addRes);
// //       }, 1000);
// //     });
// //   })
// //   .then(subtraction)
// //   .then((subRes) => {
// //     console.log("After Subtraction: ", subRes);
// //     return subRes;
// //   })
// //   .then((subRes) => {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(subRes);
// //       }, 3000);
// //     });
// //   })
// //   .then(multiplication)
// //   .then((mulRes) => {
// //     console.log("After Multiplication: ", mulRes);
// //     return mulRes;
// //   })
// //   .then((mulRes) => {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(mulRes);
// //       }, 4000);
// //     });
// //   })
// //   .then(division)
// //   .then((divRes) => {
// //     console.log("After Division: ", divRes);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const normalDelay = (func, seconds = 2) => {
//   let timmy = setTimeout(func, seconds * 1000);
//   return timmy;
// };

// const promisifiedDelay = (seconds = 2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const wait = (ev) => {
//   //callback version
//   let delay1 = 3;

//   normalDelay(() => {
//     console.log("After Delay 1: ", delay1);
//     let delay2 = 2;
//     normalDelay(() => {
//       console.log("After Delay 2: ", delay2);
//       let delay3 = 5;
//       normalDelay(() => {
//         console.log("After Delay 3: ", delay3);
//       }, delay3);
//     }, delay2);
//   }, delay1);

//   promisifiedDelay(delay1)
//     .then(() => 2) //return value gets passed to the next then()
//     .then((d) => {
//       console.log("After Delay 1: ", d);
//       return promisifiedDelay(d);
//     })
//     .then(() => 3)
//     .then((d) => {
//       console.log("After Delay 2: ", d);
//       return promisifiedDelay(d);
//     })
//     .then(() => 1)
//     .catch((err) => console.error);
// };

// // async/await version
// async function wait() {
//   let delay1 = 3;

//   let d1 = await promisifiedDelay(delay1);
//   console.log("After Delay 1: ", d1);
//   let d2 = await promisifiedDelay(5);
//   console.log("After Delay 2: ", d2);
//   let d3 = await promisifiedDelay(1);
//   console.log("After Delay 3: ", d3);
// }
// wait();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// (function pyramidOfDoom() {
//   setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//       console.log(2);
//       setTimeout(() => {
//         console.log(3);
//       }, 500);
//     }, 2000);
//   }, 1000);
// })();

/// ------------------------------------------------------------------------------------------
