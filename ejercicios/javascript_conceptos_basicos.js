//* Variable let: Permite declarar variables que pueden ser reasignadas

let edad; // Declaración de la variable 'edad' sin asignar un valor
edad = 25; // Asignación de un valor a la variable 'edad'
edad = 30; // Reasignación de un nuevo valor a la variable 'edad'
edad = 35; // Reasignación de otro valor a la variable 'edad' 
// let edad; //! ESTO NO SE PUEDE HACER

let nombre_que_puede_cambiar = "Juan"; // Declaración de la variable 'nombre' con un valor asignado

//* Variable const: Permite declarar constantes, es decir, variables cuyo valor no puede ser reasignado

const PI = 3.1416; // Declaración de la constante 'PI' con un valor asignado
// PI = 3.14; //! Esto generaría un error porque no se puede reasignar una constante
// const Iva; //! Esto también generaría un error porque las constantes deben ser inicializadas al momento de su declaración

//* Variable var: Es la forma tradicional de declarar variables en JavaScript, pero su uso no es recomendado debido a su comportamiento de alcance (scope) y hoisting

var ciudad = "Madrid";


//* Simulación de un sistema de inicio de sesión y compra utilizando variables
const nombre = "Arturo";
let contraseña = "12345";
contraseña = "54321"; // Reasignación de un nuevo valor a la variable 'contraseña'
const id_usuario = 1023;

//* Sensibilidad a las mayusculas (Case sensitive)
const Comida_favorita = "Ceviche";
const comida_favorita = "Pizza";

let Mascota = "Perro";
let mascota = "Gato";

Mascota = "Conejo";

//* Formas de nombrar variables
let nombreCompleto; //camelCase
let nombre_completo; // snake_case
// let nombre completo; //! Esto arroja error
// let nombre-completo; //! Esto arroja error

//* Tipos de datos en JavaScript
let entero_int = 10; // Número entero (integer)
let flotante_float = 3.14; // Número decimal (float)
let cadenaDeTexto_string = "Hola" // Cadena de texto (string)
let booleano_bool = true; // Valor booleano (boolean). Puede ser true o false (verdadero o falso)
booleano_bool = false; // Valor booleano falso.
let nulo_null = null; // Valor nulo (null). Representa la ausencia de valor o un valor desconocido. 
let indefinido_undefined; // Valor indefinido (undefined). Representa una variable que ha sido declarada pero no se le ha asignado un valor.
let objeto_object = { nombre: "Juan", edad: 30 }; // Objeto (object). Es una colección de propiedades y métodos relacionados. En este caso, el objeto tiene dos propiedades: 'nombre' y 'edad'.
let arreglo_array = [1, 2, 3, 4, 5]; // Arreglo (array). Es una colección ordenada de elementos. En este caso, el arreglo contiene cinco números enteros.