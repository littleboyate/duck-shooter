const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ฟังก์ชันปรับขนาด Canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// เรียกใช้เมื่อโหลดเกม และเมื่อขนาดหน้าจอเปลี่ยน
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // ปรับขนาดเริ่มต้น

const gunshotSound = new Audio("gunshot.mp3");
const backgroundMusic = new Audio("background.mp3");
backgroundMusic.loop = true;

function playGunshot() {
    gunshotSound.currentTime = 0;
    gunshotSound.play();
}

canvas.addEventListener("click", (event) => {
    playGunshot(); // เล่นเสียงยิงปืน
});
