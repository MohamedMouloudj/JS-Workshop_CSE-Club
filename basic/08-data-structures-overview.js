"use strict";

const list = ["HTML", "CSS", "JavaScript"];
const learner = { name: "Sam", level: "beginner" };
const uniqueNumbers = new Set([1, 2, 2, 3]);
const courseCodes = new Map([
  [{ name: "JS101" }, "Basics"],
  ["JS201", "Advanced"],
  [10, "Expert"],
]);

console.log(list[2]); // JavaScript
console.log(learner.name); // Sam
console.log([...uniqueNumbers]); // [1, 2, 3]
console.log(courseCodes);
console.log(courseCodes.get("JS201")); // Advanced
