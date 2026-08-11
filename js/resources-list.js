function renderResourcesList() {
  const grid = document.getElementById("resources-grid");
  if (!grid || typeof RESOURCES === "undefined") return;

  const lang = typeof getLang === "function" ? getLang() : "pt";

  grid.innerHTML = RESOURCES.map((r) => renderResourceCard(r, lang)).join("");
}

document.addEventListener("DOMContentLoaded", renderResourcesList);
