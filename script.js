
let nombre = "aby";

nombre = "abby"

console.log(nombre)

let nombre1 = "Abigail"
let pais = "Argentina"
let porque = "ya que quiero buscar una salida laboral con la programación"

let textoParrafo = document.querySelector(".parrafo2");

function changeText(nombre, pais, porque) {
  let contenido = `¡Bienvenido a mi página! Aquí, aprenderás más sobre mí Me llamo ${nombre1}, naci y vivo en ${pais}. Quiero aprender más de programación ${porque}`

  return contenido;

}

textoParrafo.innerHTML = changeText(nombre1, pais, porque);

//MENU

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

//FORMULARIOS

const form = document.getElementById('form');
const usuario = document.getElementById('usuario')
const errorAviso = document.getElementById('error')

function formulariosValidacion() {
  let advertencia = '';
  let validoElFormulario = true
  errorAviso.innerHTML = ''

  if(usuario.value.length < 7){
    advertencia += 'Tu nombre de usuario deberia ser mayor a 7 digitos'
    validoElFormulario =false
  }

  if(!validoElFormulario){
    errorAviso.innerHTML = advertencia
  } else {
    errorAviso.innerHTML = 'Formulario enviado'
    errorAviso.classList.remove('error')
  }
  return validoElFormulario

}
form.addEventListener("submit", (e) => {
  if (formulariosValidacion()) {
    // Si la validación es true se enviara el formulario
    alert('el formulario se envio con exito')
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe
  }
});











