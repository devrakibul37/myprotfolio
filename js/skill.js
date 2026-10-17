
// =============================================
// SKILLS SECTION - JAVASCRIPT
// Filter + Skill Cards + Progress + Theme Toggle
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const section = document.querySelector(".skills-section");

  if (!section) return;

  // ===========================================
  // SKILLS DATA
  // নিজের প্রয়োজন অনুযায়ী নাম ও percentage পরিবর্তন করো
  // ===========================================

  const skills = [
    {
      name: "HTML5",
      category: "frontend",
      icon: "fa-brands fa-html5",
      level: 95,
      color: "pink",
      description: "Semantic HTML and accessible website structure."
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: "fa-brands fa-css3-alt",
      level: 90,
      color: "cyan",
      description: "Responsive layouts, animations and modern styling."
    },
    {
      name: "JavaScript",
      category: "frontend",
      icon: "fa-brands fa-js",
      level: 75,
      color: "purple",
      description: "Interactive interfaces and dynamic website features."
    },
    {
      name: "Vue.js 3",
      category: "frontend",
      icon: "fa-brands fa-js",
      level: 75,
      color: "purple",
      description: "Interactive interfaces and dynamic website features."
    },
    {
      name: "Shopify",
      category: "tools",
      icon: "fa-brands fa-shopify",
      level: 90,
      color: "green",
      description: "Shopify store setup and theme customization."
    },
    {
      name: "Wix",
      category: "tools",
      icon: "fa-solid fa-globe",
      level: 75,
      color: "cyan",
      description: "Website creation and visual customization."
    },
    {
      name: "Webflow",
      category: "tools",
      icon: "fa-solid fa-code",
      level: 75,
      color: "pink",
      description: "Visual website development and responsive design."
    },
    {
      name: "Squarespace",
      category: "tools",
      icon: "fa-solid fa-layer-group",
      level: 75,
      color: "purple",
      description: "Modern websites with clean layouts."
    },
    {
      name: "UI Design",
      category: "uiux",
      icon: "fa-solid fa-pen-ruler",
      level: 70,
      color: "green",
      description: "Clean interfaces with a focus on usability."
    },
    {
      name: "Responsive Design",
      category: "frontend",
      icon: "fa-solid fa-mobile-screen-button",
      level: 85,
      color: "cyan",
      description: "Layouts optimized for mobile, tablet and desktop."
    }
  ];

  const grid = section.querySelector("#skillsGrid");
  const filterButtons = section.querySelectorAll(".tab-btn");

  // ===========================================
  // RENDER SKILL CARDS
  // ===========================================

  function renderSkills(category = "all") {
    if (!grid) return;

    const filteredSkills =
      category === "all"
        ? skills
        : skills.filter(skill => skill.category === category);

    grid.innerHTML = filteredSkills
      .map((skill, index) => {
        const radius = 25;
        const circumference = 2 * Math.PI * radius;
        const offset =
          circumference - (skill.level / 100) * circumference;

        return `
          <article
            class="skill-card skill-card--${skill.color}"
            style="animation-delay: ${index * 70}ms"
            data-category="${skill.category}"
          >
            <div class="skill-card__top">

              <div class="skill-card__identity">
                <div class="skill-card__icon" aria-hidden="true">
                  <i class="${skill.icon}"></i>
                </div>

                <div class="skill-card__title-wrap">
                  <h3 class="skill-card__name">
                    ${skill.name}
                  </h3>

                  <span class="skill-card__category">
                    ${skill.category}
                  </span>
                </div>
              </div>

              <div
                class="skill-card__gauge"
                role="img"
                aria-label="${skill.name}: ${skill.level} percent"
              >
                <svg viewBox="0 0 60 60" aria-hidden="true">
                  <circle
                    class="skill-card__gauge-bg"
                    cx="30"
                    cy="30"
                    r="${radius}"
                  ></circle>

                  <circle
                    class="skill-card__gauge-progress"
                    cx="30"
                    cy="30"
                    r="${radius}"
                    stroke-dasharray="${circumference}"
                    stroke-dashoffset="${circumference}"
                    data-target-offset="${offset}"
                  ></circle>
                </svg>

                <span class="skill-card__percentage">
                  ${skill.level}%
                </span>
              </div>

            </div>

            <p class="skill-card__description">
              ${skill.description}
            </p>

            <div class="skill-card__progress-heading">
              <span>Proficiency</span>
              <span class="skill-card__progress-value">
                ${skill.level}%
              </span>
            </div>

            <div
              class="skill-card__progress-track"
              role="progressbar"
              aria-label="${skill.name} proficiency"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${skill.level}"
            >
              <div
                class="skill-card__progress-fill"
                data-level="${skill.level}"
                style="width: 0%"
              ></div>
            </div>
          </article>
        `;
      })
      .join("");

    animateProgress();
  }

  // ===========================================
  // ANIMATE PROGRESS INDICATORS
  // ===========================================

  function animateProgress() {
    const progressFills = grid.querySelectorAll(
      ".skill-card__progress-fill"
    );

    const circularProgress = grid.querySelectorAll(
      ".skill-card__gauge-progress"
    );

    // Trigger transitions after the cards enter the DOM.
    requestAnimationFrame(() => {
      progressFills.forEach(fill => {
        fill.style.width = `${fill.dataset.level}%`;
      });

      circularProgress.forEach(circle => {
        circle.style.strokeDashoffset =
          circle.dataset.targetOffset;
      });
    });
  }

  // ===========================================
  // CATEGORY FILTER
  // ===========================================

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(item => {
        item.classList.remove("is-active");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");

      renderSkills(button.dataset.category || "all");
    });
  });

  renderSkills("all");
});
