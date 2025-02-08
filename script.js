const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.querySelector('.container');

let yesButtonSize = 1; // Initialize the scale factor for the "Yes" button

noButton.addEventListener('mouseover', () => {
  // Move the "No" button to a random position when hovered
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  // Increase the size of the "Yes" button slightly
  yesButtonSize += 0.1; // Increase scale by 10% each time
  yesButton.style.transform = `scale(${yesButtonSize})`;
});

yesButton.addEventListener('click', () => {
  // Fade out the container
  container.style.opacity = '0';

  // Wait for the fade-out to complete, then update the content
  setTimeout(() => {
    container.innerHTML = `
      <img src="cuddle.gif" alt="Happy Valentine's GIF" class="gif">
      <h1 style="color: #d32f2f;">Weewoo Happy Valentine's Day My Love!</h1>
      <p style="font-size: 20px; color: #333;">❤️ I love you lots MWAH! ❤️</p>
    `;
    container.style.opacity = '1'; // Fade in the new content
  }, 500); // 500ms matches the transition duration
});