# 📚 Ejercicios de Async/Await - JSONPlaceholder API

## 🎯 Objetivo

Aprender a usar **async/await** para hacer solicitudes a una API de forma asincrónica, entendiendo cómo el código espera respuestas sin bloquear la ejecución.

---

## 📁 Archivos Incluidos

### 1. **ejercicio1_obtenerTodos.js** 📋

**Nivel:** Principiante  
**Concepto Principal:** Uso básico de async/await

Este es el más didáctico. Obtiene una lista de tareas (todos) de la API.

**Lo que aprenderás:**

- Cómo crear una función `async`
- Cómo usar `await` para esperar respuestas
- Validación de respuestas con `.ok`
- Conversión de respuesta JSON
- Manejo de errores con `try/catch`
- Iteración y display de datos

```javascript
async function obtenerTareas() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

### 2. **ejercicio2_obtenerAlbumes.js** 📀

**Nivel:** Principiante  
**Concepto Principal:** Reutilización del patrón

Idéntico al anterior pero con otro endpoint (`/albums`). Muestra que el patrón funciona con cualquier recurso.

---

### 3. **ejercicio3_funcion_generica.js** 🔧

**Nivel:** Intermedio  
**Concepto Principal:** Abstracción

Una única función que puede obtener cualquier endpoint. Es más eficiente que copiar código.

```javascript
async function obtenerDatos(endpoint) {
  const url = `https://jsonplaceholder.typicode.com${endpoint}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

obtenerDatos("/users"); // Obtiene usuarios
obtenerDatos("/posts"); // Obtiene posts
obtenerDatos("/albums"); // Obtiene álbumes
```

---

### 4. **ejercicio4_obtenerUsuarios.js** 👥
**Nivel:** Principiante  
**Concepto Principal:** Obtener usuarios específicos

Similar a los ejercicios 1 y 2, pero obtiene usuarios con información detallada (nombre, email, teléfono, etc.).

---

### 5. **index.html** 🌐

**Mejor para:** Práctica interactiva en el navegador

**Características:**

- Interfaz visual con botones
- Puedes ver resultados en tiempo real
- Manejo de errores visible
- 4 ejemplos diferentes (Tareas, Álbumes, Usuarios, Posts)
- Limite de resultados para no saturar la pantalla

**Cómo usarlo:**

1. Abre el archivo en tu navegador
2. Hace clic en cualquier botón
3. Los datos aparecerán en la pantalla

---

### 6. **guia_educativa.js** 📖

**Mejor para:** Lectura y comprensión de conceptos

Contiene:

- Explicación de qué es `async`
- Explicación de qué es `await`
- Ejemplos de manejo de errores
- Comparación: async/await vs Promises vs Callbacks
- Ejemplo de múltiples solicitudes
- Ejemplo práctico completo

---

## 🚀 Cómo Usar

### Opción 1: Visual en Navegador (RECOMENDADO para aprender)

```bash
# Abre index.html en tu navegador
# Haz clic en los botones y ve cómo funciona en tiempo real
```

### Opción 2: En Node.js (para archivos .js)

```bash
# Desde la terminal
node ejercicio1_obtenerTodos.js
node ejercicio2_obtenerAlbumes.js
node ejercicio3_funcion_generica.js
```

### Opción 3: En la Consola del Navegador

```javascript
// Abre la consola (F12) en el navegador con cualquier página
// Copia y pega el código de cualquier archivo .js
// Presiona Enter para ejecutar
```

---

## 🔗 Endpoints Disponibles

La API JSONPlaceholder proporciona estos recursos:

| Endpoint    | Descripción        | Cantidad |
| ----------- | ------------------ | -------- |
| `/users`    | Usuarios de prueba | 10       |
| `/posts`    | Artículos/Posts    | 100      |
| `/comments` | Comentarios        | 500      |
| `/albums`   | Álbumes de fotos   | 100      |
| `/photos`   | Fotos              | 5000     |
| `/todos`    | Tareas             | 200      |

**Ejemplo de URL completa:**

- `https://jsonplaceholder.typicode.com/users`
- `https://jsonplaceholder.typicode.com/posts?userId=1` (posts del usuario 1)
- `https://jsonplaceholder.typicode.com/comments?postId=1` (comentarios del post 1)

---

## 📝 Conceptos Clave

### async

```javascript
async function miFunc() {
  // Esta función puede contener 'await'
}
```

- Transforma una función normal en asincrónica
- Permite usar `await` dentro de ella

### await

```javascript
const datos = await fetch(url);
```

- Pausa la ejecución en esa línea
- Espera a que la Promesa se resuelva
- SOLO funciona en funciones `async`

### try/catch

```javascript
try {
  // Código que puede fallar
  const respuesta = await fetch(url);
} catch (error) {
  // Se ejecuta si hay error
  console.error(error);
}
```

- Captura errores de red, API caída, etc.

---

## ❌ Errores Comunes

### Error 1: Usar `await` sin `async`

```javascript
❌ INCORRECTO:
function obtener() {
  const datos = await fetch(url); // Error!
}

✅ CORRECTO:
async function obtener() {
  const datos = await fetch(url); // OK
}
```

### Error 2: Olvidar `await`

```javascript
❌ INCORRECTO:
async function obtener() {
  const datos = fetch(url); // Retorna Promesa, no datos
  console.log(datos); // [Promise]
}

✅ CORRECTO:
async function obtener() {
  const datos = await fetch(url);
  console.log(datos); // Response object
}
```

### Error 3: No manejar errores

```javascript
❌ ARRIESGADO:
async function obtener() {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  // Si la API está caída, se detiene aquí
}

✅ SEGURO:
async function obtener() {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

## 🧠 Flujo Paso a Paso

Cuando ejecutas este código:

```javascript
async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  console.log(datos);
}

console.log("1. Antes");
obtenerDatos();
console.log("2. Después");
```

**La salida será:**

```
1. Antes
2. Después
[datos de la API aparecen aquí]
```

¿Por qué? Porque `obtenerDatos()` es asincrónica, JavaScript continúa con el resto del código sin esperar a que termine.

---

## 💡 Consejos

1. **Empieza con `index.html`** - Es visual y fácil de entender
2. **Lee los comentarios** - Cada línea tiene explicación
3. **Experimenta** - Cambia los endpoints, prueba diferentes datos
4. **Abre la consola (F12)** - Verás logs detallados de qué sucede
5. **Compara ejercicios** - Nota las similitudes entre ejercicio1, 2 y 3

---

## 🎓 Próximos Pasos

Una vez entiendas esto, puedes aprender:

- ✅ Promise.all() - Múltiples solicitudes paralelas
- ✅ Error handling avanzado
- ✅ Timeout en solicitudes
- ✅ Retry automático
- ✅ Cacheo de datos
- ✅ Uso de bibliotecas como axios o fetch mejorado

---

## 📚 Recursos Adicionales

- [MDN - async/await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN - Promise](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JSONPlaceholder - Documentación](https://jsonplaceholder.typicode.com/)
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

---

**¡Buena suerte aprendiendo! 🚀**
