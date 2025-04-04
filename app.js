// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Debugging para permisos de cámara
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      console.log("Cámara accedida correctamente");
      stream.getTracks().forEach((track) => track.stop());
    })
    .catch(function (err) {
      console.error("Error accediendo a la cámara:", err);
      alert(
        "Error accediendo a la cámara. Por favor, asegúrate de dar permisos de cámara y usar HTTPS."
      );
    });

  // Eventos de NFT
  const nft = document.querySelector("a-nft");

  nft.addEventListener("markerFound", function () {
    console.log("¡Imagen encontrada!");
    // Aquí puedes agregar animaciones o interacciones adicionales
  });

  nft.addEventListener("markerLost", function () {
    console.log("Imagen perdida");
  });

  // Debugging del modelo 3D
  const model = document.querySelector("[gltf-model]");
  model.addEventListener("model-loaded", () => {
    console.log("Modelo 3D cargado correctamente");
  });
  model.addEventListener("model-error", (error) => {
    console.error("Error cargando el modelo:", error);
  });
});
