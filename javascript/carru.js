const slide = document.getElementById('slide');
const items = document.querySelectorAll('.item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function mostrarSlide(n) {
  index += n;
  if (index < 0) index = items.length - 1;
  if (index >= items.length) index = 0;
  slide.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => moverSlide(-1));
nextBtn.addEventListener('click', () => moverSlide(1));

function moverSlide(n) {
  mostrarSlide(n);
}

window.addEventListener('load', () => {
  mostrarSlide(0);
});
