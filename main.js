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

const foods = {
  korean: [
    { name: '김치찌개', desc: '한국인의 소울푸드, 깊은 맛의 김치와 돼지고기의 조화.' },
    { name: '된장찌개', desc: '구수한 된장과 신선한 채소가 어우러진 건강 식단.' },
    { name: '삼겹살', desc: '지친 하루를 달래주는 고소한 육즙의 대명사.' },
    { name: '제육볶음', desc: '매콤달콤한 양념이 고기에 쏙 밴 밥도둑.' }
  ],
  global: [
    { name: '치킨', desc: '언제 먹어도 진리인 바삭한 튀심옷의 유혹.' },
    { name: '피자', desc: '풍부한 치즈와 토핑이 주는 환상적인 조합.' },
    { name: '초밥', desc: '신선한 해산물과 알싸한 와사비의 깔끔한 만남.' },
    { name: '파스타', desc: '다양한 소스로 즐기는 이국적인 면 요리.' }
  ],
  light: [
    { name: '연어 샐러드', desc: '신선한 채소와 고소한 연어의 가벼운 만남.' },
    { name: '월남쌈', desc: '각종 채소와 고기를 라이스 페이퍼에 싸먹는 재미.' },
    { name: '서브웨이 샌드위치', desc: '취향대로 골라먹는 건강하고 든든한 한 끼.' },
    { name: '닭가슴살 볶음', desc: '고단백 저지방, 다이어터를 위한 최고의 선택.' }
  ]
};

const modal = document.getElementById('result-modal');
const closeBtn = document.querySelector('.close-btn');

document.getElementById('generate').addEventListener('click', () => {
  const kFood = foods.korean[Math.floor(Math.random() * foods.korean.length)];
  const gFood = foods.global[Math.floor(Math.random() * foods.global.length)];
  const lFood = foods.light[Math.floor(Math.random() * foods.light.length)];

  // 각 카드 데이터 업데이트
  updateCard('rec-korean', kFood);
  updateCard('rec-global', gFood);
  updateCard('rec-light', lFood);

  modal.classList.remove('hidden');
});

function updateCard(id, food) {
  const card = document.getElementById(id);
  card.querySelector('.name').textContent = food.name;
  card.querySelector('.desc').textContent = food.desc;
}

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

