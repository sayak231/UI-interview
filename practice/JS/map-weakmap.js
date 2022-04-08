// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// contacts.has("Jessie"); // true
// contacts.get("Hilary"); // undefined
// contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true
// console.log(contacts.size); // 1

// -----------------------------------------------------------------------------------------------------------------------------------------------

// const map = new Map();
// console.log(typeof map); // object
// console.log(map instanceof Map); // true
// console.log(map); // Map(0) {size: 0}

// -----------------------------------------------------------------------------------------------------------------------------------------------

// let john = { name: "John Doe" },
//   lily = { name: "Lily Bush" },
//   peter = { name: "Peter Drucker" };

// let userRoles = new Map([
//   [john, "admin"],
//   [lily, "editor"],
//   [peter, "subscriber"],
// ]);

// console.log(userRoles.get(john)); // admin

// let foo = { name: "Foo" };
// console.log(userRoles.get(foo)); //undefined

// for (const user of userRoles) {
//   console.log(JSON.stringify(user));
// }
// // [{"name":"John Doe"},"admin"]
// // [{"name":"Lily Bush"},"editor"]
// // [{"name":"Peter Drucker"},"subscriber"]

// console.log(userRoles.keys()); // MapIterator {{"name":"John Doe"}, {"name":"Lily Bush"}, {"name":"Peter Drucker"}}

// console.log(userRoles.values()); // MapIterator {'admin', 'editor', 'subscriber'}

// console.log(userRoles.entries()); // MapIterator {[{"name":"John Doe"}, "admin"], [{"name":"Lily Bush"}, "editor"], [{"name":"Peter Drucker"}, "subscriber"]}

// console.log(Object.entries({ x: 1, y: 2, z: 3 })); // [["x", 1], ["y", 2], ["z", 3]]

// userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));
// // John Doe: admin
// // Lily Bush: editor
// // Peter Drucker: subscriber

// let roles = [...userRoles.values()];
// console.log(roles); // ['admin', 'editor', 'subscriber']

// john.name = "John Smith";
// console.log(userRoles.keys()); // MapIterator {{"name":"John Smith"}, {"name":"Lily Bush"}, {"name":"Peter Drucker"}}

// -----------------------------------------------------------------------------------------------------------------------------------------------

// const wm1 = new WeakMap(),
//   wm2 = new WeakMap(),
//   wm3 = new WeakMap();
// const o1 = {},
//   o2 = function () {},
//   o3 = window;

// wm1.set(o1, 37);
// wm1.set(o2, "azerty");
// wm2.set(o1, o2); // a value can be anything, including an object or a function
// wm2.set(o3, undefined);
// wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

// wm1.get(o2); // "azerty"
// wm2.get(o2); // undefined, because there is no key for o2 on wm2
// wm2.get(o3); // undefined, because that is the set value

// wm1.has(o2); // true
// wm2.has(o2); // false
// wm2.has(o3); // true (even if the value itself is 'undefined')

// wm3.set(o1, 37);
// wm3.get(o1); // 37

// wm1.has(o1); // true
// wm1.delete(o1);
// wm1.has(o1); // false

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Implementing a WeakMap-like class with a .clear() method
// class ClearableWeakMap {
//   constructor(init) {
//     this._wm = new WeakMap(init);
//   }
//   clear() {
//     this._wm = new WeakMap();
//   }
//   delete(k) {
//     return this._wm.delete(k);
//   }
//   get(k) {
//     return this._wm.get(k);
//   }
//   has(k) {
//     return this._wm.has(k);
//   }
//   set(k, v) {
//     this._wm.set(k, v);
//     return this;
//   }
// }

// -----------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------------------------------------------------------
