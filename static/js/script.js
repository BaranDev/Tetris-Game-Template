let backgroundMusic = new Audio();

function initMusic() {
  fetch("/get_music_url")
    .then((response) => response.json())
    .then((data) => {
      backgroundMusic.src = data.url;
      backgroundMusic.loop = true;
      backgroundMusic.volume = 0.5; // Default volume
    })
    .catch((e) => console.error("Failed to fetch music URL:", e));
}

document.addEventListener("DOMContentLoaded", function () {
  initMusic();
  document.getElementById("startScreen").style.display = "flex";
  document.getElementById("game").style.display = "none";
});

function startGame() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("game").style.display = "block"; // Shows the game UI
  document.getElementById("gameGuide").style.display = "block"; // Shows the game guide
  backgroundMusic.play().catch((e) => console.error("Failed to play:", e)); // Starts the game background music
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
}

function adjustVolume(value) {
  backgroundMusic.volume = value;
}
