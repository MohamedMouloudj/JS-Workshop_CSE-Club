"use strict";

console.log(declaredWithVar); // undefined
var declaredWithVar = "initialized";

sayHello(); // Hello
function sayHello() {
  console.log("Hello");
}

try {
  console.log(declaredWithLet);
} catch (error) {
  console.log(error.name); // ReferenceError
}
let declaredWithLet = "ready";
