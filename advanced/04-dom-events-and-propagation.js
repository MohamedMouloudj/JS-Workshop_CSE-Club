"use strict";

const form = document.querySelector("#workshop-form");
const input = document.querySelector("#name-input");
const outputBox = document.querySelector("#output");
const actionButton = document.querySelector("#action-button");

const containersToUse = document.querySelectorAll(".container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  outputBox.textContent = `Submitted: ${input.value || "anonymous learner"}`;
});

containersToUse[1].addEventListener(
  "click",
  (event) => {
    console.log(
      `Container clicked! Event target: ${event.target.nodeName}. Current target: ${event.currentTarget.nodeName}`,
    );
  },
  // {
  //   capture: true,
  // },
);

actionButton.addEventListener("click", (event) => {
  event.stopPropagation();
  outputBox.textContent = "Standalone action completed.";
});
