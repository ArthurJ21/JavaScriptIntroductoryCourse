//* Metodos en JavaScript (Cadenas de texto) String
/**
 * GUÍA RÁPIDA DE MANIPULACIÓN DE STRINGS (CADENAS DE TEXTO)
*/

console.log("Hola, esto es un console log");

// Nuestra cadena de prueba (fíjate en los espacios a los lados)
let frase = "  Aprendiendo JavaScript es Genial  ";

console.log(frase); // Esto solo imprime el valor de la variable

// ---------------------------------------------------------
// 1. PROPIEDAD: .length
// No lleva (), solo nos da información sobre el tamaño.
// Cuenta letras, números, símbolos y ESPACIOS.
// ---------------------------------------------------------
console.log("Longitud total:", frase.length); // 36

// ---------------------------------------------------------
// 2. MÉTODO: .trim()
// "Limpia" los espacios vacíos al inicio y al final.
// Muy útil para procesar datos que escribe un usuario.
// ---------------------------------------------------------
let fraseLimpia = frase.trim();
console.log("Sin espacios extras:", fraseLimpia); // "Aprendiendo JavaScript es Genial"


// ---------------------------------------------------------
// 3. MÉTODOS: .toUpperCase() y .toLowerCase()
// Transforman todo el texto a Mayúsculas o Minúsculas.
// ---------------------------------------------------------
console.log("Todo Mayúsculas:", fraseLimpia.toUpperCase());
console.log("Todo Minúsculas:", fraseLimpia.toLowerCase());


// ---------------------------------------------------------
// 4. MÉTODO: .includes(texto)
// Pregunta si una palabra existe dentro del string.
// Devuelve un Booleano: true (sí) o false (no).
// ---------------------------------------------------------
console.log("¿Contiene 'JavaScript'?:", fraseLimpia.includes("JavaScript")); // true

// ---------------------------------------------------------
// 5. MÉTODO: .indexOf(carácter)
// Busca la posición de una letra o palabra. 
//! ¡OJO! En programación empezamos a contar desde el 0.
// ---------------------------------------------------------
console.log("¿En qué índice está la 'J'?:", fraseLimpia.indexOf("J")); // 12


// ---------------------------------------------------------
// 6. MÉTODO: .startsWith() y .endsWith()
// Comprueban el inicio y el final de la cadena.
// ---------------------------------------------------------
console.log("¿Empieza con 'Ap'?:", fraseLimpia.startsWith("Ap")); // true
console.log("¿Termina con 'Malo'?:", fraseLimpia.endsWith("Malo")); // false


// ---------------------------------------------------------
// 7. MÉTODOS: .slice() y .substring()
// Sirven para "cortar" un pedazo del texto.
// (inicio, fin - el fin no se incluye en el resultado).
// ---------------------------------------------------------
console.log("7. Corte (índice 0 al 11):", fraseLimpia.slice(0, 11)); // "Aprendiendo"


// ---------------------------------------------------------
// 8. MÉTODO: .replace(viejo, nuevo)
// Busca una palabra y la cambia por otra.
// ---------------------------------------------------------
let nuevaFrase = fraseLimpia.replace("Genial", "Increíble");
console.log("8. Reemplazo:", nuevaFrase); // "Aprendiendo JavaScript es Increíble"


// ---------------------------------------------------------
// 9. MÉTODO: .split(separador)
// Divide el texto y lo convierte en una LISTA (Array).
// Si usas " " (un espacio), lo divide por palabras.
// ---------------------------------------------------------
let palabras = fraseLimpia.split(" ");
console.log("9. Convertido a Array:", palabras); // ["Aprendiendo", "JavaScript", "es", "Genial"]