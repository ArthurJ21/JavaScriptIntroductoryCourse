console.log("\n=== 1. OPERADORES DE COMPARACIÓN: == vs === ===\n");

const operacion_izq = 8 + 4;
let operacion_der = 12;
console.log("12 == 12 (números):", operacion_izq == operacion_der);

operacion_der = "12";
console.log("12 == '12' (número vs string):", operacion_izq == operacion_der);

console.log("\n=== 2. COMPARACIÓN ESTRICTA ===\n");
console.log("12 === 12 (números):", operacion_izq === 12);
console.log("12 === '12' (número vs string):", operacion_izq === "12");

console.log("\n=== 3. OTROS OPERADORES ===\n");
const x = 8, y = 15, z = 8;
console.log("8 < 15:", x < y);
console.log("15 > 8:", y > x);
console.log("8 <= 8:", x <= z);
console.log("8 >= 8:", x >= z);
console.log("8 != 15:", x != y);
console.log("8 !== '8':", x !== "8");

console.log("\n=== 4. OPERADOR AND (&&) ===\n");
const cond1 = 7 > 4;
const cond2 = 20 < 30;
console.log("true && true:", cond1 && cond2);
console.log("true && false:", 7 > 4 && 20 > 30);
console.log("false && true:", 7 < 4 && 20 < 30);
console.log("false && false:", 7 < 4 && 20 > 30);

console.log("\n=== 5. OPERADOR OR (||) ===\n");
console.log("true || true:", 7 > 4 || 20 < 30);
console.log("true || false:", 7 > 4 || 20 > 30);
console.log("false || true:", 7 < 4 || 20 < 30);
console.log("false || false:", 7 < 4 && 20 > 30);

console.log("\n=== 6. OPERADOR NOT (!) ===\n");
console.log("!true:", !true);
console.log("!false:", !false);
console.log("!(7 > 4):", !(7 > 4));
console.log("!(7 < 4):", !(7 < 4));

console.log("\n=== 7. CONDICIONALES IF ===\n");
const valor1 = 25;
const valor2 = 12;
const valor3 = 25;
const valor4 = 40;

if (valor1 > valor4) {
    console.log("valor1 > valor4");
} else if (valor2 < valor3) {
    console.log("valor2 < valor3");
} else if (valor1 == valor4) {
    console.log("valor1 == valor4");
} else if (valor1 == valor3) {
    console.log("valor1 == valor3");
} else {
    console.log("Ninguna condición");
}

console.log("\n=== 8. IF ANIDADO ===\n");
if (valor1 === valor3) {
    console.log("valor1 === valor3");
    if (valor2 < valor4) {
        console.log("Y valor2 < valor4");
    }
}

console.log("\n=== 9. SWITCH STATEMENT ===\n");
let puestoTorneo = 2;
switch (puestoTorneo) {
    case 1:
        console.log("Primer lugar");
        break;
    case 2:
        console.log("Segundo lugar");
        break;
    case 3:
        console.log("Tercer lugar");
        break;
    default:
        console.log("Fuera del podio");
}

console.log("\n=== 10. SWITCH CON DEFAULT ===\n");
puestoTorneo = 6;
switch (puestoTorneo) {
    case 1:
        console.log("Primer lugar");
        break;
    case 2:
        console.log("Segundo lugar");
        break;
    case 3:
        console.log("Tercer lugar");
        break;
    default:
        console.log("Fuera del podio");
}

console.log("\n=== 11. SWITCH SIN BREAK ===\n");
puestoTorneo = 3;
switch (puestoTorneo) {
    case 1:
        console.log("Primer lugar");
    case 2:
        console.log("Segundo lugar");
    case 3:
        console.log("Tercer lugar");
    default:
        console.log("Fuera del podio");
}

console.log("\n=== 12. OPERADOR TERNARIO ===\n");
let temperatura = "Hace calor";
temperatura = (temperatura === "Hace calor") ? true : false;
console.log("temperatura:", temperatura);

let humedad = "Muy seco";
humedad = (humedad === "Muy húmedo") ? true : false;
console.log("humedad:", humedad);

console.log("\n=== 13. TERNARIO ANIDADO ===\n");
let peso = 75;
let clasificacion = peso < 60 ? "Ligero" : peso < 80 ? "Medio" : "Pesado";
console.log("Clasificación para", peso + "kg:", clasificacion);

console.log("\n=== 14. TERNARIO ASIGNACIÓN ===\n");
let cantidad = 22;
let multiplo3 = cantidad % 3 === 0 ? "sí" : "no";
console.log("¿Múltiplo de 3?", multiplo3);

console.log("\n=== 15. TERNARIO BOOLEANO ===\n");
let sistemaActivo = true;
let estadoSistema = sistemaActivo ? "Activo" : "Inactivo";
console.log("Estado:", estadoSistema);

sistemaActivo = false;
estadoSistema = sistemaActivo ? "Activo" : "Inactivo";
console.log("Estado:", estadoSistema);
