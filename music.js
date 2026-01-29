const music = document.getElementById("bgMusic");

// Restore play state
if (sessionStorage.getItem("musicPlaying") === "true") {
  music.volume = 1;
  music.play();
}

// Start music on first interaction
document.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0;
    music.play();
    sessionStorage.setItem("musicPlaying", "true");

    let v = 0;
    const fade = setInterval(() => {
      v += 0.02;
      music.volume = Math.min(v, 1);
      if (v >= 1) clearInterval(fade);
    }, 150);
  }
}, { once: true });
