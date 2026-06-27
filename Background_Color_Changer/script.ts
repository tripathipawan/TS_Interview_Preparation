let btns = document.querySelectorAll<HTMLDivElement>('.btn');

btns.forEach((e: Element)=>{
  e.addEventListener('click',() => {
  document.body.style.backgroundColor = e.textContent?.trim() ?? '';
});
})