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



const typingText = "Sandeep Kumar";
    const typingElement = document.querySelector('.typing-text');
    let index = 0;

    function typeText() {
      if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeText, 200);
      } else {
        index = 0;
        typingElement.textContent = "";
        setTimeout(typeText, 100); 
      }
    }

    typeText();