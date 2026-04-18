// script.js
document.getElementById("orderBtn").addEventListener("click", function() {
  window.open("https://wa.me/6285219577718", "_blank"); 
});

// script.js
let slideIndex = 0;
const slides = document.querySelectorAll("#slideshow img");
const dots = document.querySelectorAll(".dot");
const slideshow = document.getElementById("slideshow");

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slideshow.style.transform = `translateX(-${slideIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}

// Tombol next/prev
document.querySelector(".next").addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Klik dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

// Auto slideshow
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000); // ganti slide tiap 3 detik

// Inisialisasi pertama
showSlide(slideIndex);
