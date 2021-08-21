let flatten = (a) => (Array.isArray(a) ? [].concat(...a.map(flatten)) : a);
console.log(
  flatten([
    1,
    [0, [3, [[[4]], 5]]],
    6,
    7,
    [8, 9, [{ i: "p", j: { l: { k: "io" } } }]],
  ])
);

var flattenArray = function (data) {
  return data.reduce(function iter(r, a) {
    if (a === null) {
      return r;
    }
    if (Array.isArray(a)) {
      return a.reduce(iter, r);
    }
    if (typeof a === "object") {
      return Object.keys(a)
        .map((k) => a[k])
        .reduce(iter, r);
    }
    return r.concat(a);
  }, []);
};
console.log(
  flattenArray([
    1,
    [0, [3, [[[4]], 5]]],
    6,
    7,
    [8, 9, [{ i: "p", j: { l: { k: "io" } } }]],
  ])
);

var findWords = function (words) {
  let obj = {};
  let top = "qwertyuiop";
  let mid = "asdfghjkl";
  let bottom = "zxcvbnm";

  for (let i = 0; i < top.length; i++) {
    obj[top[i]] = 1;
  }

  for (let i = 0; i < mid.length; i++) {
    obj[mid[i]] = 2;
  }

  for (let i = 0; i < bottom.length; i++) {
    obj[bottom[i]] = 3;
  }
  let arr = [];
  for (let j = 0; j < words.length; j++) {
    let word = words[j].toLowerCase();
    let charac = word[0];
    let k = obj[charac];
    let flag = false;
    for (let i = 1; i < word.length; i++) {
      console.log(word[0]);
      if (obj[word[i]] !== k) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      arr.push(words[j]);
    }
  }
  return arr;
};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace", "lkjhg"]));
