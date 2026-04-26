const content = window.portfolioContent;

function setField(selector, value) {
  const element = document.querySelector(`[data-field="${selector}"]`);
  if (element) {
    element.textContent = value;
  }
}

function createElement(tag, className, html) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (html !== undefined) {
    element.innerHTML = html;
  }
  return element;
}

function buildNavigation() {
  const nav = document.getElementById("topnav");
  content.navigation.forEach((item) => {
    const link = createElement("a", "topnav__link");
    link.href = `#${item.id}`;
    link.dataset.target = item.id;
    link.textContent = item.label;
    nav.appendChild(link);
  });
}

function buildHero() {
  setField("hero.eyebrow", content.hero.eyebrow);
  setField("hero.name", content.hero.name);
  setField("hero.title", content.hero.title);
  setField("hero.affiliation", content.hero.affiliation);
  setField("hero.summary", content.hero.summary);

  const portrait = document.getElementById("portrait-image");
  portrait.src = content.hero.portraitImage;
  portrait.alt = `${content.hero.name} 的头像`;

  const actions = document.getElementById("hero-actions");
  (content.hero.actions || []).forEach((action) => {
    const link = createElement("a", `button button--${action.variant || "secondary"}`);
    link.href = action.href;
    link.textContent = action.label;
    actions.appendChild(link);
  });

  const badges = document.getElementById("hero-badges");
  (content.hero.badges || []).forEach((badge) => {
    const item = createElement("span", "badge");
    item.textContent = badge;
    badges.appendChild(item);
  });

  const facts = document.getElementById("hero-facts");
  (content.hero.quickFacts || []).forEach(([label, value]) => {
    const row = createElement("div", "fact-list__row");
    row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    facts.appendChild(row);
  });

  const glance = document.getElementById("hero-glance");
  (content.hero.glance || []).forEach((item) => {
    const card = createElement("article", "glance-card");
    card.innerHTML = `
      <h3 class="glance-card__title">${item.title}</h3>
      <p class="glance-card__text">${item.text}</p>
    `;
    glance.appendChild(card);
  });
}

function buildOverview() {
  document.getElementById("overview-summary").textContent = content.overview.summary;

  const highlights = document.getElementById("overview-highlights");
  (content.overview.highlights || []).forEach((item) => {
    const line = createElement("li");
    line.textContent = item;
    highlights.appendChild(line);
  });

  const cards = document.getElementById("overview-cards");
  (content.overview.cards || []).forEach((cardData) => {
    const panel = createElement("article", "panel");
    panel.innerHTML = `<h3>${cardData.title}</h3><p>${cardData.text}</p>`;
    cards.appendChild(panel);
  });

  const groups = document.getElementById("overview-groups");
  (content.overview.groups || []).forEach((group) => {
    const panel = createElement("article", "panel");
    panel.innerHTML = `<h3>${group.title}</h3>`;
    const list = createElement("div", "chip-list");
    (group.items || []).forEach((item) => {
      const chip = createElement("span", "chip");
      chip.textContent = item;
      list.appendChild(chip);
    });
    panel.appendChild(list);
    groups.appendChild(panel);
  });
}

function buildResearch() {
  document.getElementById("research-intro").textContent = content.research.intro;
  const grid = document.getElementById("research-grid");

  content.research.themes.forEach((theme) => {
    const card = createElement("article", "research-card");
    const bullets = theme.bullets.map((item) => `<li>${item}</li>`).join("");
    card.innerHTML = `
      <h3>${theme.title}</h3>
      <p>${theme.description}</p>
      <ul class="bullet-list">${bullets}</ul>
    `;
    grid.appendChild(card);
  });
}

function buildWork() {
  document.getElementById("work-intro").textContent = content.work.intro;
  const list = document.getElementById("work-list");
  (content.work.items || []).forEach((itemData) => {
    const item = createElement("article", "work-card");
    const bullets = (itemData.bullets || []).map((item) => `<li>${item}</li>`).join("");
    item.innerHTML = `
      <div class="work-card__meta">
        <span class="work-card__status">${itemData.status}</span>
      </div>
      <h3>${itemData.title}</h3>
      <p>${itemData.summary}</p>
      <ul class="bullet-list">${bullets}</ul>
    `;
    list.appendChild(item);
  });
}

function buildOutputs() {
  const list = document.getElementById("output-list");
  (content.outputs || []).forEach((output) => {
    const item = createElement("article", "output-item");
    item.innerHTML = `
      <div class="output-item__meta">
        <span class="output-item__type">${output.type}</span>
        <span class="output-item__status">${output.status}</span>
      </div>
      <h3>${output.title}</h3>
      <p class="output-item__sub">${output.meta}</p>
      <p>${output.description}</p>
    `;
    list.appendChild(item);
  });
}

function buildMethods() {
  document.getElementById("methods-intro").textContent = content.methods.intro;

  const groups = document.getElementById("methods-groups");
  (content.methods.groups || []).forEach((group) => {
    const panel = createElement("article", "panel");
    panel.innerHTML = `<h3>${group.title}</h3>`;
    const list = createElement("div", "chip-list");
    (group.items || []).forEach((item) => {
      const chip = createElement("span", "chip");
      chip.textContent = item;
      list.appendChild(chip);
    });
    panel.appendChild(list);
    groups.appendChild(panel);
  });

  const notes = document.getElementById("methods-notes");
  (content.methods.notes || []).forEach((line) => {
    const item = createElement("li");
    item.textContent = line;
    notes.appendChild(item);
  });
}

function buildBackground() {
  const list = document.getElementById("background-list");
  (content.background || []).forEach((entry) => {
    const item = createElement("article", "background-card");
    const details = entry.details.map((line) => `<li>${line}</li>`).join("");
    item.innerHTML = `
      <div class="background-card__meta">
        <span>${entry.period}</span>
      </div>
      <h3>${entry.institution}</h3>
      <p class="background-card__program">${entry.program}</p>
      <ul class="bullet-list">${details}</ul>
    `;
    list.appendChild(item);
  });
}

function buildContact() {
  document.getElementById("contact-intro").textContent = content.contact.intro;

  const methods = document.getElementById("contact-methods");
  content.contact.methods.forEach((method) => {
    const item = createElement("a", "contact-method");
    item.href = method.href;
    item.innerHTML = `
      <span class="contact-method__label">${method.label}</span>
      <strong class="contact-method__value">${method.value}</strong>
    `;
    methods.appendChild(item);
  });

  const list = document.getElementById("contact-collaboration");
  content.contact.collaboration.forEach((line) => {
    const item = createElement("li");
    item.textContent = line;
    list.appendChild(item);
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (!target) {
        return;
      }
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupActiveNavigation() {
  const links = Array.from(document.querySelectorAll(".topnav__link"));
  const sections = content.navigation
    .map((item) => document.getElementById(item.id))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (!current) {
        return;
      }

      links.forEach((link) => {
        const isActive = link.dataset.target === current.target.id;
        link.classList.toggle("is-active", isActive);
        link.setAttribute("aria-current", isActive ? "page" : "false");
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0.1, 0.35, 0.6]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function applyMeta() {
  if (content.meta?.title) {
    document.title = content.meta.title;
  }
  const description = document.querySelector('meta[name="description"]');
  if (description && content.meta?.description) {
    description.setAttribute("content", content.meta.description);
  }
}

function init() {
  applyMeta();
  buildNavigation();
  buildHero();
  buildOverview();
  buildResearch();
  buildWork();
  buildOutputs();
  buildMethods();
  buildBackground();
  buildContact();
  setupSmoothScroll();
  setupActiveNavigation();
}

init();
