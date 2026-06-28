const quote = document.getElementById('quote') as HTMLElement;
const writer = document.getElementById('writer') as HTMLElement;
const btn = document.getElementById('btn') as HTMLButtonElement;

interface Quote {
  id: number;
  text: string;
  author: string;
};

const quotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    id: 2,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    id: 3,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 4,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    id: 5,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    id: 6,
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    id: 7,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    id: 8,
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
  },
];

btn.addEventListener('click',()=>{
  const num = Math.random() * quotes.length;
  const data = Math.floor(num);
  quote.textContent = `"${quotes[data].text}"`;
  writer.textContent = `-${quotes[data].author}`;
});

