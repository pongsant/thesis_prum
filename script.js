// Edit these arrays to update the dashboard content.
const overviewCards = [
  {
    icon: "i",
    title: "What is this project?",
    text: "A multimedia thesis combining music, visuals, animation, interactive web design, sound-reactive work, and a peaceful game space.",
  },
  {
    icon: "∞",
    title: "Main concept",
    text: "Every form of love becomes a path back to self-understanding: family, friendship, heartbreak, memory, regret, and peace.",
  },
  {
    icon: "♡",
    title: "Why it matters",
    text: "The project turns personal emotion into an organized archive, making reflection easier to revisit, develop, and share.",
  },
  {
    icon: "%",
    title: "Current progress",
    text: "Music and visual planning are underway. The thesis is moving from concept into production, testing, and final presentation.",
  },
];

const tracks = [
  {
    number: "00",
    title: "Intro",
    theme: "Entering Memory",
    description: "Ambient opening built from childhood recordings, rain, wind, and the feeling of memory waking up.",
    visual: "Audio texture / rain visual",
    status: "In Progress",
    progress: 45,
  },
  {
    number: "01",
    title: "25 Dec",
    theme: "Mother's Love / Awareness",
    description: "A song for my mother about realizing love, feeling regret, and wanting to give her something lasting.",
    visual: "Reverse animation / ocean / framed memory",
    status: "In Progress",
    progress: 55,
  },
  {
    number: "02",
    title: "Only You",
    theme: "Family Love / Reflection",
    description: "A reflection on parents, grandmother, and the people who stayed beside me even when I acted badly.",
    visual: "TouchDesigner sound-reactive visual",
    status: "In Progress",
    progress: 50,
  },
  {
    number: "03",
    title: "Friend Song",
    theme: "Youth / Freedom / Memories",
    description: "A fun night-driving friendship song about youth, freedom, simple memories, and growing older.",
    visual: "Interactive website memory experience",
    status: "Not Started",
    progress: 10,
  },
  {
    number: "04",
    title: "Wedding",
    theme: "Heartbreak / Attachment / Letting Go",
    description: "A heartbreak song about still loving someone, imagining their wedding, and learning to let go.",
    visual: "Cinematic short film / MV",
    status: "Demo Made",
    progress: 65,
  },
  {
    number: "05",
    title: "Self Song",
    theme: "Peace / Self-Understanding / Acceptance",
    description: "The final return to self after love, regret, friendship, heartbreak, and emotional growth.",
    visual: "Peaceful explorable game world",
    status: "Not Started",
    progress: 8,
  },
];

const mediaPlan = [
  { icon: "♪", title: "Music EP", status: "In Progress" },
  { icon: "◎", title: "Animation", status: "In Progress" },
  { icon: "≈", title: "TouchDesigner Visual", status: "In Progress" },
  { icon: "▣", title: "Short Film / MV", status: "Demo Made" },
  { icon: "◇", title: "Game Environment", status: "Not Started" },
  { icon: "⌘", title: "Website", status: "In Progress" },
  { icon: "□", title: "Poster", status: "Not Started" },
  { icon: "◌", title: "Album Cover", status: "Not Started" },
];

const progressSections = [
  { title: "Music", items: ["Intro", "25 Dec", "Only You", "Friend Song", "Wedding", "Self Song"] },
  { title: "Visual", items: ["Album cover", "Poster", "25 Dec animation", "Wedding MV", "TouchDesigner visual", "Game environment"] },
  { title: "Research", items: ["Zen Buddhism", "Wabi-Sabi", "Memory and nostalgia", "Film references", "Game references"] },
  { title: "Website", items: ["Dashboard layout", "Track cards", "Progress tracker", "Responsive design", "Search and filters"] },
];

const references = [
  { category: "Film", title: "Perfect Days", note: "Routine, peace, quiet daily beauty" },
  { category: "Film", title: "Aftersun", note: "Memory, family footage, regret" },
  { category: "Film", title: "The Tree of Life", note: "Family, childhood, spiritual scale" },
  { category: "Film", title: "Her", note: "Loneliness, technology, soft future UI" },
  { category: "Film", title: "5 Centimeters per Second", note: "Distance, weather, missed timing" },
  { category: "Film", title: "Vinland Saga Season 2", note: "Regret, peace, emotional growth" },
  { category: "Game", title: "Journey", note: "Wordless travel, scale, emotional movement" },
  { category: "Game", title: "GRIS", note: "Color, grief, recovery, visual poetry" },
];

const notes = [
  {
    date: "May 29, 2026",
    title: "Dashboard redesign",
    text: "Shift the website toward a cleaner Apple-inspired interface with better readability, search, filters, and progress indicators.",
    category: "Website",
  },
  {
    date: "Next update",
    title: "Production planning",
    text: "Add real demo links, image placeholders, short references, and timeline details for music and visual production.",
    category: "Planning",
  },
  {
    date: "Thesis focus",
    title: "Return to self",
    text: "Keep the main idea visible: every type of love eventually leads back to understanding myself.",
    category: "Concept",
  },
];

let activeFilter = "All";
let searchTerm = "";

const statusWeight = {
  "Not Started": 8,
  "In Progress": 50,
  "Demo Made": 65,
  Finished: 100,
};

const statusClass = (status) => status.toLowerCase().replace(/\s+/g, "-");

function matchesSearch(values) {
  return values.join(" ").toLowerCase().includes(searchTerm);
}

function renderOverview() {
  document.querySelector("#overview-grid").innerHTML = overviewCards
    .map(
      (card) => `
        <article class="info-card">
          <span class="card-icon">${card.icon}</span>
          <h3>${card.title}</h3>
          <p>${card.text}</p>
        </article>
      `
    )
    .join("");
}

