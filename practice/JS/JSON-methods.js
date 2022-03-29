// JSON.stringify() replacer function

function replacer(key, value) {
  console.log("key: " + key + " ____ value: " + value);
  // Filtering out properties
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {
  foundation: "Mozilla",
  model: "box",
  week: 45,
  transport: "car",
  month: 7,
};
console.log(JSON.stringify(foo, replacer));
// '{"week":45,"month":7}'

// ----------------------------------------------------------------------------------------------------------------------------------------------

// JSON.stringify() replacer array

console.log(JSON.stringify(foo, ["model", "transport"]));
// '{"week":45,"month":7}', only keep "week" and "month" properties

// ----------------------------------------------------------------------------------------------------------------------------------------------

// JSON.stringify() space parameter

console.log(JSON.stringify({ uno: 1, dos: 2 }, null, "\t"));
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
