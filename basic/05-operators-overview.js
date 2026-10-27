"use strict";

const a = 8;
const b = 3;

console.log(a + b, a - b, a * b, a / b); // 11 5 24 2.666...
console.log(a % b, a ** b); // 2 512

console.log(a > b && b > 0); // true
console.log(a === 8 ? "matched" : "not matched"); // matched
console.log(null ?? "fallback"); // fallback

console.log(5 & 3); // 1
console.log(5 | 3); // 7
console.log(5 ^ 3); // 6

console.log(5 << 1); // 10
console.log(5 >> 1); // 2
console.log(-5 >> 1); // -3
console.log(-5 >>> 1); // 2147483645
