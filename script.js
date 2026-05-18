// =========================
// Tombol WhatsApp
// =========================
document.getElementById("orderBtn")
.addEventListener("click", function () {

  window.open(
    "https://wa.me/6285219577718",
    "_blank"
  );

});


// =========================
// Slideshow
// =========================
const slideshow = document.getElementById("slideshow");

const slides =
document.querySelectorAll(".slide");

const dots =
document.querySelectorAll(".dot");

const prevBtn =
document.querySelector(".prev");

const nextBtn =
document.querySelector(".next");

let slideIndex = 0;


// Fungsi tampil slide
function showSlide(index) {

  // Jika lebih dari slide terakhir
  if (index >= slides.length) {
    slideIndex = 0;
  }

  // Jika kurang dari slide pertama
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  // Normal
  else {
    slideIndex = index;
  }

  // Geser slideshow
  slideshow.style.transform =
    `translateX(-${slideIndex * 100}%)`;

  // Reset dots
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  // Aktifkan dot sesuai slide
  if (dots[slideIndex]) {
    dots[slideIndex]
    .classList.add("active");
  }

}


// Tombol next
nextBtn.addEventListener("click", () => {
  showSlide(slideIndex + 1);
});


// Tombol prev
prevBtn.addEventListener("click", () => {
  showSlide(slideIndex - 1);
});


// Klik dots
dots.forEach((dot, i) => {

  dot.addEventListener("click", () => {
    showSlide(i);
  });

});


// Auto slideshow
setInterval(() => {

  showSlide(slideIndex + 1);

}, 3000);



// Inisialisasi pertama
showSlide(slideIndex);


// =========================
// Tombol Scroll ke Atas
// =========================
document.getElementById("scrollTopBtn")
.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
