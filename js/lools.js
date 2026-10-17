document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.tools .tool-card');

  cards.forEach((card) => {
    // Read icon color dynamically
    const icon = card.querySelector('.tool-icon');
    const ringContainer = card.querySelector('.pct-ring');
    const circle = ringContainer.querySelector('.progress-ring-circle');
    const text = ringContainer.querySelector('.pct-text');
    
    // Apply icon color directly to the progress ring
    const iconColor = window.getComputedStyle(icon).color;
    circle.style.color = iconColor;

    const target = +ringContainer.getAttribute('data-target');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const animateRing = () => {
      let current = 0;
      const updateProgress = () => {
        if (current < target) {
          current++;
          text.innerText = current + '%';
          const offset = circumference - (current / 100) * circumference;
          circle.style.strokeDashoffset = offset;
          setTimeout(updateProgress, 25);
        } else {
          text.innerText = target + '%';
          const offset = circumference - (target / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }
      };

      updateProgress();
    };

    // Trigger ring counting animation when scrolled into viewport
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateRing();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(card);
  });
});