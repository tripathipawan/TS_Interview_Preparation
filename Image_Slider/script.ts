const prev = document.querySelector('.prev') as HTMLButtonElement;
const next = document.querySelector('.next') as HTMLButtonElement;
const imgs= document.querySelectorAll('.img');

let currentIndex: number = 0

function showImg(){
  imgs.forEach(e => (e as HTMLElement).style.display = 'none');
  (imgs[currentIndex] as HTMLElement).style.display = 'block';
}

showImg();

next.addEventListener('click',() => {
  currentIndex = (currentIndex + 1) % imgs.length;
  showImg();
});
prev.addEventListener('click',() => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImg();
});