function renderTracks() {
  const visibleTracks = tracks.filter((track) => {
    const filterMatch = activeFilter === "All" || track.status === activeFilter;
    const searchMatch = matchesSearch([track.number, track.title, track.theme, track.description, track.visual, track.status]);
    return filterMatch && searchMatch;
  });

  document.querySelector("#track-grid").innerHTML =
    visibleTracks
      .map(
        (track) => `
          <article class="track-card result-card">
            <div class="track-topline">
              <span class="track-number">${track.number}</span>
              <span class="status-pill ${statusClass(track.status)}">${track.status}</span>
            </div>
            <h3>${track.title}</h3>
            <p class="track-theme">${track.theme}</p>
            <p>${track.description}</p>
            <div class="track-meta">
              <span>Visual</span>
              <strong>${track.visual}</strong>
            </div>
            <div class="progress-row">
              <span>${track.progress}%</span>
              <div class="progress-bar"><span style="--target:${track.progress}%"></span></div>
            </div>
          </article>
        `
      )
      .join("") || `<p class="empty-state">No tracks match your search.</p>`;
}

function renderMedia() {
  const visibleMedia = mediaPlan.filter((item) => matchesSearch([item.title, item.status]));
  document.querySelector("#media-grid").innerHTML =
    visibleMedia
      .map(
        (item) => `
          <article class="media-card result-card">
            <span class="card-icon">${item.icon}</span>
            <h3>${item.title}</h3>
            <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
          </article>
        `
      )
      .join("") || `<p class="empty-state">No media items match your search.</p>`;
}

function savedChecks() {
  return JSON.parse(localStorage.getItem("loveBackChecks") || "{}");
}

function renderProgress() {
  const saved = savedChecks();
  document.querySelector("#progress-grid").innerHTML = progressSections
    .map((section, sectionIndex) => {
      const checkedCount = section.items.filter((_, itemIndex) => saved[`check-${sectionIndex}-${itemIndex}`]).length;
      const percent = Math.round((checkedCount / section.items.length) * 100);
      const items = section.items
        .map((item, itemIndex) => {
          const id = `check-${sectionIndex}-${itemIndex}`;
          return `
            <label class="check-row" for="${id}">
              <input id="${id}" type="checkbox" ${saved[id] ? "checked" : ""} />
              <span>${item}</span>
            </label>
          `;
        })
        .join("");

      return `
        <article class="progress-card">
          <div class="progress-card-head">
            <div>
              <span class="mini-label">${section.items.length} tasks</span>
              <h3>${section.title}</h3>
            </div>
            <span class="percent">${percent}%</span>
          </div>
          <div class="progress-bar"><span style="--target:${percent}%"></span></div>
          <div class="check-list">${items}</div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".check-row input").forEach((input) => {
    input.addEventListener("change", () => {
      const next = savedChecks();
      next[input.id] = input.checked;
      localStorage.setItem("loveBackChecks", JSON.stringify(next));
      renderProgress();
      updateOverallProgress();
    });
  });
}

function renderReferences() {
  const visibleReferences = references.filter((item) => matchesSearch([item.category, item.title, item.note]));
  document.querySelector("#reference-grid").innerHTML =
    visibleReferences
      .map(
        (item) => `
          <article class="reference-card result-card">
            <span class="status-pill neutral">${item.category}</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
          </article>
        `
      )
      .join("") || `<p class="empty-state">No references match your search.</p>`;
}

function renderNotes() {
  const visibleNotes = notes.filter((note) => matchesSearch([note.date, note.title, note.text, note.category]));
  document.querySelector("#notes-grid").innerHTML =
    visibleNotes
      .map(
        (note) => `
          <article class="note-card result-card">
            <div class="note-date">${note.date}</div>
            <h3>${note.title}</h3>
            <p>${note.text}</p>
            <span class="status-pill neutral">${note.category}</span>
          </article>
        `
      )
      .join("") || `<p class="empty-state">No notes match your search.</p>`;
}

function updateOverallProgress() {
  const saved = savedChecks();
  const trackAverage = tracks.reduce((sum, track) => sum + track.progress, 0) / tracks.length;
  const mediaAverage = mediaPlan.reduce((sum, item) => sum + statusWeight[item.status], 0) / mediaPlan.length;
  const allTasks = progressSections.flatMap((section, sectionIndex) => section.items.map((_, itemIndex) => `check-${sectionIndex}-${itemIndex}`));
  const taskAverage = allTasks.length ? (allTasks.filter((id) => saved[id]).length / allTasks.length) * 100 : 0;
  const overall = Math.round(trackAverage * 0.45 + mediaAverage * 0.3 + taskAverage * 0.25);

  document.querySelector("#overall-percent").textContent = `${overall}%`;
  document.querySelector("#overall-progress").style.setProperty("--target", `${overall}%`);
}

function renderAll() {
  renderOverview();
  renderTracks();
  renderMedia();
  renderProgress();
  renderReferences();
  renderNotes();
  updateOverallProgress();
}

// Smooth entry animation when sections scroll into view.
function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

// Controls: track filters, global search, reset checklist, and dark mode.
document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderTracks();
  });
});

document.querySelector("#global-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderTracks();
  renderMedia();
  renderReferences();
  renderNotes();
});

document.querySelector("#reset-checklist").addEventListener("click", () => {
  localStorage.removeItem("loveBackChecks");
  renderProgress();
  updateOverallProgress();
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("loveBackTheme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("loveBackTheme") === "dark") {
  document.body.classList.add("dark-mode");
}

renderAll();
setupRevealAnimation();
