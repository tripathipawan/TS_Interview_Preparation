# TS Interview Preparation

I'm Pawan Tripathi, a frontend developer learning TypeScript while already comfortable with JavaScript. This repo is where I practice daily projects to build TypeScript logic and type-thinking, one task at a time.

Stack I'm using: HTML, CSS (Tailwind CDN), and TypeScript. No frameworks, no build tools — just `tsc` compiling TS to plain JS.

---

## Task 1 — Background Color Changer

Five colored buttons that change the page background color when clicked, built with TypeScript instead of plain JS this time.

What I built:
- Five buttons (Red, Black, Pink, Orange, Green) styled with Tailwind
- Clicking a button changes `document.body`'s background color
- Hover effect on buttons using Tailwind's `hover:` classes with a smooth transition

Things I learned:
- `querySelectorAll` returns a `NodeListOf<Element>`, not a plain array or string — TypeScript infers this automatically if you don't force a type on it
- `forEach` is needed to attach a click listener to each button individually — you can't call `addEventListener` directly on a NodeList
- Typing the `forEach` callback parameter as `(e: Element)` instead of `HTMLElement`, because that's the actual type TypeScript expects to match `NodeListOf<Element>`
- Tailwind's `hover:` utility classes (`hover:bg-white hover:text-black transition-all duration-500`) are simpler than writing a separate `:hover` rule in a CSS file — avoids specificity conflicts with Tailwind's injected styles
- Letting TypeScript infer types (`let btn = document.querySelectorAll(...)`) instead of manually typing them wrong

Mistakes I made:
- Typed `mx-2` as `m-x-2` — Tailwind spacing classes don't have a dash between the axis letter and the number
- Tried `let btn: array` — `array` isn't a valid TypeScript type, and using it broke compilation
- Tried `let btn: string` first — forgot that `querySelectorAll` returns a list of elements, not a single string
- Called `btn.addEventListener(...)` directly on the NodeList instead of looping through it with `forEach`
- Typed the `forEach` parameter as `HTMLElement` when it needed to be `Element`, since that's what `NodeListOf<Element>` expects
- Left an old compiled `script.js` sitting in the folder from an earlier attempt, which caused a "cannot redeclare block-scoped variable" error since both files declared the same variable name
- Wrote `transition: all 0.5 ease` in CSS without a unit on the duration — `0.5` needs to be `0.5s`, otherwise the whole transition declaration gets ignored by the browser

---

## Task 2 — Counter App

A counter with Add, Sub, and Reset buttons that update a number display, built with TypeScript.

What I built:
- A number display starting at 0
- Add button increases the count by 1
- Sub button decreases the count by 1 (goes negative, no limit)
- Reset button sets the count back to 0

Things I learned:
- `document.getElementById` returns a type that includes `null`, since TypeScript can't guarantee the element exists — using `as HTMLButtonElement` / `as HTMLElement` type assertions tells TypeScript the element will definitely be there
- `.textContent` (and `.innerHTML`) only accept strings, not numbers — had to convert with `num.toString()` before assigning
- Keeping a separate `num` variable as the source of truth, instead of reading the displayed text back out, makes the logic far more reliable
- Reset needs to update both the state variable (`num = 0`) and the display — updating only the display would cause the next Add/Sub click to continue from the old value

Mistakes I made:
- Tried converting the `<span>` element itself with `Number(value)` — that doesn't work since `value` is an HTML element, not the number inside it
- Assigned a `number` directly to `.innerHTML` without converting to a string first, which TypeScript correctly flagged as a type mismatch
- Initially called `.addEventListener` on elements without handling the possibility of `null`, which TypeScript blocked until I added type assertions
- Typed `cursor pointer` with a space instead of `cursor-pointer` in two of the three buttons — Tailwind silently ignores invalid class names instead of throwing an error, so the cursor styling quietly didn't apply

---

## Task 3 — Show / Hide Password

A password input field with a toggle button that switches between showing and hiding the typed password, built with TypeScript.

