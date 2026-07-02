"use strict";
const fullBody = document.getElementById("body");
const card = document.getElementById("card");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("toggleBtn");
let isDark = true;
btn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        // Dark theme
        fullBody.style.backgroundColor = "#0a0a0a";
        card.style.backgroundColor = "#1a1a1a";
        card.style.borderColor = "#555";
        title.style.color = "white";
        desc.style.color = "#aaa";
        btn.style.backgroundColor = "#2a2a2a";
        btn.style.color = "white";
        btn.innerHTML = "☀️ Light Mode";
    }
    else {
        // Light theme
        fullBody.style.backgroundColor = "#f5f5f5";
        card.style.backgroundColor = "white";
        card.style.borderColor = "#ccc";
        title.style.color = "#111";
        desc.style.color = "#555";
        btn.style.backgroundColor = "#e0e0e0";
        btn.style.color = "#111";
        btn.innerHTML = "🌙 Dark Mode";
    }
});
