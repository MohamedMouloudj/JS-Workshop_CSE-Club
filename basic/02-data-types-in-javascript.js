"use strict";

const values = [
  "text",
  42,
  42n,
  true,
  undefined,
  null,
  Symbol("id"),
  { language: "JavaScript" },
];

for (const value of values) {
  console.log(typeof value);
}
console.log(Array.isArray([1, 2, 3])); // true
