/* ========================================
   TUTORIAL COMPLETO: FUNCIONES EN JAVASCRIPT
   ========================================

   Este archivo contiene una explicación completa de las funciones en JavaScript,
   desde conceptos básicos hasta temas más avanzados.
*/

console.log("\n=== 1. ¿QUÉ ES UNA FUNCIÓN? ===\n");

/*
   Una función es un bloque de código reutilizable que realiza una tarea específica.
   Las funciones nos permiten:
   - Organizar el código en partes más pequeñas y manejables
   - Reutilizar código sin repetirlo
   - Hacer el código más legible y mantenible
   - Dividir problemas complejos en tareas más simples

   Analogía: Una función es como una receta de cocina.
   - Ingredientes = parámetros
   - Instrucciones = código de la función
   - Resultado final = valor de retorno
*/

console.log("Primera función básica:");

// Declaración de función básica
function saludar() {
    console.log("¡Hola! Soy una función básica");
}

// Llamada a la función
saludar(); // Ejecuta la función
saludar(); // Podemos llamarla múltiples veces

console.log("\n=== 2. FUNCIONES CON PARÁMETROS ===\n");

/*
   Los parámetros son valores que podemos pasar a una función.
   Permiten que la función trabaje con diferentes datos cada vez que se llama.

   Sintaxis: function nombreFuncion(parametro1, parametro2) { ... }
*/

console.log("Función con un parámetro:");

function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
}

saludarPersona("Juan");      // Pasa "Juan" como nombre
saludarPersona("María");     // Pasa "María" como nombre
saludarPersona("Carlos");    // Pasa "Carlos" como nombre

console.log("\nFunción con múltiples parámetros:");

function presentarPersona(nombre, edad, ciudad) {
    console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
}

presentarPersona("Ana", 25, "Bogotá");
presentarPersona("Pedro", 30, "Medellín");
presentarPersona("Laura", 22, "Cali");

console.log("\n=== 3. FUNCIONES QUE RETORNAN VALORES ===\n");

/*
   Las funciones pueden devolver un valor usando la palabra clave 'return'.
   Esto permite que el resultado de la función se use en otras partes del código.

   Sintaxis: return valor;
   - La ejecución de la función se detiene cuando encuentra return
   - El valor retornado puede ser usado donde se llamó la función
*/

console.log("Función que retorna un saludo:");

function crearSaludo(nombre) {
    return `¡Hola, ${nombre}! Bienvenido a nuestro programa.`;
}

// Guardamos el resultado en una variable
let saludoJuan = crearSaludo("Juan");
console.log(saludoJuan);

// Usamos el resultado directamente
console.log(crearSaludo("María"));

console.log("\nFunción que calcula y retorna:");

function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area1 = calcularAreaRectangulo(5, 3);    // 15
let area2 = calcularAreaRectangulo(10, 8);   // 80
let area3 = calcularAreaRectangulo(7, 4);    // 28

console.log(`Área 1: ${area1}`);
console.log(`Área 2: ${area2}`);
console.log(`Área 3: ${area3}`);

// Podemos usar el resultado en cálculos más complejos
let areaTotal = area1 + area2 + area3;
console.log(`Área total de los tres rectángulos: ${areaTotal}`);

console.log("\n=== 4. FUNCIONES FLECHA (ARROW FUNCTIONS) ===\n");

/*
   Las funciones flecha son una sintaxis más moderna y concisa para escribir funciones.
   Son especialmente útiles para funciones simples y en métodos de arrays.

   Sintaxis básica: (parametros) => { código }
   Sintaxis simplificada: parametro => expresion (sin llaves ni return para una línea)
*/

console.log("Comparación entre función tradicional y flecha:");

// Función tradicional
function sumarTradicional(a, b) {
    return a + b;
}

// Función flecha equivalente
const sumarFlecha = (a, b) => {
    return a + b;
};

// Función flecha simplificada (una sola línea)
const sumarSimple = (a, b) => a + b;

console.log("Resultado función tradicional:", sumarTradicional(5, 3));  // 8
console.log("Resultado función flecha:", sumarFlecha(5, 3));          // 8
console.log("Resultado función simple:", sumarSimple(5, 3));          // 8

console.log("\nEjemplos de funciones flecha:");

// Sin parámetros
const saludarMundo = () => "¡Hola, mundo!";
console.log(saludarMundo());

// Un parámetro (puedes omitir paréntesis)
const cuadrado = num => num * num;
console.log(`Cuadrado de 5: ${calcularCuadrado(5)}`);

// Múltiples parámetros
const calcularPromedio = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;
console.log(`Promedio: ${calcularPromedio(85, 92, 78)}`);

console.log("\n=== 5. SCOPE Y VARIABLES LOCALES VS GLOBALES ===\n");

