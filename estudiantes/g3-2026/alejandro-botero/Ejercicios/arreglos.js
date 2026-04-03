console.log("\n=== 1. CREACIÓN Y ACCESO BÁSICO A ARRAYS ===\n");

const ciudades = ['Bogotá', 'Medellín', 'Cali'];
console.log("Array de ciudades:", ciudades);
console.log("Número de elementos (longitud):", ciudades.length);
console.log("Primera ciudad (índice 0):", ciudades[0]);
console.log("Segunda ciudad (índice 1):", ciudades[1]);
console.log("Tercera ciudad (índice 2):", ciudades[2]);
console.log("Cuarta ciudad (índice 3):", ciudades[3]);

const variado = [42, 'JavaScript', false, undefined];
console.log("\nArray con tipos variados:", variado);

let ciudad = ciudades[0];
console.log("\nComparación de .length:");
console.log("Longitud del string 'Bogotá':", ciudad.length);
console.log("Longitud del array ciudades:", ciudades.length);

console.log("\n=== 2. MÉTODOS DE MODIFICACIÓN DE ARRAYS ===\n");

let pasajeros = ["Carlos", "María"];
console.log("Pasajeros iniciales:", pasajeros);
console.log("Personas en la fila:", pasajeros.length);

console.log("\n--- MÉTODO PUSH ---");
pasajeros.push("Diego");
console.log("Pasajeros después de push('Diego'):", pasajeros);
console.log("Nueva longitud:", pasajeros.length);

console.log("\n--- MÉTODO SHIFT ---");
let primerPasajero = pasajeros.shift();
console.log("Primer pasajero:", primerPasajero);
console.log("Pasajeros después de shift():", pasajeros);

console.log("\n--- MÉTODO UNSHIFT ---");
pasajeros.unshift("VIP");
console.log("Pasajeros después de unshift('VIP'):", pasajeros);
console.log("Nueva longitud:", pasajeros.length);

console.log("\n--- MÉTODO POP ---");
let ultimoPasajero = pasajeros.pop();
console.log("Último pasajero:", ultimoPasajero);
console.log("Pasajeros final:", pasajeros);
console.log("Longitud final:", pasajeros.length);

console.log("\n=== 3. MÉTODOS DE BÚSQUEDA Y EXTRACCIÓN ===\n");

let ingredientes = ["Arroz", "Frijoles", "Carne", "Plátano"];
console.log("Ingredientes iniciales:", ingredientes);

console.log("\n--- MÉTODO INCLUDES ---");
console.log("¿Tenemos frijoles?", ingredientes.includes("Frijoles"));
console.log("¿Tenemos salsa?", ingredientes.includes("Salsa"));

console.log("\n--- MÉTODO INDEXOF ---");
if (ingredientes.includes("Carne")) {
    let posicion = ingredientes.indexOf("Carne");
    console.log(`La carne está en el índice ${posicion}`);
}

console.log("\n--- MÉTODO SLICE ---");
console.log("Creamos un kit básico con los dos primeros...");
let kitBasico = ingredientes.slice(0, 2);
console.log("Kit básico (copia):", kitBasico);
console.log("Ingredientes original (sin cambios):", ingredientes);

console.log("\n--- EJEMPLOS ADICIONALES DE SLICE ---");
let letras = ["X", "Y", "Z", "W", "V"];
console.log("Array completo:", letras);
console.log("slice(1, 3):", letras.slice(1, 3));
console.log("slice(2, 4):", letras.slice(2, 4));
console.log("slice(1):", letras.slice(1));
console.log("slice(0, -1):", letras.slice(0, -1));

console.log("\n--- MÉTODO SPLICE ---");
console.log("Reemplazamos 'Plátano' por 'Aguacate' y 'Queso'...");
console.log("Antes:", ingredientes);
ingredientes.splice(3, 1, "Aguacate", "Queso");
console.log("Después:", ingredientes);

console.log("\n=== EJEMPLO PRÁCTICO: GESTIÓN DE INVENTARIO ===\n");

let productos = ["Camisa", "Pantalón", "Zapatos"];
console.log("Productos iniciales:", productos);

productos.push("Calcetines");
console.log("Después de agregar 'Calcetines':", productos);

let productoVendido = productos.shift();
console.log(`Producto vendido: ${productoVendido}`);
console.log("Productos restantes:", productos);

if (productos.includes("Zapatos")) {
    console.log("¡Tenemos 'Zapatos' disponible!");
}

let seleccion = productos.slice(0, 2);
console.log("Selección especial:", seleccion);
console.log("Inventario completo sigue intacto:", productos);
