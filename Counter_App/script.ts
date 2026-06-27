const addBtn = document.getElementById('add') as HTMLButtonElement;
const subBtn = document.getElementById('sub') as HTMLButtonElement;
const resetBtn = document.getElementById('reset') as HTMLButtonElement;
const value = document.getElementById('value') as HTMLElement;

let num: number = 0;

addBtn.addEventListener('click',()=>{
  num +=1;
  value.textContent = num.toString();
});
subBtn.addEventListener('click',()=>{
  num -=1;
  value.textContent = num.toString();;
});
resetBtn.addEventListener('click',()=>{
  num = 0;
  value.textContent = num.toString();
});

