"use strict";

const moduleName = "scope";

function createCounter() {
  let count = 0;
  return () => {
    count += 1;
    return `${moduleName}: ${count}`;
  };
}

const nextCount = createCounter();
console.log(nextCount()); // scope: 1
console.log(nextCount()); // scope: 2
