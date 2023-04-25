(function () {
    'use strict'
  
  //Selecciono todos los forms con la clase needs-validation
    var forms = document.querySelectorAll('.needs-validation')

    //convierto la lista de forms en un array e itero sobre cada form
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault() //si el form no es valido evita que se envie y detiene el evento
            event.stopPropagation()
          }
          //agrego la clase de validacion
          form.classList.add('was-validated')
        }, false)
      })
  })()
