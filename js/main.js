"use strict";
console.log("main.js file was loaded");

const h1El = document.getElementById("h1");

function skaiciuSuma(sk1, sk2, sk3, sk4) {
  const sum = (sk1 + sk2 + sk3 + sk4) / 4;
  console.log("sum ===", sum);
  return sum;
}
skaiciuSuma(4, 5, 8, 7);

function masyvoAvg(arr) {
  let skaiciai = 0;
  arr.forEach((obj) => {
    skaiciai += obj;
  });
  const arrAvg = skaiciai / arr.length;
  return arrAvg;
}
const arrSuma = masyvoAvg([2, 5, 9, 3]);
console.log("arrSuma ===", arrSuma);

function makeEl(tagName, className, text) {
  const newEl = document.createElement(tagName);
  newEl.className = className;
  newEl.textContent = text;
  return newEl;
}
const h2El = makeEl("h2", "bg-primary", "I am text");
h1El.after(h2El);

const h3El = makeEl("h3", "", arrSuma);
document.body.append(h3El);
