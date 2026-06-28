"use strict";
const input = document.getElementById('input-box');
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
    }
    else {
        input.type = "password";
        btn.textContent = "Show";
    }
});
