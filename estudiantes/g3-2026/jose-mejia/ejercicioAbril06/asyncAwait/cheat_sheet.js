/**
 * 🔖 CHEAT SHEET: async/await
 * 
 * Referencia rápida de la sintaxis y patrones más comunes
 */

// ═══════════════════════════════════════════════════════════════════════════
// 🟢 PATRÓN BÁSICO
// ═══════════════════════════════════════════════════════════════════════════

async function basico() {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 VALIDAR QUE LA RESPUESTA SEA EXITOSA
// ═══════════════════════════════════════════════════════════════════════════

async function conValidacion() {
  const respuesta = await fetch(url);
  
  if (!respuesta.ok) {
    throw new Error(`HTTP Error: ${respuesta.status}`);
  }
  
  const datos = await respuesta.json();
  return datos;
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 MÚLTIPLES SOLICITUDES - UNA POR UNA
// ═══════════════════════════════════════════════════════════════════════════

async function secuencial() {
  const resp1 = await fetch(url1);
  const datos1 = await resp1.json();
  
  const resp2 = await fetch(url2);
  const datos2 = await resp2.json();
  
  return { datos1, datos2 };
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 MÚLTIPLES SOLICITUDES - TODAS AL MISMO TIEMPO (MÁS RÁPIDO)
// ═══════════════════════════════════════════════════════════════════════════

async function paralelo() {
  const [datos1, datos2, datos3] = await Promise.all([
    fetch(url1).then(r => r.json()),
    fetch(url2).then(r => r.json()),
    fetch(url3).then(r => r.json())
  ]);
  
  return { datos1, datos2, datos3 };
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 CON PARÁMETROS
// ═══════════════════════════════════════════════════════════════════════════

async function conParametros(userId, postId) {
  const url = `https://api.ejemplo.com/users/${userId}/posts/${postId}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 JSON PLACEHOLDER EJEMPLOS RÁPIDOS
// ═══════════════════════════════════════════════════════════════════════════

// Obtener un usuario
async function getUser(id) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return await resp.json();
}

// Obtener posts de un usuario
async function getUserPosts(userId) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return await resp.json();
}

// Obtener comentarios de un post
async function getPostComments(postId) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  return await resp.json();
}

// Obtener fotos de un álbum
async function getAlbumPhotos(albumId) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
  return await resp.json();
}

// Obtener todas las tareas completadas
async function getCompletedTodos() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos?completed=true");
  return await resp.json();
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 CON HEADERS PERSONALIZADOS
// ═══════════════════════════════════════════════════════════════════════════

async function conHeaders() {
  const respuesta = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token123'
    }
  });
  
  return await respuesta.json();
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 POST - ENVIAR DATOS
// ═══════════════════════════════════════════════════════════════════════════

async function enviarDatos(datos) {
  const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });
  
  return await respuesta.json();
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 MANEJO AVANZADO DE ERRORES
// ═══════════════════════════════════════════════════════════════════════════

async function conErrorAvanzado() {
  try {
    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}: ${respuesta.statusText}`);
    }
    
    const datos = await respuesta.json();
    return datos;
    
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de red:", error.message);
    } else if (error instanceof SyntaxError) {
      console.error("JSON inválido:", error.message);
    } else {
      console.error("Otro error:", error.message);
    }
    
    return null;
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 CON TIMEOUT (Máximo tiempo de espera)
// ═══════════════════════════════════════════════════════════════════════════

async function conTimeout(url, timeoutMs = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const respuesta = await fetch(url, { signal: controller.signal });
    return await respuesta.json();
  } finally {
    clearTimeout(timeout);
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 REINTENTOS AUTOMÁTICOS
// ═══════════════════════════════════════════════════════════════════════════

async function conReintentos(url, intentosMax = 3) {
  for (let intento = 1; intento <= intentosMax; intento++) {
    try {
      const respuesta = await fetch(url);
      if (respuesta.ok) {
        return await respuesta.json();
      }
    } catch (error) {
      console.log(`Intento ${intento} falló`);
      if (intento === intentosMax) throw error;
    }
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 CARGAR MÚLTIPLES DATOS DE UN USUARIO
// ═══════════════════════════════════════════════════════════════════════════

async function getUserComplete(userId) {
  const [usuario, posts, albums, todos] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(r => r.json()),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(r => r.json()),
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(r => r.json()),
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`).then(r => r.json())
  ]);
  
  return {
    usuario,
    postCount: posts.length,
    albumCount: albums.length,
    todoCount: todos.length,
    completedTodos: todos.filter(t => t.completed).length
  };
}


// ═══════════════════════════════════════════════════════════════════════════
// 🟢 CON INDICADOR DE CARGA
// ═══════════════════════════════════════════════════════════════════════════

async function conIndicador(url) {
  console.log("⏳ Cargando...");
  
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log("✓ Completado");
    return datos;
  } catch (error) {
    console.log("✗ Error");
    throw error;
  }
}


// ═══════════════════════════════════════════════════════════════════════════
// TABLA DE REFERENCIA RÁPIDA
// ═══════════════════════════════════════════════════════════════════════════

/*
SINTAXIS BÁSICA:
  async function nombre() {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      console.error(error);
    }
  }

MÉTODOS HTTP:
  GET     → Obtener datos
  POST    → Crear datos
  PUT     → Actualizar datos
  DELETE  → Eliminar datos
  PATCH   → Actualización parcial

STATUS CODES COMUNES:
  200  OK - Solicitud exitosa
  201  Created - Recurso creado
  400  Bad Request - Error en la solicitud
  401  Unauthorized - Sin autenticación
  404  Not Found - Recurso no encontrado
  500  Server Error - Error del servidor

RESPONSE METHODS:
  .json()      → Convierte a JSON
  .text()      → Convierte a texto
  .blob()      → Convierte a blob (para archivos)
  .arrayBuffer() → Convierte a array buffer

VALIDACIÓN:
  respuesta.ok       → true si status 200-299
  respuesta.status   → Número del código HTTP
  respuesta.headers  → Headers de la respuesta

ERRORES COMUNES:
  Error de red      → catch { }
  JSON inválido     → SyntaxError
  Endpoint no existe → respuesta.status 404
*/
