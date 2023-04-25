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
  let regCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let warning = "";
  let entrar = false;
  //Verificamos que los campos del formulario no estén vacíos
  if (nombre.value === "") {
    warning += `<p>Agregue un nombre</p>`;
    entrar = true;
  }
  if (apellido.value === "") {
    warning += `<p>Agregue un apellido</p>`;
    entrar = true;
  }
  if (!regCorreo.test(correo.value)) {
    warning += `<p>Agregue un correo válido</p>`;
    entrar = true;
  }
  if (asunto.value === "") {
    warning += `<p>Agregue un asunto</p>`;
    entrar = true;
  }
  if (mensaje.value === "") {
    warning += `<p>Agregue un mensaje</p>`;
    entrar = true;
  }
  if (entrar) {
    alerta.innerHTML = warning;
  }else{
    //Si todos los campos están completos, mostramos el mensaje de confirmación
    alerta.innerHTML = `<p class="confirmacion">¡Excelente! su mensaje ha sido enviado con éxito.</p>`;
  }
});


// Carrito de compras

const cursos = [
  {
      id: 001,
      nombre: "Desarrollo Web",
      cantidad: 1,
      precio: 149.99,
      descripcion: "Aquí aprenderás tecnologías para el desarrollo de páginas web",
      icono: "ri-html5-fill"
  },
  {
      id: 002,
      nombre: "Desarrollo móvil",
      cantidad: 1,
      precio: 100.99,
      descripcion: "Aprende las tecnologías necesarias para desarrollar aplicaciones para Android o iOS",
      icono: "ri-smartphone-line"
  },
  {
      id: 003,
      nombre: "Database",
      cantidad: 1,
      precio: 119.99,
      descripcion: "Aprenderás a diseñar, crear y administrar bases de datos con tecnologías como MySQL o MongoDB",
      icono: "ri-database-2-fill"
  },
  {
    id: 004,
    nombre: "Marketing Digital",
    cantidad: 1,
    precio: 99.99,
    descripcion: "En este Curso en línea de marketing digital aprenderas a promocionar productos y servicios.",
    icono: "ri-pie-chart-2-fill"
  },
  {
    id: 005,
    nombre: "Desarrollo BackEnd",
    cantidad: 1,
    precio: 200.99,
    descripcion: "Curso en línea de desarrollo back-end para crear aplicaciones web escalables y robustas.",
    icono: "ri-code-box-fill"
  },
  {
    id: 006,
    nombre: "React Js",
    cantidad: 1,
    precio: 149.99,
    descripcion: "Crea aplicaciones web interactivas y escalables usando React.",
    icono: "ri-reactjs-line"
  }
];
let carrito = [];
const contenedor = document.querySelector('#contenedor');
const carritoContador = document.querySelector('.carrito-contador');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const precioTotal = document.querySelector('#precioTotal');
const procesarCompra = document.querySelector('#procesarCompra')

cursos.forEach((curso)=>{
  const{id, nombre, cantidad, precio, icono, descripcion} = curso;
  contenedor.innerHTML += 
  `
  <div class="col-lg-5 col-sm-5" data-aos="fade-down" data-aos-delay="150">
    <div class="service theme-shadow p-lg-5 p-4">
      <div class="iconbox">
        <i class="${icono}"></i>
      </div>
      <h5 class="mt-4 mb-3">${nombre}</h5>
      <p>${descripcion}</p>
      <p>Cantidad: ${cantidad}</p>
      <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${id})"> 
        Añadir al carrito 
      </button>
      <p class="text-center" id="precioCursos">$${precio} USD </p>
    </div>
  </div>
  `
});

function agregarAlCarrito(id) {
  const existe = carrito.some(curso => curso.id === id)
  if (existe) {
    const curso = carrito.map(curso => {
      if (curso.id === id) {
        curso.cantidad++
      }
    })
  }else{
    const i = cursos.find((curso) => curso.id === id)
    carrito.push(i)
  }
  mostrarCarrito();
}

if (procesarCompra) {
  procesarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      Swal.fire({
        title: "¡Tu carrito está vacio!",
        text: "Compra algo para continuar con la compra",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      location.href = "compra.html";
    }
  });
}

vaciarCarrito.addEventListener('click', ()=>{
  carrito.length = [];
  mostrarCarrito();
})

const mostrarCarrito = () =>{
  const carritoModal = document.querySelector('#carritoModal');
  carritoModal.innerHTML = '';
  carrito.forEach((curso)=>{
    const{id, nombre, cantidad, precio, icono} = curso;
    carritoModal.innerHTML +=
    `
    <div class="modal-contenedor container">
      <div class="icon-modal"> 
        <div class="iconbox">
          <i class="${icono}"></i>
        </div>
      </div>
      <div>
        <p><b>Producto:</b> ${nombre}</p>
        <p><b>Precio:</b> $${precio} USD</p>
        <p><b>Cantidad:</b> ${cantidad}</p>
        <button class="btn btn-danger" onclick="eliminarCurso(${id})">Eliminar curso</button>
      </div>
    </div>
    `
  });

  if (carrito.length === 0) {
    carritoModal.innerHTML = 
    `
    <p class="text-center fw-semibold fs-3">Carrito vacio</p>
    `
  }

  carritoContador.textContent = carrito.length;
  precioTotal.textContent = "$" + carrito.reduce((acc, curso) => acc + curso.cantidad * curso.precio, 0) + " USD";
};

if (carrito.length === 0) {
  carritoModal.innerHTML = 
  `
  <p class="text-center fw-semibold fs-3">Carrito vacio</p>
  `
}

function eliminarCurso(id){
  const cursoId = id;
  carrito = carrito.filter((curso) => curso.id !== cursoId);
  console.log(carrito);
  mostrarCarrito();
}