/*
   El scope (alcance) determina dónde puedes acceder a una variable.

   Variables GLOBALES: Declaradas fuera de cualquier función
   - Se pueden acceder desde cualquier parte del código
   - Pueden ser modificadas desde cualquier función

   Variables LOCALES: Declaradas dentro de una función
   - Solo existen dentro de esa función
   - No se pueden acceder desde fuera de la función
*/

console.log("Ejemplo de variables globales y locales:");

// Variable global
let contadorGlobal = 0;

function incrementarContador() {
    // Variable local (solo existe dentro de esta función)
    let contadorLocal = 0;

    contadorGlobal++;  // Modifica la variable global
    contadorLocal++;   // Modifica la variable local

    console.log(`Global: ${contadorGlobal}, Local: ${contadorLocal}`);
}

incrementarContador();  // Global: 1, Local: 1
incrementarContador();  // Global: 2, Local: 1 (local se reinicia cada vez)
incrementarContador();  // Global: 3, Local: 1

console.log(`Variable global final: ${contadorGlobal}`);
// console.log(contadorLocal); // Error: contadorLocal no está definida fuera de la función

console.log("\n=== 6. FUNCIONES ANÓNIMAS ===\n");

/*
   Las funciones anónimas son funciones sin nombre.
   Se usan cuando necesitamos una función solo una vez o como callback.

   Sintaxis: function(parametros) { código }  (sin nombre)
*/

console.log("Función anónima asignada a una variable:");

const multiplicar = function(a, b) {
    return a * b;
};

console.log(`5 × 3 = ${multiplicar(5, 3)}`);

console.log("\nFunción anónima como callback:");

// Simulando un temporizador (setTimeout es una función que recibe otra función como parámetro)
setTimeout(function() {
    console.log("¡Este mensaje aparece después de 2 segundos!");
}, 2000);

console.log("Este mensaje aparece inmediatamente");

console.log("\n=== 7. FUNCIONES COMO PARÁMETROS (CALLBACKS) ===\n");

/*
   Un callback es una función que se pasa como parámetro a otra función.
   La función que recibe el callback lo ejecuta en algún momento.

   Esto permite crear funciones más flexibles y reutilizables.
*/

console.log("Ejemplo básico de callback:");

function procesarNumero(numero, callback) {
    console.log(`Procesando número: ${numero}`);
    let resultado = callback(numero);
    console.log(`Resultado: ${resultado}`);
    return resultado;
}

// Diferentes callbacks para diferentes procesamientos
function duplicar(num) {
    return num * 2;
}

function calcularCuadrado(num) {
    return num * num;
}

function raizCuadrada(num) {
    return Math.sqrt(num);
}

procesarNumero(5, duplicar);        // Resultado: 10
procesarNumero(5, calcularCuadrado);        // Resultado: 25
procesarNumero(9, raizCuadrada);    // Resultado: 3

console.log("\nEjemplo práctico - Procesador de calificaciones:");

function procesarCalificaciones(calificaciones, callback) {
    console.log("Procesando calificaciones...");
    return calificaciones.map(callback);
}

function convertirAPorcentaje(nota) {
    return (nota / 100) * 100; // Ya está en porcentaje, pero podríamos convertir
}

function asignarLetra(nota) {
    if (nota >= 90) return 'A';
    if (nota >= 80) return 'B';
    if (nota >= 70) return 'C';
    if (nota >= 60) return 'D';
    return 'F';
}

let notas = [85, 92, 78, 96, 67];

console.log("Calificaciones originales:", notas);
console.log("Con letras asignadas:", procesarCalificaciones(notas, asignarLetra));

console.log("\n=== 8. FUNCIONES QUE RETORNAN FUNCIONES ===\n");

/*
   Las funciones pueden retornar otras funciones.
   Esto crea funciones más especializadas basadas en parámetros.
*/

console.log("Ejemplo: Creador de funciones de saludo:");

function crearSaludador(idioma) {
    if (idioma === 'es') {
        return function(nombre) {
            return `¡Hola, ${nombre}!`;
        };
    } else if (idioma === 'en') {
        return function(nombre) {
            return `Hello, ${nombre}!`;
        };
    } else if (idioma === 'fr') {
        return function(nombre) {
            return `Bonjour, ${nombre}!`;
        };
    }
}

// Creamos funciones especializadas
const saludarEnEspanol = crearSaludador('es');
const saludarEnIngles = crearSaludador('en');
const saludarEnFrances = crearSaludador('fr');

console.log(saludarEnEspanol('Juan'));   // ¡Hola, Juan!
console.log(saludarEnIngles('John'));    // Hello, John!
console.log(saludarEnFrances('Jean'));   // Bonjour, Jean!

console.log("\nEjemplo: Creador de multiplicadores:");

function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const duplicarNumero = crearMultiplicador(2);
const triplicarNumero = crearMultiplicador(3);
const cuadruplicarNumero = crearMultiplicador(4);

