"use strict";
const box = document.getElementById('box');
const num = document.getElementById('num');
box.addEventListener('input', () => {
    num.textContent = box.value.length.toString();
});
