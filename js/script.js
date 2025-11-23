// Modo acordeón para las secciones
document.querySelectorAll(".collapsible").forEach((card) => {
  const header = card.querySelector(".card-header");
  const body = card.querySelector(".card-body");

  // Estado inicial: abierto
  card.classList.remove("collapsed");
  body.style.display = "block";

  header.addEventListener("click", () => {
    const isCollapsed = card.classList.toggle("collapsed");
    body.style.display = isCollapsed ? "none" : "block";
  });
});

// Botón volver arriba
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle de tema claro/oscuro
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Restaurar preferencia guardada
const savedTheme = localStorage.getItem("aet_theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("aet_theme", isLight ? "light" : "dark");
});