What I built:
- A password input field (hidden by default with dots)
- A toggle button labeled "Show" / "Hide"
- Clicking the button switches the input's type between `password` and `text`
- The button label updates to reflect the current state

Things I learned:
- Changing an input's visibility is just changing its `type` attribute — `input.type = "text"` reveals it, `input.type = "password"` hides it again
- `as HTMLInputElement` is needed (not just `HTMLElement`) because the `.type` property used to switch between password/text is only available on `HTMLInputElement`
- Forgetting to link the compiled `script.js` in the HTML means none of the TypeScript logic runs at all, even if the code itself has zero errors — always double check the `<script>` tag is actually in the file
- `=` assigns a value, `===` only compares — mixing them up means the code "checks" something but never actually changes it

Mistakes I made:
- Used `===` instead of `=` when trying to change `input.type`, so the type was being compared instead of actually updated
- Tried to read the password's value using `.textContent`, which doesn't work on `<input>` elements — that's for elements like `<div>` or `<span>`
- Set `input.type === "String"` (a typo of `"text"`, and also using `===` instead of `=`) — neither the value nor the operator was correct
- Had the show/hide logic flipped at first — labeling the button incorrectly relative to whether the password was currently visible or hidden
- Forgot to add the `<script src="script.js"></script>` tag in the HTML entirely, so the page loaded with no JavaScript running despite the TypeScript code being correct

---

## Task 4 — Character Counter

A textarea with a live character counter that updates as the user types, with a maximum length limit, built with TypeScript.

What I built:
- A textarea where the user can type freely
- A live counter showing current characters typed out of a 300 character max (e.g. "45/300")
- Typing is blocked once the 300 character limit is reached

Things I learned:
- The `'input'` event fires on every keystroke, making it the right choice for live updates — unlike `'click'`, which only fires on clicks
- `as HTMLTextAreaElement` is needed for `<textarea>` elements specifically, separate from `HTMLInputElement` which is for `<input>` tags
- The HTML `maxlength` attribute can enforce a character limit directly in the browser, with zero TypeScript needed — useful to know when a problem doesn't actually need custom logic
- `.value.length` gives the number of characters typed, but it returns a `number` — and since `.textContent` only accepts strings, it needs `.toString()` (or a template string) before being assigned

Mistakes I made:
- Assigned `box.value.length` directly to `.textContent` without converting it to a string first, which TypeScript flagged as a type mismatch — same kind of mistake made in Task 2's Counter App
- Misused `.slice(250)` thinking it would keep "the first 250 characters" — it actually does the opposite, returning everything *after* index 250, which is empty or near-empty for short text. The correct range for "first 250 characters" would have been `.slice(0, 250)`

---

## Task 5 — Digital Clock

A live digital clock showing hours, minutes, seconds with AM/PM, along with the current date, built with TypeScript.

What I built:
- A clock that updates every second (HH:MM:SS format)
- AM/PM indicator based on the time of day
- Current date displayed (day/month/year)

Things I learned:
- `new Date()` must be created *inside* `setInterval`'s callback, not outside it — otherwise it captures the time once at page load and never updates, since `setInterval` only re-runs the function body, not the variable declarations outside it
- `setInterval(callback, 1000)` runs the callback every 1000ms (1 second), which is exactly the refresh rate a clock needs
- `.getHours()` returns 24-hour format (0-23), so converting to 12-hour display needs explicit logic: hour 0 (midnight) becomes 12, and any hour above 12 gets 12 subtracted
- `.getMonth()` is zero-indexed (January = 0, December = 11), so the displayed month always needs `+ 1` added to match how humans count months
- AM/PM must be decided using the *original* 24-hour value, before converting it to 12-hour format — deciding it after conversion would lose the information needed to tell AM from PM
- Padding single digits with a leading zero (`5` → `"05"`) needs converting the number to a string first, since `.textContent` only accepts strings — and repeating the same `if/else` for every field (hour, minute, second, day, month) is a good case for writing one reusable `pad()` function instead

