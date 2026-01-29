document.addEventListener("DOMContentLoaded", () => {
  const petalContainer = document.getElementById("petals");
  if (!petalContainer) return;

  petalContainer.innerHTML = ""; // reset on page load

  for (let i = 0; i < 40; i++) {
    const petal = document.createElement("div");
    petal.textContent = "💗";
    petal.style.position = "absolute";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-10vh";
    petal.style.fontSize = Math.random() * 14 + 14 + "px";
    petal.style.opacity = Math.random();
    petal.style.animation = `fall ${12 + Math.random() * 10}s linear infinite`;
    petalContainer.appendChild(petal);
  }
});
