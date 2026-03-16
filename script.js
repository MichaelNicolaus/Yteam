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
