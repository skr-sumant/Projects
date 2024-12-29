const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !navLinks.contains(e.target)) {
    menu.classList.remove('active');
    navLinks.classList.remove('show');
  }
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    navLinks.classList.remove('show');
  });
});



const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;

function showNextImage() {
  carouselItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].classList.add('active');
}

setInterval(showNextImage, 2000); // Change image every 5 seconds