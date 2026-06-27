"use strict";
let btn = document.querySelectorAll('.btn');
btn.forEach((e) => {
    e.addEventListener('click', () => {
        document.body.style.backgroundColor = e.innerHTML;
    });
});
