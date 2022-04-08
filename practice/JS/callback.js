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

const normalDelay = (func, seconds = 2) => {
  let timmy = setTimeout(func, seconds * 1000);
  return timmy;
};

const promisifiedDelay = (seconds = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const wait = (ev) => {
  //callback version
  let delay1 = 3;

  normalDelay(() => {
    console.log("After Delay: ", delay1);
    let delay2 = 2;
    normalDelay(() => {
      console.log("After Delay: ", delay2);
      let delay3 = 5;
      normalDelay(() => {
        console.log("After Delay: ", delay3);
        let delay4 = 1;
      }, delay3);
    }, delay2);
  }, delay1);

  //change the button colour after delay
  // promisifiedDelay(delay1)
  //   .then(() => 2) //return value gets passed to the next then()
  //   .then((d) => {
  //     console.log("After Delay 1: ", d);
  //     return promisifiedDelay(d);
  //   })
  //   .then(() => 3)
  //   .then((d) => {
  //     console.log("After Delay 2: ", d);
  //     return promisifiedDelay(d);
  //   })
  //   .then(() => 1)
  //   .catch((err) => console.error);
};

wait();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
