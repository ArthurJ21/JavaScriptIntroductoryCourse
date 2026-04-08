/**
 * 📚 GUÍA EDUCATIVA: async/await
 * 
 * CONCEPTOS CLAVE
 */

// ═══════════════════════════════════════════════════════════════════════════
// 1. ¿QUÉ ES ASYNC?
// ═══════════════════════════════════════════════════════════════════════════

// Palabra clave que convierte una función en asincrónica
// Permite usar 'await' dentro de ella

// SIN ASYNC (función normal):
function obtenerDatos1() {
  return "datos";
}

// CON ASYNC (función asincrónica):
async function obtenerDatos2() {
  return "datos";
}

// La diferencia: async permite operaciones que tardan tiempo sin bloquear


// ═══════════════════════════════════════════════════════════════════════════
// 2. ¿QUÉ ES AWAIT?
// ═══════════════════════════════════════════════════════════════════════════

// Pausa en una línea hasta que la Promesa se resuelva
// SOLO se puede usar dentro de funciones async

async function ejemplo() {
  // Espera a que fetch() retorne una respuesta
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  
  // Una vez que tenemos respuesta, continuamos
  const datos = await respuesta.json();
  
  // Ahora 'datos' tiene la información
  console.log(datos);
}


// ═══════════════════════════════════════════════════════════════════════════
// 3. TRY/CATCH - MANEJO DE ERRORES
// ═══════════════════════════════════════════════════════════════════════════

async function obtenerUserSafe(userId) {
  try {
    // Aquí pueden ocurrir errores
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!respuesta.ok) {
      throw new Error(`Usuario no encontrado: ${respuesta.status}`);
    }
    
    const usuario = await respuesta.json();
    return usuario;
    
  } catch (error) {
    // Si algo falla, capturamos aquí
    console.error("Error:", error.message);
    return null;
  }
}

// ERRORES COMUNES:
// - Sin conexión a internet
// - La API está caída
// - La URL es incorrecta
// - El recurso no existe


// ═══════════════════════════════════════════════════════════════════════════
// 4. FLUJO PASO A PASO
// ═══════════════════════════════════════════════════════════════════════════

async function flujoCompleto() {
  console.log("1️⃣ Inicio de la función");
  
  // Paso 1: Hacer solicitud
  console.log("2️⃣ Haciendo solicitud a la API...");
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
  console.log("3️⃣ Respuesta recibida del servidor");
  
  // Paso 2: Verificar si fue exitosa
  if (!respuesta.ok) {
    console.log("4️⃣ Error! El servidor respondió con código:", respuesta.status);
    return;
  }
  
  // Paso 3: Convertir a JSON
  console.log("4️⃣ Convirtiendo respuesta a JSON...");
  const datos = await respuesta.json();
  console.log("5️⃣ ¡Datos listos!");
  
  // Paso 4: Usar los datos
  console.log("6️⃣ Mostrando datos:");
  console.log(`Nombre: ${datos.name}`);
  console.log(`Email: ${datos.email}`);
  console.log(`Teléfono: ${datos.phone}`);
}


// ═══════════════════════════════════════════════════════════════════════════
// 5. ENDPOINTS DISPONIBLES EN JSONPLACEHOLDER
// ═══════════════════════════════════════════════════════════════════════════

const ENDPOINTS = {
  users: "https://jsonplaceholder.typicode.com/users",      // 10 usuarios
  posts: "https://jsonplaceholder.typicode.com/posts",      // 100 posts
  comments: "https://jsonplaceholder.typicode.com/comments", // 500 comentarios
  albums: "https://jsonplaceholder.typicode.com/albums",    // 100 álbumes
  photos: "https://jsonplaceholder.typicode.com/photos",    // 5000 fotos
  todos: "https://jsonplaceholder.typicode.com/todos"       // 200 tareas
};


// ═══════════════════════════════════════════════════════════════════════════
// 6. COMPARACIÓN: ASYNC/AWAIT vs PROMISES vs CALLBACKS
// ═══════════════════════════════════════════════════════════════════════════

// FORMA ANTIGUA (Callbacks):
function obtenerDatosCallback(url, callback) {
  fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => callback(datos))
    .catch(error => console.error(error));
}

// FORMA INTERMEDIA (Promises):
function obtenerDatosPromise(url) {
  return fetch(url)
    .then(respuesta => respuesta.json())
    .catch(error => console.error(error));
}

// FORMA MODERNA (async/await): ✨
async function obtenerDatosAsync(url) {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}

// async/await es más legible y fácil de entender


// ═══════════════════════════════════════════════════════════════════════════
// 7. ESPERAR MÚLTIPLES SOLICITUDES
// ═══════════════════════════════════════════════════════════════════════════

// Esperar UNA por UNA (lento):
async function obtenerDatosSeparado() {
  const usuarios = await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r => r.json());
  const albums = await fetch("https://jsonplaceholder.typicode.com/albums?userId=1").then(r => r.json());
  return { usuarios, posts, albums };
}

// Esperar TODAS AL MISMO TIEMPO (rápido):
async function obtenerDatosParalelo() {
  const [usuarios, posts, albums] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/albums?userId=1").then(r => r.json())
  ]);
  return { usuarios, posts, albums };
}


// ═══════════════════════════════════════════════════════════════════════════
// 8. EJEMPLO PRÁCTICO COMPLETO
// ═══════════════════════════════════════════════════════════════════════════

async function mostrarInformacionUsuario(userId) {
  try {
    // 1. Obtener el usuario
    const respuestaUsuario = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    
    if (!respuestaUsuario.ok) {
      throw new Error("Usuario no encontrado");
    }
    
    const usuario = await respuestaUsuario.json();
    
    // 2. Obtener sus posts
    const respuestaPosts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const posts = await respuestaPosts.json();
    
    // 3. Obtener sus álbumes
    const respuestaAlbumes = await fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    const albumes = await respuestaAlbumes.json();
    
    // 4. Mostrar información
    console.log("═══════════════════════════════════");
    console.log(`Usuario: ${usuario.name}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Posts: ${posts.length}`);
    console.log(`Álbumes: ${albumes.length}`);
    console.log("═══════════════════════════════════");
    
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Uso:
// mostrarInformacionUsuario(1);


// ═══════════════════════════════════════════════════════════════════════════
// ¡AHORA PRUEBA!
// ═══════════════════════════════════════════════════════════════════════════

console.log("Abre el archivo index.html en tu navegador para ver los ejercicios interactivos");
console.log("O descomenta alguna función y ejecútala en la consola");
