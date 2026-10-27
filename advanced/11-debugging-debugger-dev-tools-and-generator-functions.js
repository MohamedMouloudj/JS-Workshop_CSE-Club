"use strict";

function* lessonSteps() {
  yield "inspect";
  yield "step";
  yield "fix";
}

const steps = lessonSteps();
console.log(steps.next().value); // inspect
debugger;
console.log(steps.next().value); // step
console.log(steps.next().value); // fix
