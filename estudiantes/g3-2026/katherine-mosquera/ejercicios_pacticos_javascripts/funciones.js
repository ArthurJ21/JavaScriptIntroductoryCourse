/* 
Yo Como dueña de un restaudante a puestas cerradas,
Quiero que cuando el cliente realice la compra desde nustra pagina web, se calcule el valor total de ña compra incluyendo el iva y descuentos,
Para saber cuánto debo pagar antes de realizar el pago.
Notas: El valor del producto es de $15,000, la cantidad es de 3 unidades, el descuento es del 15% y el IVA es del 5%.
*/


let IVA = 0.05;

function calcularSubtotal(precio, cantidad) {
    let subtotal = precio * cantidad; 
    return subtotal;
}

const calcularIva = (subtotal) => {
    return subtotal * IVA;
};

const aplicarDescuento = (total, descuento) => {
    return total - (total * descuento);
};

function calcularTotalCompra(precio, cantidad, descuento) {
    let subtotal = calcularSubtotal(precio, cantidad);
    let valorIva = calcularIva(subtotal);
    let total = subtotal + valorIva;
    let totalFinal = aplicarDescuento(total, descuento);

    return totalFinal;
}

let resultado = calcularTotalCompra(15000, 3, 0.15);

console.log("El total a pagar es: $" + resultado);