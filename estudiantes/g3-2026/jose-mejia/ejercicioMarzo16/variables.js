// Variable global
var mensajeGlobal = "Hola, soy una variable global";

// Variable local
function mostrarMensajes() {
    var mensajeLocal = "Hola, soy una variable local";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}

mostrarMensajes();

// console.log(mensajeLocal); //ejemplo de error al intentar acceder a una variable local fuera de su función