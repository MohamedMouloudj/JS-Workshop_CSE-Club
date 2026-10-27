"use strict";

//? Conditional statements

const temperature = 24;
if (temperature >= 30) {
  console.log("hot");
} else if (temperature >= 20) {
  console.log("comfortable"); // comfortable
} else {
  console.log("cool");
}

const role = "student";
switch (role) {
  case "student":
    console.log("learn");
    break;
  default:
    console.log("participate");
}

//? Loops

for (let index = 1; index <= 3; index += 1) {
  console.log(`step ${index}`);
}

for (const value of [1, 2, 3]) {
  console.log(`value ${value}`);
}

for (const key in { a: 1, b: 2, c: 3 }) {
  console.log(`key ${key}`);
}
