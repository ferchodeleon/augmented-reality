# AR.js Image Tracking Web Application

Esta es una aplicación web que utiliza AR.js y A-Frame para crear experiencias de realidad aumentada basadas en marcadores de imagen.

## Requisitos

- Un navegador web moderno con soporte para WebGL y WebRTC
- Una cámara web o cámara de dispositivo móvil
- Conexión a internet para cargar las librerías necesarias

## Configuración

1. Necesitarás generar tu propio marcador patrón usando la herramienta AR.js Marker Training:

   - Visita: https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html
   - Sube una imagen que quieras usar como marcador
   - Descarga el archivo .patt generado
   - Coloca el archivo .patt en la raíz del proyecto con el nombre "pattern-marker.patt"

2. Para servir la aplicación, puedes usar cualquier servidor web. Por ejemplo, con Python:

   ```bash
   # Si tienes Python 3
   python -m http.server 8080

   # Si tienes Python 2
   python -m SimpleHTTPServer 8080
   ```

3. Abre tu navegador y visita `http://localhost:8080`

## Uso

1. Permite el acceso a la cámara cuando el navegador lo solicite
2. Apunta la cámara hacia el marcador que generaste
3. Verás aparecer un cubo rojo sobre el marcador

## Personalización

- Para cambiar el modelo 3D, modifica el contenido dentro del elemento `<a-marker>` en el archivo `index.html`
- Puedes agregar más interactividad modificando el archivo `app.js`
- Los estilos se pueden personalizar en `styles.css`

## Tecnologías utilizadas

- AR.js
- A-Frame
- HTML5
- CSS3
- JavaScript
