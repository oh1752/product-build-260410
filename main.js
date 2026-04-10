const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️ 라이트 모드';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ 라이트 모드';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙 다크 모드';
    localStorage.setItem('theme', 'light');
  }
});

const foods = [
  '김치찌개', '된장찌개', '치킨', '피자', '삼겹살', 
  '초밥', '마라탕', '떡볶이', '돈까스', '제육볶음',
  '햄버거', '파스타', '냉면', '부대찌개', '보쌈',
  '짜장면', '짬뽕', '탕수육', '곱창', '쌀국수'
];

document.getElementById('generate').addEventListener('click', () => {
  const resultDiv = document.getElementById('food-result');
  const randomIndex = Math.floor(Math.random() * foods.length);
  const selectedFood = foods[randomIndex];
  
  resultDiv.innerHTML = `<div class="food-item">${selectedFood} 어때요?</div>`;
});
