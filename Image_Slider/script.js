"use strict";
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imgs = document.querySelectorAll('.img');
let currentIndex = 0;
function showImg() {
    imgs.forEach(e => e.style.display = 'none');
    imgs[currentIndex].style.display = 'block';
}
showImg();
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgs.length;
    showImg();
});
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    showImg();
});
