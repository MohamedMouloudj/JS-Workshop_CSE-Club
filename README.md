# JavaScript Workshop

This project is a small, runnable workshop for learning JavaScript from core
syntax to browser and asynchronous programming.

Realized as part of CSE club's ESMS workshop series.

## Run scripts with Node.js

From the project folder, run any terminal-compatible file:

```powershell
node .\basic\01-variables-in-javascript.js
node .\advanced\08-xhr-and-fetch.js
```

DOM files require a browser. Open `advanced\index.html` directly, or start a
local server and open it in a browser:

```powershell
npx serve .
```

## Scripts loaded by `advanced/index.html`

```html
<script defer src="04-dom-events-and-propagation.js"></script>
<script async src="05-async-and-defer.js"></script>
<script src="03-dom-tree-structure-and-rendering.js"></script>
```

## Folders

- `basic`: Variables, types, operators, control flow, functions, data
  structures, and scope.
- `advanced`: Strict mode, hoisting, the DOM, events, asynchronous code,
  networking, execution context, and debugging.

> Canva presentation: [JavaScript Workshop](https://canva.link/fdw0agapdq4n5ic)
