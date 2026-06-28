"use strict";
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const period = document.getElementById('period');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
setInterval(() => {
    const date = new Date();
    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hou = date.getHours();
    // For Second
    if (sec < 10) {
        second.textContent = `0${sec}`;
    }
    else {
        second.textContent = `${sec}`;
    }
    // For Minute
    if (min < 10) {
        minute.textContent = `0${min}`;
    }
    else {
        minute.textContent = `${min}`;
    }
    // AM/PM decide karo (12-hour conversion se PEHLE, kyunki hou abhi original 24h hai)
    if (hou >= 12) {
        period.textContent = "PM";
    }
    else {
        period.textContent = "AM";
    }
    // Hour ko 12-hour format mein convert karo
    if (hou === 0) {
        hou = 12;
    }
    else if (hou > 12) {
        hou = hou - 12;
    }
    // For Hour — ab convert hua hour display karo
    if (hou < 10) {
        hour.textContent = `0${hou}`;
    }
    else {
        hour.textContent = `${hou}`;
    }
    // For Date
    const dateNum = date.getDate();
    if (dateNum < 10) {
        day.textContent = `0${dateNum}`;
    }
    else {
        day.textContent = `${dateNum}`;
    }
    // For Month
    const monthNum = date.getMonth() + 1;
    if (monthNum < 10) {
        month.textContent = `0${monthNum}`;
    }
    else {
        month.textContent = `${monthNum}`;
    }
    year.textContent = `${date.getFullYear()}`;
}, 1000);
// Sort way using AI
// const pad = (n: number): string => n < 10 ? `0${n}` : `${n}`;
// setInterval(() => {
//   const date = new Date();
//   let hou = date.getHours();
//   period.textContent = hou >= 12 ? "PM" : "AM";
//   hou = hou % 12 || 12;
//   hour.textContent = pad(hou);
//   minute.textContent = pad(date.getMinutes());
//   second.textContent = pad(date.getSeconds());
//   day.textContent = pad(date.getDate());
//   month.textContent = pad(date.getMonth() + 1);
//   year.textContent = `${date.getFullYear()}`;
// }, 1000);
