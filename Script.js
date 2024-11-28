// Selección de elementos
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;

// Función para mostrar la diapositiva actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Navegar a la diapositiva anterior
prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Navegar a la diapositiva siguiente
nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Controles de teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevButton.click();
  if (e.key === "ArrowRight") nextButton.click();
});

// Mostrar la primera diapositiva al cargar
showSlide(currentSlide);
