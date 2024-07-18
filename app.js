const toggleMenu = document.getElementById('toggle-menu');
const text = document.querySelectorAll('.text');
const aside = document.querySelector('aside');

toggleMenu.addEventListener('click', () => {
  text.forEach(txt => txt.classList.toggle('show-text'));
});

const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('click', () => {
  const sunIcon = toggleTheme.querySelector('.fa-sun');
  const moonIcon = toggleTheme.querySelector('.fa-moon');
  
  sunIcon.classList.toggle('theme-icon-state');
  moonIcon.classList.toggle('theme-icon-state');
  
  toggleTheme.classList.toggle('dark-mode-toggle');
  
  if (aside.hasAttribute('data-dark-mode')) {
    aside.removeAttribute('data-dark-mode');
    aside.querySelector('.user-status').style.borderColor = 'black';
  } else {
    aside.setAttribute('data-dark-mode', 'true');
    aside.querySelector('.user-status').style.borderColor = 'white';
  }
});
