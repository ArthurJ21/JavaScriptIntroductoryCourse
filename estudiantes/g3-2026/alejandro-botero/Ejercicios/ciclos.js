console.log("\n=== 1. CICLO FOR TRADICIONAL ===\n");

let temperaturas = [22, 28, 31, 19];

console.log("Ejemplo básico de ciclo for:");
for (let i = 0; i < temperaturas.length; i++) {
    console.log(`Día ${i + 1}: ${temperaturas[i]}°C`);
}

console.log("\nContando hacia atrás:");
for (let i = 15; i > 0; i--) {
    console.log(i);
}

console.log("\n=== 2. CICLO WHILE ===\n");

console.log("Ejemplo de ciclo while:");
let bateria = 80;
let ciclos = 0;

while (bateria > 0) {
    console.log(`Usando batería... Restante: ${bateria}%`);
    bateria -= 20;
    ciclos++;
}

console.log(`Batería agotada en ${ciclos} ciclos`);

console.log("\nJuego de adivinar (simulado):");
let codigo = 9;
let intento = 1;

while (intento !== codigo) {
    console.log(`Intento ${intento}: Incorrecto`);
    intento++;
    if (intento > 8) break;
}
console.log(`¡Código correcto! Era ${codigo}`);

console.log("\n=== 2.5 CICLO DO WHILE ===\n");

console.log("Ejemplo básico de do while:");
let repeticiones = 1;

do {
    console.log(`Repetición número: ${repeticiones}`);
    repeticiones++;
} while (repeticiones <= 4);

console.log("\nComparación entre while y do while:");
console.log("--- Usando WHILE con condición falsa ---");
let valorWhile = 12;

while (valorWhile < 8) {
    console.log("Esto nunca se ejecuta");
}

console.log("--- Usando DO WHILE ---");
let valorDoWhile = 12;

do {
    console.log("Esto se ejecuta una vez");
} while (valorDoWhile < 8);

console.log("\n=== 3. MÉTODO FOREACH ===\n");

const vehiculos = ['moto', 'carro', 'camioneta', 'bus'];

console.log("Ejemplo básico de forEach:");
vehiculos.forEach(function(vehiculo) {
    console.log(`Transporte: ${vehiculo}`);
});

console.log("\nCon índice:");
vehiculos.forEach((vehiculo, indice) => {
    console.log(`${indice + 1}. ${vehiculo}`);
});

const costos = [150000, 80000, 120000, 45000];
let suma = 0;

console.log("\nCalculando total de gastos:");
costos.forEach((costo, indice) => {
    console.log(`Item ${indice + 1}: $${costo}`);
    suma += costo;
});
console.log(`Total: $${suma}`);

console.log("\n=== 4. MÉTODO MAP ===\n");

const distancias = [50, 120, 85, 200];

console.log("Array original:", distancias);

const distanciasDobladas = distancias.map(function(dist) {
    return dist * 2;
});
console.log("Dobles:", distanciasDobladas);

const textos = distancias.map(dist => `Distancia: ${dist}km`);
console.log("Como textos:", textos);

const gastosOriginales = [50000, 75000, 30000, 90000];
const gastosImpuestos = gastosOriginales.map(gasto => gasto * 1.19);
console.log("\nGastos originales:", gastosOriginales);
console.log("Con impuestos:", gastosImpuestos);

const clientes = [
    { nombre: "Luis", deuda: 25000 },
    { nombre: "Paula", deuda: 18000 },
    { nombre: "Diego", deuda: 45000 }
];

const nombresClientes = clientes.map(cliente => cliente.nombre);
const deudas = clientes.map(cliente => cliente.deuda);

console.log("\nClientes:", clientes);
console.log("Nombres:", nombresClientes);
console.log("Deudas:", deudas);

console.log("\n=== 5. MÉTODO FILTER ===\n");

const velocidades = [60, 85, 45, 120, 70, 30, 95, 55];

console.log("Velocidades completas:", velocidades);

const velocidadesAltas = velocidades.filter(function(vel) {
    return vel > 70;
});
console.log("Velocidades altas:", velocidadesAltas);

const velocidadesPares = velocidades.filter(vel => vel % 2 === 0);
console.log("Velocidades pares:", velocidadesPares);

const velocidadesMedias = velocidades.filter(vel => vel > 50 && vel < 90);
console.log("Velocidades medias:", velocidadesMedias);

const articulos = [
    { nombre: "celular", precio: 1200000, tipo: "tecnologia" },
    { nombre: "ratón", precio: 45000, tipo: "tecnologia" },
    { nombre: "cuaderno", precio: 12000, tipo: "papelería" },
    { nombre: "teclado", precio: 180000, tipo: "tecnologia" },
    { nombre: "lápiz", precio: 3000, tipo: "papelería" }
];

console.log("\nArtículos:", articulos);

const articulosCaros = articulos.filter(art => art.precio > 100000);
console.log("Artículos caros:", articulosCaros);

const tecnologia = articulos.filter(art => art.tipo === "tecnologia");
console.log("Tecnología:", tecnologia);

const economicosPape = articulos.filter(art =>
    art.precio < 15000 && art.tipo === "papelería"
);
console.log("Económicos de papelería:", economicosPape);

console.log("\n=== 6. COMBINANDO FOREACH, MAP Y FILTER ===\n");

const conductores = [
    { nombre: "Andrés", puntos: 85 },
    { nombre: "Valeria", puntos: 92 },
    { nombre: "Julián", puntos: 76 },
    { nombre: "Camila", puntos: 88 },
    { nombre: "Felipe", puntos: 64 },
    { nombre: "Sofía", puntos: 91 }
];

console.log("Conductores originales:", conductores);

conductores
    .filter(conductor => conductor.puntos >= 75)
    .map(conductor => ({
        nombre: conductor.nombre,
        puntos: conductor.puntos,
        categoria: conductor.puntos >= 90 ? 'Excelente' :
                   conductor.puntos >= 80 ? 'Bueno' : 'Aprobado'
    }))
    .forEach(conductor => {
        console.log(`${conductor.nombre}: ${conductor.puntos} pts (${conductor.categoria})`);
    });
