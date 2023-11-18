 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addGlowEffect() {
    const buttons = document.querySelectorAll('.calculator form input');
    const randomButton = buttons[getRandomInt(0, buttons.length - 1)];

    const randomColor = getRandomColor();
    randomButton.style.boxShadow = `0 0 20px 5px ${randomColor}`;

    setTimeout(() => {
      randomButton.style.boxShadow = '0 0 10px 3px rgba(0, 0, 0, 0.219)';
    }, 500); // Adjusted glow duration to 500 milliseconds
  }

  setInterval(addGlowEffect, 1500); // Adjusted interval to 1500 milliseconds

