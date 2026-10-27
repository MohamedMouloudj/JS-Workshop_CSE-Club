"use strict";

const wait = (value, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(value), delay));

async function loadWorkshop() {
  const topic = await wait("JavaScript", 10);
  const lesson = await wait(`${topic} lesson`, 10);
  return `${lesson} loaded`;
}

loadWorkshop().then(console.log); // JavaScript lesson loaded
