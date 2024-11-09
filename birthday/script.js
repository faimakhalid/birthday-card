function showSurprise() {
  document.getElementById("message").innerText = "Tumhara din bohot special ho, Sadaf! 🎉💕";
  startConfetti();
}

// Confetti Effect
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
      particles.push({
          x: random(0, canvas.width),
          y: random(0, canvas.height),
          r: random(4, 8),
          d: random(10, 50),
          color: `hsl(${random(0, 360)}, 100%, 50%)`,
          tilt: random(-10, 10),
          tiltAngle: 0,
          tiltAngleIncrement: random(0.05, 0.1)
      });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += Math.sin(p.d);
      p.y += Math.cos(p.d) + 1;
      p.tiltAngle += p.tiltAngleIncrement;
      p.tilt = Math.sin(p.tiltAngle) * 15;

      if (p.y > canvas.height) p.y = -10;
      if (p.x > canvas.width) p.x = 0;
  });
}

function startConfetti() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createConfetti();
  setInterval(drawConfetti, 20);
}
