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
    { name: '김치찌개', desc: '한국인의 소울푸드, 깊은 맛의 김치와 돼지고기의 조화.', tips: ['잘 익은 김치를 사용하세요.', '라면 사리를 추가하면 별미입니다.', '계란말이와 찰떡궁합!'] },
    { name: '된장찌개', desc: '구수한 된장과 신선한 채소가 어우러진 건강 식단.', tips: ['멸치 육수를 진하게 내보세요.', '차돌박이를 넣으면 맛이 더 풍부해집니다.', '남은 국물에 밥을 볶아보세요.'] },
    { name: '삼겹살', desc: '지친 하루를 달래주는 고소한 육즙의 대명사.', tips: ['구운 김치, 마늘과 함께 쌈을 싸보세요.', '파절이는 필수입니다.', '후식으로 냉면이나 볶음밥을 잊지 마세요.'] },
    { name: '제육볶음', desc: '매콤달콤한 양념이 고기에 쏙 밴 밥도둑.', tips: ['불맛을 내려면 강불에서 빠르게 볶으세요.', '깻잎에 싸먹으면 향이 좋습니다.', '남은 양념에 밥을 비벼드세요.'] }
  ],
  global: [
    { name: '치킨', desc: '언제 먹어도 진리인 바삭한 튀김옷의 유혹.', tips: ['맥주(치맥) 또는 콜라와 함께하세요.', '남은 치킨은 치킨마요 덮밥으로!', '반반 메뉴가 가장 인기입니다.'] },
    { name: '피자', desc: '풍부한 치즈와 토핑이 주는 환상적인 조합.', tips: ['핫소스를 곁들이면 느끼함을 잡아줍니다.', '갈릭 디핑 소스는 필수!', '도우 끝부분을 치즈 크러스트로 변경해보세요.'] },
    { name: '초밥', desc: '신선한 해산물과 알싸한 와사비의 깔끔한 만남.', tips: ['흰살 생선부터 드시는 것을 추천합니다.', '간장은 생선 쪽에만 살짝 찍으세요.', '따뜻한 장국과 함께 즐기세요.'] },
    { name: '파스타', desc: '다양한 소스로 즐기는 이국적인 면 요리.', tips: ['면을 알단테로 삶으면 식감이 좋습니다.', '파마산 치즈 가루를 듬뿍 뿌려보세요.', '바게트 빵을 소스에 찍어 드세요.'] }
  ],
  light: [
    { name: '연어 샐러드', desc: '신선한 채소와 고소한 연어의 가벼운 만남.', tips: ['오리엔탈 드레싱이 잘 어울립니다.', '케이퍼와 양파 슬라이스를 곁들이세요.', '아보카도를 추가하면 더 든든합니다.'] },
    { name: '월남쌈', desc: '각종 채소와 고기를 라이스 페이퍼에 싸먹는 재미.', tips: ['땅콩 소스와 칠리 소스를 준비하세요.', '파인애플을 넣으면 상큼함이 배가 됩니다.', '라이스 페이퍼는 미지근한 물에 적시세요.'] },
    { name: '샌드위치', desc: '취향대로 골라먹는 건강하고 든든한 한 끼.', tips: ['채소를 듬뿍 넣어 아삭함을 살리세요.', '통밀 식빵을 사용하면 더 건강합니다.', '할라피뇨를 넣어 매콤함을 더해보세요.'] },
    { name: '닭가슴살 볶음', desc: '고단백 저지방, 다이어터를 위한 최고의 선택.', tips: ['굴소스로 간을 하면 감칠맛이 납니다.', '다양한 색깔의 파프리카를 넣으세요.', '후추를 넉넉히 뿌려 풍미를 살리세요.'] }
  ]
};

const modal = document.getElementById('result-modal');
const closeBtn = document.querySelector('.close-btn');
let currentRecommendation = {};

const categoryTags = {
  korean: '🍱 든든한 한식',
  global: '🍝 이국적인 별미',
  light: '🥗 가벼운 한 끼'
};

document.getElementById('generate').addEventListener('click', () => {
  const categories = Object.keys(foods);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryFoods = foods[randomCategory];
  currentRecommendation = categoryFoods[Math.floor(Math.random() * categoryFoods.length)];

  updateCard('rec-main', currentRecommendation, categoryTags[randomCategory]);

  document.getElementById('tip-area').classList.add('hidden'); // 팁 영역 초기화
  modal.classList.remove('hidden');
});

function updateCard(id, food, tagText) {
  const card = document.getElementById(id);
  const tagEl = document.getElementById('rec-tag');
  const nameEl = document.getElementById('rec-name');
  const descEl = document.getElementById('rec-desc');

  tagEl.textContent = tagText;
  nameEl.textContent = food.name;
  descEl.textContent = food.desc;
  
  // 클릭 이벤트 리스너 (기존 리스너 중복 방지를 위해 복제 후 교체)
  const newCard = card.cloneNode(true);
  card.parentNode.replaceChild(newCard, card);
  
  newCard.addEventListener('click', () => {
    showTips(food);
  });
}

function showTips(food) {
  const tipArea = document.getElementById('tip-area');
  const tipTitle = document.getElementById('tip-title');
  const tipList = document.getElementById('tip-list');

  tipTitle.textContent = `💡 ${food.name}을 더 맛있게 즐기는 팁!`;
  tipList.innerHTML = food.tips.map(tip => `<li>${tip}</li>`).join('');
  
  tipArea.classList.remove('hidden');
  tipArea.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

