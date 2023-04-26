function convertir(){
    let dolares = parseFloat(document.getElementById("dolares").value);
    let pesos = dolares * 490;
    document.getElementById("pesos").value = pesos;
}

// Funcionalidad del boton de contacto.
const enviar = document.getElementById("enviar");
const nombre = document.getElementById("nombre");
const noConfirm = document.getElementById("noConfirm");
const form = document.getElementById("formulario-compra");

//Agregamos un "event listener" al botón de enviar que escucha cuando se hace clic
enviar.addEventListener("click", function(event) {
  //Evitamos que se envíe el formulario por defecto
    event.preventDefault();
    let regCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let warning = "";
    let entrar = false;
  //Verificamos que los campos del formulario no estén vacíos
    if (nombre.value === "") {
    warning += `<p>Agregue un nombre</p>`;
    entrar = true;
}
    if (!regCorreo.test(correo.value)) {
    warning += `<p>Agregue un correo válido</p>`;
    entrar = true;
}
    if (entrar) {
        alerta.innerHTML = warning;
    }else{
        Swal.fire({
            title: "¡Compra realizada correctamente!",
            text: "Revise su correo por favor",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
        setTimeout(() => {
            form.reset();
            location.href = "index.html";
        }, 3000);
    }
});