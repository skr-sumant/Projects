const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');

let currentIndex = 0;
const totalItems = carouselInner.children.length;

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  carouselInner.style.transform = `translateX(-${currentIndex * 20}%)`;
}

let autoSlideInterval = setInterval(autoSlide, 2000);

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  carouselInner.style.transform = `translateX(-${currentIndex * 20}%)`;
  autoSlideInterval = setInterval(autoSlide, 5000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlideInterval);
  currentIndex = (currentIndex + 1) % totalItems;
  carouselInner.style.transform = `translateX(-${currentIndex * 20}%)`;
  autoSlideInterval = setInterval(autoSlide, 5000);
});