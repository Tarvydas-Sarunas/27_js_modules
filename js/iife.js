"use strict";
console.log("iife.js file was loaded");
(async () => {
  // globalus kint
  const num1 = 78;

  const flow = function () {
    const num2 = 82;
  };
  flow();

  // iife - imediatly invoked function expression
  // (() => {})()

  console.log("hi from iife");

  const num3 = 82;
  console.log("num3 ===", num3);
})();
