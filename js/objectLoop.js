"use strict";
console.log("objLoop.js file was loaded");

const userObj = {
  firstName: "James",
  age: 45,
  town: "London",
  gender: "male",
  mark: [8, 7, 8],
};

console.log("userObj ===", userObj);

/*
for (key in object) {
  // code block to be executed
}
*/

for (let key in userObj) {
  // console.log('key ===', key);
  const value = userObj[key];
  // console.log('value ===', value);
  // console.log(`kai key ${key} tada value: ${value}`);
}

// age
let key1 = "age";
// console.log('userObj.age ===', userObj.age);
// console.log("userObj['age'] ===", userObj[key1]);

// gauti objekto keys

const allKeys = Object.keys(userObj);
console.log("allKeys ===", allKeys);

// gauti objekto values
const allValues = Object.values(userObj);
console.log("allValues ===", allValues);

// ir keys ir values
const allThings = Object.entries(userObj);
console.log("allThings ===", allThings);

allThings.forEach(([key, val]) => {
  console.log(`${key} => ${val}`);
  // setAttribute(key, val)
});
