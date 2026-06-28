const box = document.getElementById('box') as HTMLTextAreaElement;
const num = document.getElementById('num') as HTMLElement;

box.addEventListener('input',()=>{
  num.textContent = box.value.length.toString();
})