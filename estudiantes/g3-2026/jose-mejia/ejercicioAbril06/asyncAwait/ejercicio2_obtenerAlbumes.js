/**
 * EJERCICIO 2: Obtener Álbumes - Versión Mejorada
 * 
 * Este ejercicio es una variación que obtiene álbumes en lugar de tareas.
 * Muestra cómo reutilizar el patrón async/await para diferentes recursos.
 */

async function obtenerAlbumes() {
  try {
    // Solicitud al endpoint /albums
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/albums");
    
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    
    const datos = await respuesta.json();
    
    console.log("📀 ÁLBUMES OBTENIDOS:\n");
    console.log(`Total de álbumes: ${datos.length}\n`);
    
    // Mostrar información de los primeros 3 álbumes
    console.log("Primeros 3 álbumes:");
    datos.slice(0, 3).forEach((album) => {
      console.log(`\nID: ${album.id}`);
      console.log(`Título: ${album.title}`);
      console.log(`Usuario ID: ${album.userId}`);
    });
    
    return datos;
    
  } catch (error) {
    console.error("Error al obtener los álbumes:", error.message);
  }
}

obtenerAlbumes();
