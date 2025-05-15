const image = document.getElementById("image");
const inputs = document.querySelectorAll(".form_input input"); 
let positionX = 0; 
let lastInputValue = ""; 


function moveImage(direction) {
  const step = 9; 
  positionX += step * direction; 

  
  const formWidth = document.querySelector("form").offsetWidth; 
  if (positionX < 0) {
    positionX = 0; 
  } else if (positionX > formWidth - image.offsetWidth) {
    positionX = formWidth - image.offsetWidth; 
  }

  
  image.style.transform = `translateX(${positionX}px)`;
}


inputs.forEach((input) => {
  input.addEventListener("input", (event) => {
    const currentValue = event.target.value; 
    if (currentValue.length < lastInputValue.length) {
      
      moveImage(-1); 
    } else if (currentValue.length > lastInputValue.length) {
      
      moveImage(1); 
    }
    lastInputValue = currentValue; 
  });

  
  input.addEventListener("focus", (event) => {
    lastInputValue = event.target.value;
  });
});