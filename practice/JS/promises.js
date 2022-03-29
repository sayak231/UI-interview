const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("I'm a Promise!");
  }, 5000);
});

promise1.then((value) => console.log(value));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise chaining
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });

// The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block so the output from the last then is used.

const promise2 = new Promise((res) => res(2));
promise
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .finally((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    console.log(v);
  });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// all
// Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))

// race
var promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise3, promise4]).then(function (value) {
  console.log(value); // "two" // Both promises will resolve, but promise4 is faster
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Promise All PolyFill

let myPromiseAll = (promises) => {
  let responses = [];
  let errorResp = [];
  return new Promise((resolve, reject) => {
    /** Loop over promises array **/
    promises.forEach(async (singlePromise, i) => {
      try {
        /** wait for resolving 1 promise **/
        let res = await singlePromise;
        responses.push(res);
        if (i == promises.length - 1) {
          if (errorResp.length > 0) {
            reject(errorResp);
          } else {
            // resolve(responses)
            // To know our custom promise function returning result
            resolve("custom promise ::" + responses);
          }
        }
      } catch (err) {
        errorResp.push(err);
        reject(err);
      }
    });
  });
};

let p1 = Promise.resolve("Promise1 resolved");

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved after 2 seconds");
  }, 1000);
});

myPromiseAll([p1, p2]).then(
  (res) => {
    console.log("Response => ", res);
    document.write("<b>Response => </b>" + res);
  },
  (err) => {
    console.log("error =>", err);
  },
);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// use of await other than Promises

const thenable = {
  then: function (resolve, reject) {
    setTimeout(() => resolve(5), 100);
  },
};

const value = async () => {
  const val = await thenable;
  console.log(val);
  return val;
};

// from mdn docs
async function f2() {
  const thenable = {
    then: function (resolve, _reject) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // resolved!
}

f2();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

const promisify = (item, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
      console.log(item);
    }, delay);
  });

const a = () => promisify("a", 1000);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

a();
b();
c();

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `parallel is done: ${output1} ${output2} ${output3}`;
}
parallel().then(console.log);

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}
race().then(console.log);

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}
sequence().then(console.log);

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Promisify setTimeout and setInterval

const delay = (time) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

delay(2000).then(() =>
  console.log("Hello i will get logged after 2 second(s)"),
);

// -

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const asyncInterval = async (callback, ms, triesLeft = 5) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(async () => {
      if (await callback()) {
        resolve();
        clearInterval(interval);
      } else if (triesLeft <= 1) {
        reject();
        clearInterval(interval);
      }
      triesLeft--;
    }, ms);
  });
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// Promise.all, Promise.allSettled, Promise.any,  Promise.race,

const createPromise = (resolvePromise, message, delay = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolvePromise ? resolve : reject, delay, message);
  });
};

const pErr = createPromise(false, "Error", 2000);
const pFast = createPromise(false, "Success", 2000);
const pSlow = createPromise(true, "Success", 5000);

Promise.all([pErr, pFast, pSlow])
  .then((result) => console.log("all --> ", result))
  .catch((err) => console.log("err --> ", err));

Promise.allSettled([pErr, pFast, pSlow])
  .then((result) => console.log("allSettled --> ", result))
  .catch((err) => console.log("err --> ", err));

Promise.race([pErr, pFast, pSlow])
  .then((result) => console.log("race --> ", result))
  .catch((err) => console.log("err --> ", err));

Promise.any([pErr, pFast, pSlow])
  .then((result) => console.log("any --> ", result))
  .catch((err) => console.log("err --> ", err));
