const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const f = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

f.addEventListener("submit", function(e) {
    e.preventDefault();

    const {nombre, email, mensaje} = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos deben estar completados", true);
        return;
    }

    mostrarAlerta("Formulario enviado correctamente");

})

function mostrarAlerta(texto, error = null ) {
    const alerta = document.createElement("P");
    const mensaje = document.createTextNode(texto);

    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("correcto");
    }

    alerta.appendChild(mensaje);
    f.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}