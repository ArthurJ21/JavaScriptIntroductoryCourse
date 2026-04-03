console.log("\n=== 1. PROPIEDAD LENGTH ===\n");

let texto = "  Procesando Datos Importantes  ";
console.log("Texto original:", texto);
console.log("Longitud total:", texto.length);

console.log("\n=== 2. MÉTODO TRIM ===\n");

let textoLimpio = texto.trim();
console.log("Sin espacios:", textoLimpio);

console.log("\n=== 3. TOUPPERCASE Y TOLOWERCASE ===\n");

console.log("MAYÚSCULAS:", textoLimpio.toUpperCase());
console.log("minúsculas:", textoLimpio.toLowerCase());

console.log("\n=== 4. MÉTODO INCLUDES ===\n");

console.log("¿Contiene 'Datos'?:", textoLimpio.includes("Datos"));
console.log("¿Contiene 'Error'?:", textoLimpio.includes("Error"));

console.log("\n=== 5. MÉTODO INDEXOF ===\n");

console.log("Posición 'P':", textoLimpio.indexOf("P"));
console.log("Posición 'datos':", textoLimpio.indexOf("datos"));

console.log("\n=== 6. STARTSWITH Y ENDSWITH ===\n");

console.log("Empieza con 'Pro':", textoLimpio.startsWith("Pro"));
console.log("Termina con 'tes':", textoLimpio.endsWith("tes"));

console.log("\n=== 7. MÉTODOS SLICE ===\n");

console.log("Corte 0-10:", textoLimpio.slice(0, 10));
console.log("Desde posición 12:", textoLimpio.slice(12));

console.log("\n=== 8. MÉTODO REPLACE ===\n");

let textoNuevo = textoLimpio.replace("Importantes", "Críticos");
console.log("Reemplazo:", textoNuevo);

console.log("\n=== 9. MÉTODO SPLIT ===\n");

let palabras = textoLimpio.split(" ");
console.log("Dividido:", palabras);
console.log("Total palabras:", palabras.length);
