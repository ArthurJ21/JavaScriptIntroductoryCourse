/**
 * EJERCICIO 1: Obtener Tareas (Todos) - Versión Educativa
 * 
 * Este ejercicio usa async/await para hacer una solicitud HTTP
 * a la API JSONPlaceholder y obtener una lista de tareas.
 * 
 * ¿QUÉ APRENDEREMOS?
 * - Cómo usar async para crear funciones asincrónicas
 * - Cómo usar await para esperar respuestas
 * - Manejo de errores con try/catch
 * - Cómo parsear JSON desde una API
 */

// Paso 1: Definir una función asincrónica
// 'async' le indica a JavaScript que esta función puede tener operaciones que tarden tiempo
async function obtenerTareas() {
  try {
    // Paso 2: Hacer una solicitud HTTP
    // fetch() pide datos a una URL
    // await espera a que la respuesta llegue (puede tardar tiempo en internet)
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    
    // Paso 3: Verificar si la respuesta fue exitosa
    // respuesta.ok es true si el servidor respondió correctamente (código 200)
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    
    // Paso 4: Convertir la respuesta a formato JSON
    // respuesta.json() convierte el texto en objetos JavaScript
    // await espera a que termine la conversión
    const datos = await respuesta.json();
    
    // Paso 5: Mostrar los datos en la consola
    console.log("✓ Tareas obtenidas exitosamente:");
    console.log(`Total de tareas: ${datos.length}`);
    
    // Mostrar solo las primeras 5 tareas para no saturar la consola
    console.log("\nPrimeras 5 tareas:");
    datos.slice(0, 5).forEach((tarea, indice) => {
      console.log(`${indice + 1}. ${tarea.title}`);
      console.log(`   Estado: ${tarea.completed ? "✓ Completada" : "✗ Pendiente"}`);
    });
    
    return datos; // Retornar los datos para usarlos si es necesario
    
  } catch (error) {
    // Paso 6: Si algo falla, capturamos el error aquí
    // Esto puede ocurrir si no hay conexión a internet o la API está caída
    console.error("✗ Error al obtener las tareas:", error.message);
  }
}

// Paso 7: Ejecutar la función
// Llamamos a la función para que comience la solicitud
obtenerTareas();
