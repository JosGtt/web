// Copiar el correo al portapapeles sin usar alert
const copyContainer = document.getElementById("copyEmailContainer");
const myEmailSpan = document.getElementById("myEmail");
const copyMsg = document.getElementById("copyMessage");

copyContainer.addEventListener("click", () => {
  const email = myEmailSpan.textContent;
  navigator.clipboard.writeText(email)
    .then(() => {
      // Mostrar el mensaje de copia durante 5 segundos
      copyMsg.classList.add("show");
      setTimeout(() => {
        copyMsg.classList.remove("show");
      }, 5000);
    })
    .catch(err => {
      console.error("Error al copiar el correo", err);
    });
});

// Abrir Gmail Web con borrador pre-llenado usando solo el contenido del mensaje
const shootBtn = document.getElementById("shootBtn");

shootBtn.addEventListener("click", () => {
  const message = document.getElementById("message").value.trim();
  if (!message) {
    alert("Por favor, ingresa un mensaje.");
    return;
  }
  const subject = "Mensaje desde mi portfolio";
  const body = message;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(myEmailSpan.textContent)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailLink, "_blank");
});
