document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.getElementById("contact-menu");

    toggleButton.addEventListener("click", function () {
        let expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        
        // Alternar la clase "show" en el menú
        menu.classList.toggle("show");
    });
});
