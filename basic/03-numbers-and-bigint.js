"use strict";

const price = 19.99;
const quantity = 3;
const total = price * quantity;
const exactLargeInteger = 9007199254740993n;

console.log(total.toFixed(2)); // 59.97
console.log(Number.isInteger(10)); // true
console.log(exactLargeInteger + 7n); // 9007199254741000n
console.log(Number.isNaN(Number("not a number"))); // true
