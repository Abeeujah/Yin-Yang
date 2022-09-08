// DOM
// QuerySelector
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// GetElementByID
const toggleIcon = document.getElementById('toggle-icon');
const navElement = document.getElementById('nav');
const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const projectsSection = document.getElementById('projects');
const projectSection = document.getElementById('project');
const imageOne = document.getElementById('image1');
const imageTwo = document.getElementById('image2');
const imageThree = document.getElementById('image3');
const textBoxElement = document.getElementById('text-box');

// Mode Constants
const modeDark = 'dark';
const modeLight = 'light';

// Image Mode
function imageMode(color) {
    imageOne.src = `./img/undraw_proud_coder_${color}.svg`;
    imageTwo.src = `./img/undraw_conceptual_idea_${color}.svg`;
    imageThree.src = `./img/undraw_feeling_proud_${color}.svg`;
}

function toggleLightDarkMode(isDark) {
    navElement.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBoxElement.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%' : 'rgb(0 0 0 / 50%';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.remove('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.remove('fa-moon', 'fa-sun');
    isDark ? imageMode(modeDark) : imageMode(modeLight);
}

// Switch theme/ light or dark
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', modeDark);
        localStorage.setItem('theme', modeDark);
        toggleLightDarkMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', modeLight);
        localStorage.setItem('theme', modeLight);
        toggleLightDarkMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Local Storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === modeDark) {
    document.documentElement.setAttribute('data-theme', modeDark);
    toggleSwitch.checked = true;
    toggleLightDarkMode(true);
} else {
    document.documentElement.setAttribute('data-theme', modeLight);
    toggleLightDarkMode(false);
}