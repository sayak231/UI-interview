Array.prototype.mySlice = function (start, end) {
  let newArray = [];
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = this.length;
  }
  for (let i = start; i < end; i++) {
    newArray.push(this[i]);
  }
  return newArray;
};

Array.prototype.customSlice = function (begin, end) {
  var len = this.length;
  var size;
  var start = begin || 0;

  start = start >= 0 ? start : Math.max(0, len + start);
  end = end || len;

  var up_to = typeof end == "number" ? Math.min(end, len) : len;
  if (end < 0) up_to = len + end;

  // actual expected size of the slice
  size = up_to - start;

  // if size is negative it should return an empty array
  if (size <= 0) size = 0;

  var typed_array_constructor = this.constructor;
  var cloned = new typed_array_constructor(size);

  for (var i = 0; i < size; i++) {
    cloned[i] = this[start + i];
  }

  return cloned;
};

const animals2 = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals2.customSlice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals2.customSlice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals2.customSlice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals2.customSlice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals2.customSlice(2, -1));
// expected output: Array ["camel", "duck"]

const slicedAnimals2 = animals2.customSlice();

console.log(slicedAnimals2);
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals2 === slicedAnimals2);
// false

// -------------------------------------------------------------------------------------------------------------------------------

if (!Array.prototype.customSplice) {
  Array.prototype.customSplice = function (startIndex, numItems) {
    let array = this;
    let endIndex = startIndex + numItems;
    console.log("startIndex --->", startIndex);
    console.log("numItems --->", numItems);
    console.log("endIndex --->", endIndex);

    let itemsBeforeSplice = []; // array till startIndex
    let splicedItems = []; // removed items array
    let itemsAfterSplice = []; // array from endIndex

    for (let i = 0; i < array.length; i++) {
      if (i < startIndex) {
        itemsBeforeSplice.push(array[i]);
      }
      if (i >= startIndex && i < endIndex) {
        splicedItems.push(array[i]);
      }
      if (i >= endIndex) {
        itemsAfterSplice.push(array[i]);
      }
    }

    console.log("itemsBeforeSplice --->", itemsBeforeSplice);
    console.log("splicedItems --->", splicedItems);
    console.log("itemsAfterSplice --->", itemsAfterSplice);

    // Insert all arguments/parameters after numItems
    for (let i = 2; i < arguments.length; i++) {
      itemsBeforeSplice.push(arguments[i]);
    }
    console.log("itemsBeforeSplice 2 --->", itemsBeforeSplice);

    // Combine before/after arrays
    var remainingItems = itemsBeforeSplice.concat(itemsAfterSplice);
    console.log("remainingItems --->", remainingItems);

    // Rewrite array
    for (
      let i = 0, len = Math.max(array.length, remainingItems.length);
      i < len;
      i++
    ) {
      if (remainingItems.length > i) {
        array[i] = remainingItems[i];
      } else {
        array.pop();
      }
    }
    return splicedItems;
  };
}

const months = ["Jan", "March", "April", "June"];
const res = months.splice(1, 1, "Feb");
console.log("months --->", months);
console.log("res --->", res);

const months2 = ["Jan", "March", "April", "June"];
const res2 = months2.customSplice(1, 1, "Feb");
console.log("months2 --->", months2);
console.log("res2 --->", res2);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//debounce polyfill

const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    const boundFunc = func.bind(this, ...args);
    clearTimeout(timerId);
    timerId = setTimeout(boundFunc, delay);
  };
};

// debounce polyfill without setTimeout

const debounce2 = function (func, delay) {
  let timer;
  return function () {
    //anonymous function
    const context = this;
    const args = arguments;

    cancelIdleCallback(timer);
    let startTime = Date.now();
    function check() {
      if (Date.now() >= startTime + delay) func.apply(context, args);
      else timer = requestIdleCallback(check);
    }
    timer = requestIdleCallback(check);
  };
};

const fun = (x) => console.log("fun" + x);

const debouncedSearch = debounce(fun, 300);

document
  .getElementById("inpt")
  .addEventListener("input", () => debouncedSearch("x"));

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// throttle polyfill functions

function throttle(callback, limit) {
  var wait = false; // Initially, we're not waiting
  return function () {
    // We return a throttled function
    if (!wait) {
      // If we're not waiting
      callback.call(); // Execute users function
      wait = true; // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        wait = false; // And allow future invocations
      }, limit);
    }
  };
}

