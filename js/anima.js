document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las secciones
  const sections = document.querySelectorAll('section');

  // Define para cada índice la clase inicial y la clase final
  const animationMapping = [
    { initial: 'animar-up', final: 'fade-in' },
    { initial: 'animar-left', final: 'fade-in-left' },
    { initial: 'animar-right', final: 'fade-in-right' },
    { initial: 'animar-zoom', final: 'fade-in-zoom' },
    { initial: 'animar-rotate', final: 'fade-in-rotate' }
  ];

  // Agrega la clase inicial a cada sección según su índice
  sections.forEach((section, index) => {
    let animationClass = animationMapping[index] ? animationMapping[index].initial : 'animar-up';
    section.classList.add(animationClass);
  });

  // Crea un Intersection Observer para detectar la entrada en el viewport
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Obtiene el índice de la sección observada
        let sectionIndex = [...sections].indexOf(entry.target);
        let finalClass = animationMapping[sectionIndex] ? animationMapping[sectionIndex].final : 'fade-in';
        let initialClass = animationMapping[sectionIndex] ? animationMapping[sectionIndex].initial : 'animar-up';
        // Cambia la clase inicial por la final para activar la animación
        entry.target.classList.remove(initialClass);
        entry.target.classList.add(finalClass);
        // Si solo quieres que la animación se ejecute una vez, deja de observarla
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});
