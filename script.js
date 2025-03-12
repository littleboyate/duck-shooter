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
