// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
for (let i = 0; i < 200; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.05 + 0.02,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  updateConfetti();
}

function updateConfetti() {
  confetti.forEach((c) => {
    c.y += c.d * 5;
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawConfetti, 30);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// MUSIK
const playBtn = document.getElementById("playBtn");
const music = document.getElementById("bg-music");

playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = "⏸ Hentikan Musik";
  } else {
    music.pause();
    playBtn.textContent = "▶ Putar Musik";
  }
});

// NAVIGASI HALAMAN
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const nextBtns = document.querySelectorAll(".nextBtn");

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id === "backBtn") {
      fadeTransition(page2, page1);
    } else {
      fadeTransition(page1, page2);
    }
  });
});

function fadeTransition(fromPage, toPage) {
  fromPage.classList.remove("active");
  setTimeout(() => {
    toPage.classList.add("active");
  }, 500);
}
