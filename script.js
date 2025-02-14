function playMusic() {
  let audio = document.getElementById("bgMusic");
  audio.play();
  document.getElementById("playButton").style.display = "none"; // Sembunyikan tombol setelah ditekan
}

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  if (Math.random() < 0.1) {
    // Kurangi jumlah hati
    const x = Math.random() * canvas.width;
    0.8 + canvas.width * 0.1;
    const size = Math.random() * 15 + 5;
    const speed = Math.random() * 1 + 0.5;
    hearts.push({ x, y: canvas.height, size, speed });
  }
}

function drawHeart(x, y, size) {
  ctx.fillStyle = "rgba(255, 105, 180, 0.5)"; // Warna pink lembut & lebih transpara
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(
    x - size,
    y - size,
    x - size * 1.5,
    y + size / 3,
    x,
    y + size
  );
  ctx.bezierCurveTo(x + size * 1.5, y + size / 3, x + size, y - size, x, y);
  ctx.fill();
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, i) => {
    drawHeart(heart.x, heart.y, heart.size);
    heart.y -= heart.speed; // Bikin hati naik ke atas
    if (heart.y < -10) hearts.splice(i, 1); // Hapus hati yang keluar layar
  });
}

function animateHearts() {
  createHeart();
  drawHearts();
  requestAnimationFrame(animateHearts);
}

animateHearts();
