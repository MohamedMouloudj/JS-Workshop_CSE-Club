"use strict";

const createUser = (name) => ({ name });
const user = createUser("Ada");
console.log(user.name); // Ada

try {
  undeclaredValue = 1;
  console.log(undeclaredValue);
} catch (error) {
  console.log(error.name); // ReferenceError
}
