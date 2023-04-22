AOS.init({
    // Configuraciones que se pueden anular por elemento, mediante los atributos `data-aos-*`:
    offset: 120, // desplazamiento (en px) desde el punto de activación original
    delay: 0, // valores de 0 a 3000, con paso 50ms
    duration: 900, // valores de 0 a 3000, con paso 50ms
    easing: 'ease', //aceleración predeterminada para animaciones AOS
    once: false, // si la animación debe ocurrir solo una vez, mientras se desplaza hacia abajo
    mirror: false, //si los elementos deben animarse mientras se desplaza más allá de ellos
    anchorPlacement: 'top-bottom', // define qué posición del elemento con respecto a la ventana debe activar la animación

});

// Funcionalidad del boton de contacto.
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const botonEnviar = document.getElementById("enviar");
const confirmacion = document.getElementById("confirmacion");
const noConfirm = document.getElementById("noConfirm");

//Agregamos un "event listener" al botón de enviar que escucha cuando se hace clic
botonEnviar.addEventListener("click", function(event) {
  //Evitamos que se envíe el formulario por defecto
  event.preventDefault();
  
  //Verificamos que los campos del formulario no estén vacíos
  if (nombre.value === "" || apellido.value === "" || correo.value === "" || asunto.value === "" || mensaje.value === "") {
    //Si algún campo está vacío, mostramos el mensaje de error
    noConfirm.innerHTML = "Complete los campos";
  } else {
    //Si todos los campos están completos, mostramos el mensaje de confirmación
    confirmacion.innerHTML = "Mensaje enviado";
  }
});


// Carrito de compras


