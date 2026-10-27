"use strict";

console.log("synchronous"); // synchronous

setTimeout(() => {
  console.log("macrotask");
}, 0);

queueMicrotask(() => {
  console.log("microtask");
});

console.log("synchronous end"); // synchronous end
// Order: synchronous, synchronous end, microtask, macrotask
