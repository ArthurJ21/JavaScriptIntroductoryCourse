console.log("\n=== 1. VARIABLES LET (REASIGNABLES) ===\n");

let saldo;
saldo = 50000;
saldo = 75000;
saldo = 120000;

let producto_activo = "Laptop";

console.log(`Saldo actual: $${saldo}`);
console.log(`Producto: ${producto_activo}`);

console.log("\n=== 2. VARIABLES CONST (CONSTANTES) ===\n");

const IVA = 0.19;
const CODIGO_EMPRESA = 4587;

console.log(`IVA: ${IVA * 100}%`);
console.log(`Código empresa: ${CODIGO_EMPRESA}`);

console.log("\n=== 3. VARIABLES VAR (TRADICIONAL) ===\n");

var departamento = "Ventas";

console.log(`Departamento: ${departamento}`);

console.log("\n=== 4. SIMULACIÓN SISTEMA DE USUARIO ===\n");

const usuario = "Sofía";
let pin = "7890";
pin = "0987";
const id_cliente = 7842;

console.log(`Usuario: ${usuario}`);
console.log(`ID: ${id_cliente}`);
console.log(`PIN actualizado: ${pin}`);

console.log("\n=== 5. CASE SENSITIVE ===\n");

const Servicio_principal = "Web";
const servicio_principal = "API";

let Vehiculo = "Moto";
let vehiculo = "Carro";

Vehiculo = "Camión";

console.log(`Servicio_principal: ${Servicio_principal}`);
console.log(`servicio_principal: ${servicio_principal}`);
console.log(`Vehiculo: ${Vehiculo}`);
console.log(`vehiculo: ${vehiculo}`);

console.log("\n=== 6. ESTILOS DE NOMBRADO ===\n");

let totalVentas;
let total_ventas;
let usuarioActivo;

console.log("Variables declaradas correctamente");

console.log("\n=== 7. TIPOS DE DATOS ===\n");

let cantidad_items = 15;
let precio_unitario = 45.99;
let mensaje_sistema = "Operación exitosa";
let activo = true;
activo = false;
let vacio = null;
let pendiente;

let cliente_data = { id: 392, nombre: "Diego", activo: true };
let inventario = ["Monitor", "Teclado", "Mouse", 25, true];

console.log("Entero:", cantidad_items);
console.log("Decimal:", precio_unitario);
console.log("Texto:", mensaje_sistema);
console.log("Booleano:", activo);
console.log("Nulo:", vacio);
console.log("Indefinido:", pendiente);
console.log("Objeto:", cliente_data);
console.log("Arreglo:", inventario);

console.log("\n=== 8. VERIFICACIÓN DE TIPOS ===\n");

console.log("Tipo cantidad_items:", typeof cantidad_items);
console.log("Tipo precio_unitario:", typeof precio_unitario);
console.log("Tipo mensaje_sistema:", typeof mensaje_sistema);
console.log("Tipo activo:", typeof activo);
console.log("Tipo vacio:", typeof vacio);
console.log("Tipo pendiente:", typeof pendiente);
console.log("Tipo cliente_", typeof cliente_data);
console.log("Tipo inventario:", typeof inventario);