console.log(`Duplicar 5: ${duplicarNumero(5)}`);       // 10
console.log(`Triplicar 5: ${triplicarNumero(5)}`);     // 15
console.log(`Cuadruplicar 5: ${cuadruplicarNumero(5)}`); // 20

console.log("\n=== 9. CLOSURES (CONCEPTO AVANZADO) ===\n");

/*
   Un closure es cuando una función "recuerda" las variables de su scope exterior,
   incluso después de que la función externa haya terminado de ejecutarse.

   Esto permite crear funciones que mantienen estado privado.
*/

console.log("Ejemplo básico de closure:");

function crearContador() {
    let contador = 0; // Variable privada

    return function() {
        contador++; // Puede acceder a la variable externa
        return contador;
    };
}

const contador1 = crearContador(); // Almacena la función que retorna la función crearContador 
const contador2 = crearContador(); // Cada contador tiene su propio estado privado (contador) gracias al closure

console.log("Contador 1:", contador1()); // 1
console.log("Contador 1:", contador1()); // 2
console.log("Contador 1:", contador1()); // 3

console.log("Contador 2:", contador2()); // 1 (independiente)
console.log("Contador 2:", contador2()); // 2

console.log("\nEjemplo práctico: Generador de IDs únicos:");

function crearGeneradorID() {
    let ultimoID = 0;

    return function() {
        ultimoID++;
        return `ID-${ultimoID.toString().padStart(3, '0')}`;
    };
}

const generarIDUsuario = crearGeneradorID();
const generarIDProducto = crearGeneradorID();

console.log("Usuario:", generarIDUsuario());  // ID-001
console.log("Usuario:", generarIDUsuario());  // ID-002
console.log("Producto:", generarIDProducto()); // ID-001 (contador independiente)
console.log("Usuario:", generarIDUsuario());  // ID-003

console.log("\n=== 10. EJEMPLOS PRÁCTICOS COMPLETOS ===\n");

console.log("Sistema de gestión de tareas:");

// Función constructora de tareas
function crearGestorTareas() {
    let tareas = [];

    return {
        agregarTarea: function(tarea) {
            tareas.push({ descripcion: tarea, completada: false });
            console.log(`✓ Tarea agregada: "${tarea}"`);
        },

        completarTarea: function(indice) {
            if (tareas[indice]) {
                tareas[indice].completada = true;
                console.log(`✓ Tarea completada: "${tareas[indice].descripcion}"`);
            }
        },

        mostrarTareas: function() {
            console.log("\nLISTA DE TAREAS:");
            tareas.forEach((tarea, index) => {
                const estado = tarea.completada ? '✓' : '○';
                console.log(`${index + 1}. ${estado} ${tarea.descripcion}`);
            });
        },

        tareasPendientes: function() {
            return tareas.filter(tarea => !tarea.completada).length;
        }
    };
}

// Creamos un gestor de tareas
const miGestor = crearGestorTareas();

miGestor.agregarTarea("Estudiar JavaScript");
miGestor.agregarTarea("Hacer ejercicio");
miGestor.agregarTarea("Comprar víveres");
miGestor.agregarTarea("Llamar a mamá");

miGestor.mostrarTareas();

miGestor.completarTarea(0); // Completar primera tarea
miGestor.completarTarea(2); // Completar tercera tarea

miGestor.mostrarTareas();

console.log(`\n📊 Tareas pendientes: ${miGestor.tareasPendientes()}`);

console.log("\n=== 11. RESUMEN Y MEJORES PRÁCTICAS ===\n");

/*
   RESUMEN DE FUNCIONES EN JAVASCRIPT:

   1. FUNCIONES BÁSICAS:
      - function nombre() { código }
      - Se declaran y se llaman cuando se necesitan

   2. PARÁMETROS Y RETORNO:
      - function nombre(param1, param2) { return resultado; }
      - Los parámetros hacen las funciones reutilizables
      - return devuelve valores para usar en otras partes

   3. FUNCIONES FLECHA:
      - const nombre = (param) => expresion;
      - Más concisas, especialmente para funciones simples
      - No tienen su propio 'this'

   4. SCOPE:
      - Variables locales: solo existen dentro de la función
      - Variables globales: accesibles desde cualquier parte
      - Usa 'let' y 'const' para evitar problemas de scope

   5. CALLBACKS:
      - Funciones pasadas como parámetros
      - Permiten crear código más flexible

   6. CLOSURES:
      - Funciones que "recuerdan" variables de scope exterior
      - Útiles para mantener estado privado

   MEJORES PRÁCTICAS:
   - Usa nombres descriptivos para funciones y parámetros
   - Una función debe hacer una sola cosa bien
   - Documenta funciones complejas con comentarios
   - Prefiere const para funciones que no se reasignarán
   - Usa funciones flecha para callbacks simples
   - Mantén las funciones cortas y enfocadas
*/