const langButtons = document.querySelectorAll(".language-button");
const savedLanguage = localStorage.getItem("loveBackLanguage") || "en";

function setResearchLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("loveBackLanguage", lang);
  document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.langPanel !== lang;
  });
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setResearchLanguage(button.dataset.lang));
});

setResearchLanguage(savedLanguage);
