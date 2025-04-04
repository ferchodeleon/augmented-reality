window.onload = function () {
  // Ocultar el loader cuando la escena esté lista
  const scene = document.querySelector("a-scene");
  const loader = document.querySelector(".arjs-loader");

  scene.addEventListener("loaded", function () {
    loader.style.display = "none";
  });

  // Debugging para permisos de cámara
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      console.log("✅ Cámara accedida correctamente");
      stream.getTracks().forEach((track) => track.stop());
    })
    .catch(function (err) {
      console.error("❌ Error accediendo a la cámara:", err);
      alert(
        "Error accediendo a la cámara. Por favor, asegúrate de dar permisos de cámara y usar HTTPS."
      );
    });

  // Eventos de NFT
  const nft = document.querySelector("a-nft");

  nft.addEventListener("markerFound", function () {
    console.log("✅ Imagen NFT encontrada");
    // Hacer visible el modelo
    const model = document.querySelector("[gltf-model]");
    model.setAttribute("visible", "true");
  });

  nft.addEventListener("markerLost", function () {
    console.log("ℹ️ Imagen NFT perdida");
    // Ocultar el modelo
    const model = document.querySelector("[gltf-model]");
    model.setAttribute("visible", "false");
  });

  // Debugging del modelo 3D
  const model = document.querySelector("[gltf-model]");

  model.addEventListener("model-loaded", () => {
    console.log("✅ Modelo 3D cargado correctamente");
    // Asegurarse que el modelo comienza oculto hasta que se detecte el marcador
    model.setAttribute("visible", "false");
  });

  model.addEventListener("model-error", (error) => {
    console.error("❌ Error cargando el modelo:", error);
  });

  // Debugging general de la escena
  scene.addEventListener("arjs-nft-loaded", (event) => {
    console.log("✅ NFT Sistema cargado:", event);
  });

  scene.addEventListener("camera-error", (error) => {
    console.error("❌ Error con la cámara:", error);
  });

  scene.addEventListener("camera-init", (data) => {
    console.log("✅ Cámara AR inicializada");
  });
};
