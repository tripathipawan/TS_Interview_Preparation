const input = document.getElementById('input-box') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click',()=>{

  if(input.type === "password"){
    input.type = "text";
    btn.textContent = "Hide";
  }else{
    input.type = "password";
    btn.textContent = "Show";
  }
});
