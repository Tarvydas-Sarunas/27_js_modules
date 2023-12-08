"use strict";
console.log("objectLoop.js file was loaded");

const userObj = {
  firstName: "James",
  age: 45,
  town: "London",
  gender: "male",
  mark: [3, 8, 7],
};

console.log("user ===", userObj);

// for (key in object) {

// }

for (let key in userObj) {
  console.log("key ===", key);
  const value = userObj[key];
  console.log(`kay key ${key} tada value: ${value}`);
}
// age
let key1 = "age";
console.log("userObj.age ===", userObj.age);
console.log("userObj.age ===", userObj["age"]);
console.log("userObj.age ===", userObj[key1]);

// gauti objekto keys i viena masyva
const allKeys = Object.keys(userObj);
console.log("allKeys ===", allKeys);

// gauti objekto values i viena masyva
const allValues = Object.values(userObj);
console.log("allValues ===", allValues);

// gauti ir keys ir values i viena masyva
const allThings = Object.entries(userObj);
console.log("allThings ===", allThings);

allThings.forEach(([key, val]) => {
  console.log(`${key} => ${val}`);
});
