console.log("\n=== 1. DECLARACIÓN DE FUNCIONES BÁSICAS ===\n");

function mostrarMensaje() {
    console.log("¡Función ejecutándose!");
}

mostrarMensaje();
mostrarMensaje();

console.log("\n=== 2. FUNCIONES CON PARÁMETROS ===\n");

function mostrarDatos(usuario) {
    console.log(`Usuario: ${usuario}`);
}

mostrarDatos("Diego");
mostrarDatos("Camila");
mostrarDatos("Andrés");

console.log("\nFunción con varios parámetros:");

function mostrarInfo(nombre, salario, departamento) {
    console.log(`${nombre} - $${salario} - ${departamento}`);
}

mostrarInfo("Valeria", 2500000, "Ventas");
mostrarInfo("Felipe", 3200000, "TI");
mostrarInfo("Sofía", 2800000, "Marketing");

console.log("\n=== 3. FUNCIONES CON RETORNO ===\n");

function generarTexto(texto) {
    return `Mensaje: ${texto}`;
}

let texto1 = generarTexto("Proceso iniciado");
console.log(texto1);

console.log(generarTexto("Proceso completado"));

console.log("\nFunción matemática:");

function areaCirculo(radio) {
    let area = Math.PI * radio * radio;
    return area;
}

let a1 = areaCirculo(5);
let a2 = areaCirculo(8);
let a3 = areaCirculo(3);

console.log(`Área 1: ${a1.toFixed(2)}`);
console.log(`Área 2: ${a2.toFixed(2)}`);
console.log(`Área 3: ${a3.toFixed(2)}`);

let totalAreas = a1 + a2 + a3;
console.log(`Total áreas: ${totalAreas.toFixed(2)}`);

console.log("\n=== 4. FUNCIONES FLECHA ===\n");

const sumar = (a, b) => {
    return a + b;
};

const restar = (a, b) => a - b;

console.log("Suma:", sumar(12, 8));
console.log("Resta:", restar(12, 8));

console.log("\nEjemplos flecha:");

const mensajeMundo = () => "¡Sistema activo!";
console.log(mensajeMundo());

const potencia = base => base * base;
console.log(`Potencia de 7: ${potencia(7)}`);

const promedio = (v1, v2, v3) => (v1 + v2 + v3) / 3;
console.log(`Promedio: ${promedio(78, 92, 85)}`);

console.log("\n=== 5. SCOPE VARIABLES ===\n");

let totalGlobal = 0;

function actualizarTotal() {
    let totalLocal = 0;

    totalGlobal += 10;
    totalLocal += 5;

    console.log(`Global: ${totalGlobal}, Local: ${totalLocal}`);
}

actualizarTotal();
actualizarTotal();
actualizarTotal();

console.log(`Global final: ${totalGlobal}`);

console.log("\n=== 6. FUNCIONES ANÓNIMAS ===\n");

const dividir = function(a, b) {
    return a / b;
};

console.log(`División: ${dividir(20, 4)}`);

setTimeout(function() {
    console.log("Alerta después de 1 segundo");
}, 1000);

console.log("Mensaje inmediato");

console.log("\n=== 7. CALLBACKS ===\n");

function ejecutarOperacion(valor, operacion) {
    console.log(`Ejecutando con ${valor}`);
    let resultado = operacion(valor);
    console.log(`Resultado: ${resultado}`);
    return resultado;
}

function elevarCuadrado(val) {
    return val * val;
}

function elevarCubo(val) {
    return val * val * val;
}

function raiz(val) {
    return Math.sqrt(val);
}

ejecutarOperacion(6, elevarCuadrado);
ejecutarOperacion(4, elevarCubo);
ejecutarOperacion(16, raiz);

console.log("\nProcesador de datos:");

function procesarDatos(datos, procesador) {
    console.log("Procesando datos...");
    return datos.map(procesador);
}

function redondear(num) {
    return Math.round(num);
}

function duplicarVal(num) {
    return num * 2;
}

let decimales = [3.7, 8.2, 1.9, 6.4];
console.log("Datos:", decimales);
console.log("Redondeados:", procesarDatos(decimales, redondear));

console.log("\n=== 8. FUNCIONES QUE RETORNAN FUNCIONES ===\n");

function crearOperador(tipo) {
    if (tipo === 'suma') {
        return function(valor) {
            return valor + 100;
        };
    } else if (tipo === 'multi') {
        return function(valor) {
            return valor * 5;
        };
    } else if (tipo === 'resta') {
        return function(valor) {
            return valor - 50;
        };
    }
}

const suma100 = crearOperador('suma');
const multi5 = crearOperador('multi');
const resta50 = crearOperador('resta');

console.log(suma100(20));
console.log(multi5(8));
console.log(resta50(120));

console.log("\n=== 9. CLOSURES ===\n");

function crearAcumulador() {
    let acumulado = 0;

    return function() {
        acumulado += 15;
        return acumulado;
    };
}

const acum1 = crearAcumulador();
const acum2 = crearAcumulador();

console.log("Acum1:", acum1());
console.log("Acum1:", acum1());
console.log("Acum1:", acum1());

console.log("Acum2:", acum2());
console.log("Acum2:", acum2());

console.log("\nGenerador de códigos:");

function crearCodificador() {
    let ultimoCodigo = 0;

    return function() {
        ultimoCodigo++;
        return `C${ultimoCodigo.toString().padStart(4, '0')}`;
    };
}

const codCliente = crearCodificador();
const codOrden = crearCodificador();

console.log("Cliente:", codCliente());
console.log("Cliente:", codCliente());
console.log("Orden:", codOrden());
console.log("Cliente:", codCliente());

console.log("\n=== 10. GESTIÓN DE INVENTARIO ===\n");

function crearInventario() {
    let stock = [];

    return {
        agregarProducto: function(nombre, cantidad) {
            stock.push({ nombre, cantidad, disponible: true });
            console.log(`✓ Producto agregado: ${nombre}`);
        },

        vender: function(indice, unidades) {
            if (stock[indice]) {
                stock[indice].cantidad -= unidades;
                console.log(`✓ Vendido ${unidades} de ${stock[indice].nombre}`);
            }
        },

        mostrarStock: function() {
            console.log("\n📦 INVENTARIO:");
            stock.forEach((item, index) => {
                console.log(`${index}. ${item.nombre}: ${item.cantidad} unidades`);
            });
        },

        stockBajo: function() {
            return stock.filter(item => item.cantidad < 10).length;
        }
    };
}

const inventario = crearInventario();

inventario.agregarProducto("Televisor", 25);
inventario.agregarProducto("Laptop", 12);
inventario.agregarProducto("Tablet", 8);
inventario.agregarProducto("Mouse", 45);

inventario.mostrarStock();

inventario.vender(0, 3);
inventario.vender(2, 6);

inventario.mostrarStock();

console.log(`\n Productos con stock bajo: ${inventario.stockBajo()}`);

