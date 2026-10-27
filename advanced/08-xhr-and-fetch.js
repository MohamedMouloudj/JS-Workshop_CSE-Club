"use strict";

//? fetch()

async function requestJson() {
  const response = await fetch(
    "data:application/json,%7B%22title%22%3A%22Practice%20fetch%22%7D",
    // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer token123",
    //   },
    //   body: JSON.stringify({ name: "Mohamed" }),
    //   signal: AbortController.signal, // for request cancellation
    //   credentials: "include", // send cookies cross-origin
    //   mode: "cors", // cors | no-cors | same-origin
    // },
  );
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const todo = await response.json();
  console.log(todo.title);
}

try {
  requestJson();
} catch (error) {
  console.log(error.message);
  process.exitCode = 1;
}

//? XMLHttpRequest
function requestWithXhr() {
  if (typeof XMLHttpRequest === "undefined") {
    console.log("XMLHttpRequest is available only in a browser.");
    return;
  }

  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "data:application/json,%7B%22title%22%3A%22Practice%20XHR%22%7D",
  );

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log(data.title); // Practice XHR
    } else {
      console.error(`XHR request failed: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    console.error("XHR network error");
  });

  xhr.send();
}

requestJson()
  .then(requestWithXhr)
  .catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
