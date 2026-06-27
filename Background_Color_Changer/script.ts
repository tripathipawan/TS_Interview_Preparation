let btn = document.querySelectorAll('.btn');

btn.forEach((e: Element)=>{
  e.addEventListener('click',() => {
  document.body.style.backgroundColor = e.innerHTML;
});
})