function throttle2(callback, limit) {
  var wait = false; // Initially, we're not waiting
  return function () {
    // We return a throttled function
    const context = this;
    const args = arguments;
    if (!wait) {
      // If we're not waiting
      callback.apply(context, args); // Execute users function
      wait = true; // Prevent future invocations
      let startTime = Date.now();
      function check() {
        if (Date.now() >= startTime + limit) wait = false;
        else requestIdleCallback(check);
      }
      requestIdleCallback(check);
    }
  };
}

const fun2 = () => console.log("fun");

const throttledSearch = throttle(fun2, 3000);

document.getElementById("idf").addEventListener("click", throttledSearch);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// Retry API call polyfill function

function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function fetchRetry(url, delay, tries, fetchOptions = {}) {
  function onError(err) {
    triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }
    return wait(delay).then(() =>
      fetchRetry(url, delay, triesLeft, fetchOptions),
    );
  }
  return fetch(url, fetchOptions).catch(onError);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// sleep function
function sleep(k, ms) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("sleep timeout");
      res(k);
    }, ms);
  });
}

function sleep(delay) {
  var startTime = Date.now();

  // loop until the current time exceeds the delayed time.
  while (Date.now() > startTime + delay);
}
console.log(sleep(5, 5000));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// setTimeout polyfill

function mySetTimeout(callback, delay) {
  if (typeof callback != "function")
    throw new Error("callback should be a function");
  if (typeof delay != "number" || delay < 0)
    throw new Error("delay should be a positive number");
  let startTime = Date.now();
  function check() {
    if (Date.now() >= startTime + delay) callback();
    else requestIdleCallback(check);
  }
  requestIdleCallback(check);
}

mySetTimeout(() => console.log("Hello"), 50000000000000000);

// setInterval polyfill

function createSetIntervalPolyfill() {
  // closure
  var intervalID = 0;
  var intervalMap = {};

  function setIntervalPolyfill(callbackFn, delay = 0, ...args) {
    if (typeof callbackFn !== "function") {
      throw new TypeError("'callback' should be a function");
    }

    // Unique
    var id = intervalID++;

    function repeat() {
      intervalMap[id] = setTimeout(() => {
        callbackFn(...args);
        // Terminating
        if (intervalMap[id]) {
          repeat();
        }
      }, delay);
    }
    repeat();

    return id;
  }

  function clearIntervalPolyfill(intervalID) {
    clearTimeout(intervalMap[intervalID]);
    delete intervalMap[intervalID];
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } =
  createSetIntervalPolyfill();

let counter = 0;
let intervalID;

function greeting(name) {
  counter++;
  console.log("Hello", name);
  if (counter >= 3) {
    clearIntervalPolyfill(intervalID);
  }
}

intervalID = setIntervalPolyfill(greeting, 1000, "Sayak");

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

(function () {
  // List for mainataining callbacks corresponding to their id's
  let timers = {};

  // generates a new id for every mySetTimeout call
  function generateNewId() {
    let r = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    while (timers.hasOwnProperty(r)) {
      // check weather the id already exists
      r = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    return r;
  }

  function check() {
    let t = Date.now();
    // loop over all the timers
    for (let timerId in timers) {
      if (timers.hasOwnProperty(timerId) && t > timers[timerId].time) {
        // check if the current timer needs to be executed
        timers[timerId].callback();
        myClearTimeout(timerId);
      }
    }
    requestIdleCallback(check);
  }

  window.mySetTimeout = function (callback, delay) {
    if (typeof callback != "function")
      throw new Error("callback should be a function");
    if (typeof delay != "number" || delay < 0)
      throw new Error("delay should be a positive number");

    // generate a new id
    let newId = generateNewId();

    // add it to the list of timers
    timers[newId] = {
      callback: callback,
      time: Date.now() + delay, // add the time after which callback needs to be executed
    };

    // return the id to the consumer for referencing it for later use.
    return newId;
  };

  // cancels the callback execution for an id.
  window.myClearTimeout = function (id) {
    if (timers.hasOwnProperty(id)) delete timers[id]; // if id exists just delete the timer and in the next check this timer won't be there
  };

  // call the checking process so that callbacks get executed.
  requestIdleCallback(check);
})();

let id = mySetTimeout(() => console.log("Hello"), 5000);
myClearTimeout(id);
console.log(id, Date.now());

// The requestIdleCallback allows us to enqueue a callback in the message queue of the event loop.
// In this way, the callback does not get executed straight away.
// If an event like pressing a button would have come in-between,
// then it will be executed first because the event will be at higher priority in the message queue.

const haveFun = () => console.log("Hello");
requestIdleCallback(haveFun);
console.log("hehe");

// hehe
// Hello

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// JSON parse and stringify polyfill

function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ")")();
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));

