const Detalle = function (nombre, banco, deuda, vencimiento) {
    this.nombre = nombre
    this.banco = banco
    this.deuda = deuda
    this.vencimiento = vencimiento
}
let cliente1 = new Detalle("juliana", "galicia", 214811, "10/02")
let cliente2 = new Detalle("martin", "macro", 6455, "20/02")
let cliente3 = new Detalle("agostina", "galicia", 325400, "10/02")
let cliente4 = new Detalle("emmanuel", "macro", 87982, "20/02")
let cliente5 = new Detalle("joel", "banco ciudad", 30000, "10/02")
let cliente6 = new Detalle("catalina", "macro", 142445, "20/02")
let cliente7 = new Detalle("virginia", "banco ciudad", 872444, "10/02")
let cliente8 = new Detalle("lisandro", "galicia", 151000, "10/02")
const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8]
let nuevoCliente = new Detalle(
    (prompt("Agregar: nombre")),
    (prompt("Agregar: banco")),
    (Number(prompt("Agregar: importe de deuda"))),
    (prompt("Agregar: vencimiento")))
clientes.push(nuevoCliente)
console.log(clientes.length)
console.log(clientes)
clientes.forEach((cliente) => { console.log(cliente) })
const deudasAltas = clientes.filter(cliente => cliente.deuda > 100000)
console.log(deudasAltas)
if (nuevoCliente.deuda < 100000) {
    alert("Su deuda no supera a $100.000. No tiene habilitado abonar en cuotas")
} else {
    alert("Su deuda es superior a $100.000. Podrás abonar hasta 6 cuotas de " + nuevoCliente.deuda / 6)
    let cuotas = prompt("¿En cuantas cuotas abonas?")
    alert("Abonas en " + cuotas + " CUOTAS de $" + nuevoCliente.deuda / cuotas)
}
