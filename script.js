document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  
  if (envelope) {
    envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
    });
  }

  // Web Shooter Confetti Cannon interaction
  const confettiBtn = document.getElementById('web-shooter-btn');

  confettiBtn.addEventListener('click', () => {
    // Launch left web burst
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#d90429', '#ef233c', '#ffb703', '#ff85a1', '#0f4c81']
    });

    // Launch right web burst
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#d90429', '#ef233c', '#ffb703', '#ff85a1', '#0f4c81']
    });
  });
});