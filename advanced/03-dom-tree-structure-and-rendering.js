"use strict";

// Select by ID
const titleById = document.getElementById("title");

// Select by CSS selector
const output = document.querySelector("#output");

setTimeout(() => {
  titleById.textContent = "DOM tree updated";
  output.textContent = `The title node is a ${titleById.nodeName} element.`;
}, 3000);

// Select all matching CSS elements
const containers = document.querySelectorAll(".container");

// Select by class name
const containersByClass = document.getElementsByClassName("container");

// Select by tag name
const allDivs = document.getElementsByTagName("div");

// Select by name attribute
const namedInputs = document.getElementsByName("name");

// Select special element collections
const forms = document.forms;
const links = document.links;
const images = document.images;

// Select the document body and root element
const html = document.documentElement;
const body = document.body;

console.log(containers);
console.log(containersByClass);
console.log(allDivs);
console.log(namedInputs);
console.log(forms);
console.log(links);
console.log(images);
console.log(body);
console.log(html);

//? Create:
/*
document.createElement("div")
document.createTextNode("hello")
document.createDocumentFragment() // lightweight container, lives in memory not in DOM. for batch DOM inserts
*/

//? Append / Insert
/*
parent.appendChild(el)          // add at end
parent.prepend(el)              // add at start
parent.append(el, "text")       // modern, accepts multiple arguments, strings too
parent.insertBefore(el, ref)    // insert before a reference element
ref.insertAdjacentElement("beforebegin" | "afterbegin" | "beforeend" | "afterend", el)
*/

//? Remove:
/*
el.remove()                     // remove itself
parent.removeChild(el)          // remove a child
*/

//? Modify:
/*
el.textContent = "new text"     // change text
el.innerHTML = "<b>bold</b>"    // change HTML content
el.setAttribute("id", "main")   // set attribute
el.removeAttribute("id")        // remove attribute
el.classList.add("active")      // add class
el.classList.remove("active")   // remove class
el.classList.toggle("active")   // toggle class
el.style.color = "red"          // inline style
el.id = "main"                  // direct property
*/
