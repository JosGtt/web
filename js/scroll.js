// ----------------------
// Efecto en el header: agregar clase "scrolled" cuando se hace scroll
// ----------------------
window.addEventListener("scroll", function(){
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
});

// ----------------------
// Scroll suave entre secciones (un scroll por sección)
// ----------------------
let sections = document.querySelectorAll(".seccion");
let currentSectionIndex = 0;
let isScrolling = false;

function smoothScrollToSection(index) {
  isScrolling = true;
  sections[index].scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    isScrolling = false;
  }, 800); // Tiempo para bloquear el siguiente scroll
}

window.addEventListener("wheel", function(event) {
  if (isScrolling) return; // Evita múltiples disparos
  
  let newIndex = currentSectionIndex;
  
  if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
    newIndex++;
  } else if (event.deltaY < 0 && currentSectionIndex > 0) {
    newIndex--;
  } else {
    return;
  }
  
  currentSectionIndex = newIndex;
  // Actualiza el indicador inmediatamente al detectar el scroll
  if (typeof updateIndicator === "function") {
    updateIndicator(currentSectionIndex);
  }
  smoothScrollToSection(currentSectionIndex);
});
