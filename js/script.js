// Mobile Menu Script
const mobile_bars = document.querySelector('.mobile_bars');
mobile_bars.addEventListener('click', () => {
  document.querySelector('.main_menu').classList.toggle('open');
});

// Light and Dark Mode
const darkTheme = document.querySelector('.dark_theme');
darkTheme.addEventListener('click', () => {
  darkTheme.querySelector('i').classList.toggle('fa-sun');
  darkTheme.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    darkTheme.querySelector('i').classList.add('fa-sun');
  } else {
    darkTheme.querySelector('i').classList.add('fa-moon');
  }
});

// Sticky Header Animation
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.main_header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Back-to-top button
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.querySelector('.backToTop');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