Mistakes I made:
- Displayed the hour using its raw 24-hour value before converting it to 12-hour format, because the conversion logic was written *after* the line that already set `hour.textContent` — order of operations mattered here
- Combined checks for seconds, minutes, and hours into a single `if (sec < 10 || min < 10 || hou < 10)` block, which padded all three together even when only one of them actually needed padding — each field needed its own independent check
- Assigned numbers directly to `.textContent` multiple times (date, month, year) without converting them to strings first
- Forgot to add `+ 1` to `.getMonth()`, which would have displayed June as "5" instead of "6"

---

## Task 6 — Random Quote Generator

A quote box that displays a random quote (with its author) from a fixed collection every time the "New Quote" button is clicked, built with TypeScript.

What I built:
- A card showing a quote and its author
- A "New Quote" button that picks and displays a random quote from an array of 8
- Each quote includes an id, text, and author

Things I learned:
- An `interface` only defines the shape of a single object, not the whole array — typing the array itself needs `Quote[]` (the interface name followed by `[]`), separate from the interface definition
- The interface name and the type used to annotate the array must match exactly, including capitalization — `interface Quote` and `const quotes: Quote[]` only works because the names match character for character
- `Math.random()` alone only gives a decimal between 0 and 1 — multiplying it by `array.length` and then using `Math.floor()` to round down gives a valid, usable array index
- Once an array is typed (`Quote[]`), accessing any item from it (like `quotes[data]`) is automatically typed as `Quote` too — TypeScript carries the type through automatically, no extra work needed
- Naming convention matters for readability: interfaces are capitalized (`Quote`), while the actual data using that shape is lowercase (`quotes`) — using the same casing for both can work but invites naming collisions and confusion

Mistakes I made:
- First tried to write `interface quotes: array[...]`, which isn't valid syntax — an interface describes one object's shape, not an array type
- Named the interface `quotes` (lowercase) but then tried to use `Quote` (capital) to type the array, causing a "Cannot find name 'Quote'" error since the names didn't match
- Called `Math.random()` by itself without multiplying by the array length or applying `Math.floor()`, which doesn't give a usable index on its own

---

## Task 7 — Simple Calculator

A calculator with two number inputs and four operation buttons (+, -, ×, ÷) that displays the result, built with TypeScript.

What I built:
- Two number input fields
- Four buttons for addition, subtraction, multiplication, and division
- A result display that updates based on the clicked operation
- A divide-by-zero check that shows an error message instead of crashing or showing `Infinity`
- Result rounded to 2 decimal places for clean display

Things I learned:
- Reading input values inside the click listener (not outside it) is essential — values must be read fresh at the moment of the click, the same lesson learned with `new Date()` in the Digital Clock task
- `.value` on an input is only typed correctly when the element is cast `as HTMLInputElement`, not generic `HTMLElement`
- Repeating the same input-reading and result-display code across four separate event listeners is a sign the logic can be consolidated — using a shared class on all operation buttons, selecting them with `querySelectorAll`, and looping with `forEach` removes that duplication entirely
- Inside the `forEach` loop, checking `btn.id` lets one shared click handler decide which operation to run based on which specific button was clicked
- Dividing numbers in JavaScript/TypeScript often produces long floating-point results (like `1.3333333333333333`) — `.toFixed(2)` rounds it to a clean 2-decimal string, and conveniently returns a string directly, so no extra template-string wrapping is needed
- A Tailwind CDN console warning about production use is just a reminder, not an error — irrelevant for a learning project that isn't being deployed live

Mistakes I made:
- Initially used `<span>` elements for the number inputs instead of `<input type="number">` — spans aren't editable, so the user had no way to type a value into them
- Had a duplicate, unused `<span class="value2">?</span>` left in the HTML alongside the actual `value2` input, creating a naming collision
- Read `value1.value` and `value2.value` outside the click listeners, so the calculator always used stale (empty) values instead of whatever the user had actually typed
- Assigned a `number` directly to `.textContent` without converting it to a string first, the same mistake made in earlier tasks
- Displayed long, unrounded decimal results (e.g. `1.3333333333333333`) before adding `.toFixed(2)` to clean up the output

---

*More tasks coming daily.*