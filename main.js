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

const URL = "./my_model/";
let model, labelContainer, maxPredictions;

// Load the model initially
async function loadModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = "";
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function handleImageUpload(event) {
    if (!model) await loadModel();

    const file = event.target.files[0];
    if (!file) return;

    const imgElement = document.getElementById("face-image");
    const reader = new FileReader();

    reader.onload = function(e) {
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
        
        // Predict once the image is loaded
        imgElement.onload = async () => {
            await predict(imgElement);
        };
    };
    reader.readAsDataURL(file);
}

async function predict(imageElement) {
    const prediction = await model.predict(imageElement);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(0) + "%";
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

// Global scope
window.handleImageUpload = handleImageUpload;
loadModel(); // Initialize model loading on page load
