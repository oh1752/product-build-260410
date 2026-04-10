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
