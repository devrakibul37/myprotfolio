
  const textElement = document.querySelector(".typing-text");

  const words = ["Front End Developer","Shopify Developer","Wix Developre"];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        deleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
  }

  typeEffect();




