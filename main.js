const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

document.getElementById('generate').addEventListener('click', () => {
  const numbersDiv = document.getElementById('numbers');
  numbersDiv.innerHTML = '';
  const numbers = generateNumbers();
  numbers.forEach(number => {
    const span = document.createElement('span');
    span.textContent = number;
    numbersDiv.appendChild(span);
  });
});

function generateNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    numbers.add(num);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}
