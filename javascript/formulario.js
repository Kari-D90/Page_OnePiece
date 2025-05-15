const image = document.getElementById("image");
const inputs = document.querySelectorAll(".form_input input"); // Todos los campos del formulario
let positionX = 0; // Posición inicial de la imagen
let moving = true; // Controlar si la imagen debe moverse hacia adelante o detenerse
let lastInputValue = ""; // Último valor registrado del campo

// Función para mover la imagen
function moveImage(direction) {
  const step = 5; // Distancia que se moverá por interacción
  positionX += step * direction; // Dirección: 1 para avanzar, -1 para retroceder

  // Asegurarse de que la imagen no salga del contenedor
  const formWidth = document.querySelector("form").offsetWidth; // Ancho del formulario
  if (positionX < 0) {
    positionX = 0; // Evitar que la imagen salga por la izquierda
  } else if (positionX > formWidth - image.offsetWidth) {
    positionX = formWidth - image.offsetWidth; // Evitar que la imagen salga por la derecha
  }

  // Actualizar la posición horizontal de la imagen
  image.style.transform = `translateX(${positionX}px)`;
}

// Agregar evento de entrada a cada campo
inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    const currentValue = event.target.value; // Valor actual del campo
    if (currentValue.length < lastInputValue.length) {
      // Si se borra un carácter
      moveImage(-1); // Retroceder un paso
    } else if (currentValue.length > lastInputValue.length) {
      // Si se agrega un carácter
      moveImage(1); // Avanzar un paso
    }
    lastInputValue = currentValue; // Actualizar el valor registrado
  });

  // Inicializar el último valor registrado
  input.addEventListener("focus", (event) => {
    lastInputValue = event.target.value;
  });
});