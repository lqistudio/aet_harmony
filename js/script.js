
document.addEventListener("DOMContentLoaded", () => {
  // Collapsibles
  document.querySelectorAll(".card.collapsible").forEach(card => {
    const header = card.querySelector(".card-header");
    if (!header) return;
    header.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });

  // Theme toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("theme-light");
    });
  }

  // Back to top
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
