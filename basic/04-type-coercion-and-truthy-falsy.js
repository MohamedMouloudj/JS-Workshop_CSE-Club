"use strict";

console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log(0 == false); // true
console.log(0 === false); // false

const values = [false, 0, "", null, undefined, NaN, "ready", 1];
console.log(values.map(Boolean)); // false false false false false false true true
