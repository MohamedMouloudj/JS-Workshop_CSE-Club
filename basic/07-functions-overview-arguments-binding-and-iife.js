"use strict";

function add(first, second = 0) {
  return first + second;
}

const multiply = (first, second) => first * second;
console.log(add(2, 3), multiply(4, 5)); // 5 20

function showArguments(...argumentsList) {
  return argumentsList.join(", ");
}
console.log(showArguments("a", "b")); // a, b

const person = {
  name: "Mohamed",
  greet() {
    return `Hello, ${this.name}`;
  },
  printThis() {
    console.log("person's this: ", this);
  },
};
console.log(person.greet()); // Hello, Mohamed
console.log(person["greet"]()); // Hello, Mohamed

person.printThis();

const newObject = { name: "Karim" };
console.log(person.greet.call(newObject)); // Hello, Karim

const lostThisObject = person.greet;
console.log(lostThisObject()); // Hello, undefined
const boundGreeting = person.greet.bind(person);
console.log(boundGreeting()); // Hello, Mohamed

const iifeResult = (() => "initialized")();
console.log(iifeResult); // initialized
