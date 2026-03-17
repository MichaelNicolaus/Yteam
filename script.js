document.addEventListener("DOMContentLoaded", function () {
  let slides = document.getElementsByClassName("slide");

  if (slides.length > 0) {
    slides[0].style.display = "block"; // tampilkan slide pertama
  }

  showSlides();
});document.addEventListener("DOMContentLoaded", function () {
  let slides = document.getElementsByClassName("slide");

  if (slides.length > 0) {
    slides[0].style.display = "block"; // tampilkan slide pertama
  }

  showSlides();
});
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

    document.getElementById("clock").textContent = currentTime;
}

// Update setiap 1 detik
setInterval(updateTime, 1000);

// Jalankan saat halaman dibuka
updateTime();

// Slideshow
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 10000); // 10 detik
}

function plusSlides(n) {
  let slides = document.getElementsByClassName("slide");

  slideIndex += n;

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

  slides[slideIndex].style.display = "block";
}

// Tabs utama
function showMainTab(tabId, element) {
  document.querySelectorAll('.main-tab').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  element.classList.add('active');
}

// Sub tabs
function showSubTab(tabId, element) {
  document.querySelectorAll('.sub-tab').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).style.display = 'block';
  element.classList.add('active');
}

// Jalankan slideshow saat halaman siap
document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});


