// Jalankan saat halaman siap
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
  updateTime();
  setInterval(updateTime, 1000);
});


// =======================
// JAM DIGITAL
// =======================
function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Tambah 0 jika angka < 10
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const currentTime = hours + ":" + minutes + ":" + seconds;

  const clock = document.getElementById("clock");
  if (clock) {
    clock.textContent = currentTime;
  }
}


// =======================
// SLIDESHOW
// =======================
let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");

  if (slides.length === 0) return;

  // Sembunyikan semua
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Tampilkan slide aktif
  slides[slideIndex - 1].style.display = "block";

  // Ganti slide tiap 3 detik
  setTimeout(showSlides, 3000);
}


// Tombol next/prev
function plusSlides(n) {
  const slides = document.getElementsByClassName("slide");

  if (slides.length === 0) return;

  slideIndex += n;

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // Sembunyikan semua
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Tampilkan yang dipilih
  slides[slideIndex].style.display = "block";
}


// =======================
// TAB ARTIKEL
// =======================
function showSubTab(tabId, element) {
  const tabs = document.querySelectorAll(".sub-tab");
  const buttons = document.querySelectorAll(".sub-btn");

  tabs.forEach(tab => tab.style.display = "none");
  buttons.forEach(btn => btn.classList.remove("active"));

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = "block";
  }

  if (element) {
    element.classList.add("active");
  }
}
