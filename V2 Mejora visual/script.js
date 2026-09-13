const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", abierto);
  menuToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = abierto ? "✕" : "☰";
});

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    const objetivo = document.querySelector(enlace.getAttribute("href"));
    if (!objetivo) return;
    evento.preventDefault();
    objetivo.scrollIntoView({ behavior: "smooth", block: "start" });
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("contactForm").addEventListener("submit", (evento) => {
  evento.preventDefault();
  document.getElementById("formMessage").textContent = "Gracias. Esta es una demostración y no almacena información.";
  evento.target.reset();
});
