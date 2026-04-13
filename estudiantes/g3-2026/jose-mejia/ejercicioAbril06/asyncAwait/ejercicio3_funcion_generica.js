/**
 * EJERCICIO 3: Función Genérica Reutilizable
 * 
 * Este es un paso adelante. En lugar de crear una función para cada endpoint,
 * creamos una función genérica que funciona con cualquier recurso.
 */

// Esta función puede usarse para CUALQUIER endpoint de JSONPlaceholder
async function obtenerDatos(endpoint) {
  try {
    const url = `https://jsonplaceholder.typicode.com${endpoint}`;
    console.log(`🔄 Buscando datos en: ${url}\n`);
    
    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    
    const datos = await respuesta.json();
    
    console.log(`✓ Se obtuvieron ${datos.length} registros\n`);
    
    return datos;
    
  } catch (error) {
    console.error(`✗ Error: ${error.message}`);
    return null;
  }
}

// EJEMPLOS DE USO:
// Descomenta la línea que quieras ejecutar

// Obtener 10 usuarios
// obtenerDatos("/users");

// Obtener 200 tareas
// obtenerDatos("/todos");

// Obtener 100 posts
// obtenerDatos("/posts");

// Obtener 100 álbumes
// obtenerDatos("/albums");

// Obtener 500 comentarios
// obtenerDatos("/comments");

// Obtener 5000 fotos
obtenerDatos("/photos");
