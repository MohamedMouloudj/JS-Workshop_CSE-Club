"use strict";

const globalValue = "global";

function showContext(localValue) {
  const message = `${globalValue} and ${localValue}`;
  return message;
}

console.log(showContext("local")); // global and local
