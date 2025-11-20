// Dumb simple reveal animation + confetti option later if you want.

document.getElementById("reveal-btn").addEventListener("click", () => {
  const msg = document.getElementById("message");

  // Fire confetti
  launchConfetti();
  msg.innerHTML = "Will you be my best man?";
  msg.classList.remove("hidden");

  // Optional: hide button after click
  document.getElementById("reveal-btn").classList.add("hidden");
});

// Extremely lightweight confetti burst (no libraries)
function launchConfetti() {
  const duration = 800;
  const end = Date.now() + duration;

  (function frame() {
    // Create a single confetti particle
    const particle = document.createElement("div");
    const size = Math.random() * 8 + 4;
    particle.style.position = "fixed";
    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = "-10px";
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
    particle.style.borderRadius = "50%";
    particle.style.opacity = "0.9";
    particle.style.pointerEvents = "none";
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    particle.style.zIndex = "9999";
    document.body.appendChild(particle);

    // Animate downward
    const fallDuration = Math.random() * 1200 + 600;
    particle.animate(
      [
        { transform: particle.style.transform, top: "-10px" },
        { transform: particle.style.transform, top: window.innerHeight + "px" }
      ],
      { duration: fallDuration, easing: "ease-out" }
    );

    // Remove after animation
    setTimeout(() => particle.remove(), fallDuration);

    // Keep spawning while time remains
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}