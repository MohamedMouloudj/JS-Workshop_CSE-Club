"use strict";

const thenable = {
  then(resolve, reject) {
    reject("thenable rejected!");
    resolve("thenable resolved!");
  },
};

Promise.resolve(thenable)
  .then((message) => `${message}!`)
  .then((message) => console.log("Fulfilled: " + message))
  .catch((error) =>
    console.log(typeof error === "object" ? JSON.stringify(error) : error),
  )

Promise.reject(thenable)
  .then((message) => `${message}!`)
  .catch((error) =>
    console.log(typeof error === "object" ? JSON.stringify(error) : error),
  );

//? Promise states: Pending, Fulfilled, Rejected

const tasks = [
  Promise.resolve("resolve 1"),
  new Promise((resolve) => setTimeout(() => resolve("resolve 2"), 0)),
];

Promise.all(tasks).then((results) => {
  console.log(results.join(" | ")); // resolve 1 | resolve 2
});

//? Some methods
/*
Promise.all([p1, p2])         // waits for all, fails if any fails
Promise.allSettled([p1, p2])  // waits for all, never fails, gives status of each
Promise.race([p1, p2])        // resolves/rejects with first to settle
Promise.any([p1, p2])         // resolves with first fulfilled, ignores rejections, fails only if ALL reject
*/
