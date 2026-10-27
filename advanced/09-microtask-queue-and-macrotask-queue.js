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

//? Microtask queue holds: Promises, MutationObserver (Browser), process.nextTick (Node.js), queueMicrotask
//? Macrotask queue holds: setTimeout, setInterval, setImmediate (Node.js), I/O, UI rendering (Browser. Events)
