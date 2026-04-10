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
  {
    name: '김치찌개',
    desc: '한국인의 소울푸드, 깊은 맛의 김치와 돼지고기의 조화.',
    tips: ['잘 익은 김치를 사용하세요.', '라면 사리를 추가하면 별미입니다.', '계란말이와 찰떡궁합!']
  },
  {
    name: '된장찌개',
    desc: '구수한 된장과 신선한 채소가 어우러진 건강 식단.',
    tips: ['멸치 육수를 진하게 내보세요.', '차돌박이를 넣으면 맛이 더 풍부해집니다.', '남은 국물에 밥을 볶아보세요.']
  },
  {
    name: '치킨',
    desc: '언제 먹어도 진리인 바삭한 튀김옷의 유혹.',
    tips: ['맥주(치맥) 또는 콜라와 함께하세요.', '남은 치킨은 치킨마요 덮밥으로!', '반반 메뉴가 가장 인기입니다.']
  },
  {
    name: '삼겹살',
    desc: '지친 하루를 달래주는 고소한 육즙의 대명사.',
    tips: ['구운 김치, 마늘과 함께 쌈을 싸보세요.', '파절이는 필수입니다.', '후식으로 냉면이나 볶음밥을 잊지 마세요.']
  },
  {
    name: '초밥',
    desc: '신선한 해산물과 알싸한 와사비의 깔끔한 만남.',
    tips: ['흰살 생선부터 붉은살 생선 순으로 드세요.', '간장은 생선 쪽에만 살짝 찍으세요.', '따뜻한 장국과 함께 즐기세요.']
  }
  // 추가 메뉴 데이터...
];

document.getElementById('generate').addEventListener('click', () => {
  const resultDiv = document.getElementById('food-result');
  const detailsDiv = document.getElementById('food-details');
  const titleElem = document.getElementById('detail-title');
  const descElem = document.getElementById('detail-desc');
  const tipsElem = document.getElementById('detail-tips');

  const randomIndex = Math.floor(Math.random() * foods.length);
  const food = foods[randomIndex];

  // 추천 결과 표시
  resultDiv.innerHTML = `<div class="food-item pulse">${food.name} 어때요?</div>`;

  // 상세 정보 표시
  titleElem.textContent = `${food.name} 가이드`;
  descElem.textContent = food.desc;
  tipsElem.innerHTML = food.tips.map(tip => `<li>${tip}</li>`).join('');
  
  detailsDiv.classList.remove('hidden');
  detailsDiv.classList.add('fade-in');
});