function parseJSON(sJSON) {
  return eval(`(${sJSON})`);
}

let stringify = (function () {
  var toString = Object.prototype.toString;
  var isArray =
    Array.isArray ||
    function (a) {
      return toString.call(a) === "[object Array]";
    };
  var escMap = {
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
  };
  var escFunc = function (m) {
    return (
      escMap[m] || "\\u" + (m.charCodeAt(0) + 0x10000).toString(16).substr(1)
    );
  };
  var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
  return function stringify(value) {
    if (value == null) {
      return "null";
    } else if (typeof value === "number") {
      return isFinite(value) ? value.toString() : "null";
    } else if (typeof value === "boolean") {
      return value.toString();
    } else if (typeof value === "object") {
      if (typeof value.toJSON === "function") {
        return stringify(value.toJSON());
      } else if (isArray(value)) {
        var res = "[";
        for (var i = 0; i < value.length; i++)
          res += (i ? ", " : "") + stringify(value[i]);
        return res + "]";
      } else if (toString.call(value) === "[object Object]") {
        var tmp = [];
        for (var k in value) {
          if (value.hasOwnProperty(k))
            tmp.push(stringify(k) + ": " + stringify(value[k]));
        }
        return "{" + tmp.join(", ") + "}";
      }
    }
    return '"' + value.toString().replace(escRE, escFunc) + '"';
  };
})();

const obj = {
  a: 1,
  b: "Go",
};

console.log(stringify(obj));
console.log(parseJSON(stringify(obj)));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// find

Array.prototype.myFind = function (callback, thisArg) {
  if (!callback || typeof callback !== "function") throw TypeError();
  const context = thisArg || this;
  const size = context.length;
  for (let i = 0; i < size; i++) {
    try {
      if (!!callback.apply(context, [context[i], i, context])) {
        return context[i];
      }
    } catch (e) {
      return undefined;
    }
  }
  return undefined;
};

const findArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findArray.find((item) => item > 7));
console.log(findArray.myFind((item) => item > 7));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// findIndex

Array.prototype.myFindIndex = function (callback, thisArg) {
  if (!callback || typeof callback !== "function") throw TypeError();
  const context = thisArg || this;
  const size = context.length;
  for (let i = 0; i < size; i++) {
    try {
      if (!!callback.apply(context, [context[i], i, context])) {
        return i;
      }
    } catch (e) {
      return -1;
    }
  }
  return -1;
};

const findIndexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findArray.findIndex((item) => item > 7));
console.log(findArray.myFindIndex((item) => item > 7));

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// some

Array.prototype.mySome = function (fun /*, thisArg*/) {
  "use strict";

  if (this == null) {
    throw new TypeError("Array.prototype.some called on null or undefined");
  }

  if (typeof fun !== "function") {
    throw new TypeError();
  }

  var t = Object(this);
  var len = t.length >>> 0;

  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  for (var i = 0; i < len; i++) {
    if (i in t && fun.call(thisArg, t[i], i, t)) {
      return true;
    }
  }

  return false;
};

const someArray = [{ a: 1 }, { a: 2 }, { a: 3 }];
console.log(someArray.some((item) => item.a === 2)); // expected output: true
console.log(someArray.mySome((item) => item.a === 1)); // expected output: true

console.log(someArray.mySome((item) => item.a === 4)); // expected output: false
console.log(someArray.mySome((item) => item.a === 4)); // expected output: false

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// flatMap

Array.prototype.myFlatMap = function (callback, thisArg) {
  let self = thisArg || this;
  if (self === null) {
    throw new TypeError(
      "Array.prototype.flatMap " + "called on null or undefined",
    );
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let list = [];

  // 1. Let O be ? ToObject(this value).
  let o = Object(self);

  // 2. Let len be ? ToLength(? Get(O, "length")).
  let len = o.length >>> 0;

  for (let k = 0; k < len; ++k) {
    if (k in o) {
      let part_list = callback.call(self, o[k], k, o);
      list = list.concat(part_list);
    }
  }

  return list;
};

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
