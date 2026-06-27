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

*More tasks coming daily.*