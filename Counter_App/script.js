"use strict";
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const resetBtn = document.getElementById('reset');
const value = document.getElementById('value');
let num = 0;
addBtn.addEventListener('click', () => {
    num += 1;
    value.textContent = num.toString();
});
subBtn.addEventListener('click', () => {
    num -= 1;
    value.textContent = num.toString();
    ;
});
resetBtn.addEventListener('click', () => {
    num = 0;
    value.textContent = num.toString();
});
