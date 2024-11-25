
// Slider automático para la sección de promociones
let currentSlide = 0;
const slides = document.querySelectorAll('.promo-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Cambia la imagen cada 3 segundos
setInterval(nextSlide, 3000);



const historial = [];

function boton() {
  const resultado = "Pala Fugazzetta Con Panceta";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton2() {
  const resultado = "Pala 4 Quesos";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton3() {
  const resultado = "Pala Margharita";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton4() {
  const resultado = "Pala SalchiCheddar";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}



document.getElementById("boton").addEventListener("click", boton);
document.getElementById("boton2").addEventListener("click", boton2);
document.getElementById("boton3").addEventListener("click", boton3);
document.getElementById("boton4").addEventListener("click", boton4);



function boton5() {
  const resultado = "Empanadas de Jamon y Queso";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton6() {
  const resultado = "Empanadas de Carne Suave";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton7() {
  const resultado = "Empanadas de RoqueFort";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}

function boton8() {
  const resultado = "Empanadas de Verdura";
  historial.push;
  document.getElementById("historial").innerHTML += `<li>${resultado}</li>`;
}



document.getElementById("boton5").addEventListener("click", boton5);
document.getElementById("boton6").addEventListener("click", boton6);
document.getElementById("boton7").addEventListener("click", boton7);
document.getElementById("boton8").addEventListener("click", boton8);

