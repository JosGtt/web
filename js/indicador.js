// Función para actualizar el indicador de secciones
function updateIndicator(index) {
    const navItems = document.querySelectorAll('.section-indicator li');
    navItems.forEach((li, i) => {
      li.classList.toggle('active', i === index);
    });
  }
  
  // Exponemos la función globalmente para que pueda ser llamada desde scroll.js
  window.updateIndicator = updateIndicator;
  
  // Actualiza el indicador al cargar la página (por defecto, la primera sección)
  updateIndicator(0);
  
  // Actualiza el indicador cuando se hace clic en los enlaces del menú
  document.querySelectorAll('#contact-menu a').forEach(link => {
    link.addEventListener('click', function() {
      const href = this.getAttribute('href'); // Ejemplo: "#seccion1"
      const sections = document.querySelectorAll('.seccion');
      sections.forEach((section, index) => {
        if ('#' + section.id === href) {
          updateIndicator(index);
          // Actualiza también el índice global para que el scroll siga la secuencia correcta
          window.currentSectionIndex = index;
        }
      });
    });
  });
  