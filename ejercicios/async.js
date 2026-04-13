/*
  async.js

  Este archivo explica los conceptos básicos de programación asíncrona en JavaScript.
  Incluye ejemplos de:
  1. Ejecución asíncrona con setTimeout
  2. Callbacks
  3. Promesas
  4. Uso de fetch con async/await
*/

// 1. Ejecución asíncrona con setTimeout
// ------------------------------------
// setTimeout permite que una función se ejecute después de un retraso.
console.log("Inicio");

setTimeout(() => {
  console.log("Esto aparece después de 2 segundos");
}, 2000);

console.log("Fin");

// El orden de salida será:
// Inicio
// Fin
// Esto aparece después de 2 segundos


// 2. Callbacks
// ------------
// Un callback es una función que se pasa como argumento y se invoca cuando termina otra operación.
function saludar(nombre, callback) {
  console.log("Hola " + nombre);
  callback();
}

function despedida() {
  console.log("Adiós!");
}

saludar("Ana", despedida);

// En este ejemplo, primero se imprime el saludo y luego se llama al callback para despedirse.


// 3. Promesas
// ------------
// Las promesas representan una operación asíncrona que puede acabar en éxito (resolve) o error (reject).
const promesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve("La operación fue exitosa");
  } else {
    reject("Hubo un error");
  }
});

promesa
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });

// .then se ejecuta cuando la promesa se resuelve.
// .catch se ejecuta cuando la promesa se rechaza.


// 4. Fetch y async/await
// ----------------------
// fetch devuelve una promesa que representa la respuesta de una solicitud HTTP.
// async/await permite escribir código asíncrono de forma más legible.
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/albums");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log("Error:", error);
  }
}

obtenerUsuarios();

// Con await, esperamos a que la promesa de fetch y la promesa de respuesta.json() se resuelvan.


// 5. Resumen rápido
// ------------------
// - Las operaciones síncronas se ejecutan en orden.
// - Las operaciones asíncronas pueden completarse después de otras instrucciones.
// - Los callbacks son la forma tradicional de manejar asincronía.
// - Las promesas mejoran el manejo de errores y la legibilidad.
// - async/await es una sintaxis moderna para trabajar con promesas.
