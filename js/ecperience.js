document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.experience .tab-btn');
  const contentPanels = document.querySelectorAll('.experience .content-panel');

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');

      // Remove active class from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      contentPanels.forEach((panel) => panel.classList.remove('active'));

      // Add active class to clicked button and target content panel
      this.classList.add('active');
      const activePanel = document.getElementById(targetTab);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
});