"use strict";
const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const add = document.querySelector('.add'); // 1st Option selector
const sub = document.querySelector('.sub'); // 1st Option selector
const mul = document.querySelector('.mul'); // 1st Option selector
const div = document.querySelector('.div'); // 1st Option selector
const ans = document.querySelector('.ans');
const btn = document.querySelectorAll('.btn'); // 2nd Option
//----------------------- first Option----------------------
// add.addEventListener('click',()=>{
//   const v1 = Number(value1.value);
//   const v2 = Number(value2.value);
//   let result = v1 + v2;
//   ans.textContent = `${result}`;
// });
// sub.addEventListener('click',()=>{
//   const v1 = Number(value1.value);
//   const v2 = Number(value2.value);
//   let result = v1 - v2;
//   ans.textContent = `${result}`;
// });
// mul.addEventListener('click',()=>{
//   const v1 = Number(value1.value);
//   const v2 = Number(value2.value);
//   let result = v1 * v2;
//   ans.textContent = `${result}`;
// })
// div.addEventListener('click', () => {
//   const v1 = Number(value1.value);
//   const v2 = Number(value2.value);
//   if (v2 === 0) {
//     ans.textContent = "Cannot divide by 0";
//     return;
//   }
//   let result = v1 / v2;
//   ans.textContent = `${result.toFixed(2)}`;
// });
// ---------------------- Second Option  -------------------
btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const v1 = Number(value1.value);
        const v2 = Number(value2.value);
        let result;
        if (btn.id === "add") {
            result = v1 + v2;
        }
        else if (btn.id === "sub") {
            result = v1 - v2;
        }
        else if (btn.id === "mul") {
            result = v1 * v2;
        }
        else {
            if (v2 === 0) {
                ans.textContent = "Cannot divide by 0";
                return;
            }
            result = v1 / v2;
        }
        ans.textContent = `${result.toFixed(2)}`;
    });
});
