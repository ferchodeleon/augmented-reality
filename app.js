// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Detectar cuando el marcador es encontrado
  const marker = document.querySelector("a-marker");

  marker.addEventListener("markerFound", function () {
    console.log("¡Marcador encontrado!");
    // Aquí puedes agregar animaciones o interacciones adicionales
  });

  marker.addEventListener("markerLost", function () {
    console.log("Marcador perdido");
  });
});
