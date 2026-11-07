document.addEventListener('DOMContentLoaded', () => {
  // Envelope click interaction
  const envelope = document.getElementById('envelope');
  const envelopeImg = document.getElementById('envelope-img');

  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');

    if (envelope.classList.contains('open')) {
      envelopeImg.src = 'images/red-envelope-open.png'; // Path to your open envelope image
    } else {
      envelopeImg.src = 'images/red-envelope.png';
    }

  });

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