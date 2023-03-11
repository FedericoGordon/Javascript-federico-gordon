let nombre = prompt("ingrese su nombre")
while (nombre === "") {
    alert("Ingrese un nombre para continuar")
    nombre = prompt("ingrese su nombre")
    }
console.log(nombre);
alert("Bienvenido " + nombre );

function vehiculoProp(){
    let vehiculoPropio = parseFloat(prompt("Ingrese el valor de su vehiculo actual cotizado previamente en nuestra agencia"));
    console.log(vehiculoPropio);
    return vehiculoPropio;
}
    
function efec(){
    let efectivo = parseFloat(prompt("Ingrese el monto en efectivo que desea entregar"));
    console.log(efectivo);
    return efectivo;
}

function calculoCuota(saldo, porcentaje, cantidadCuotas){
    let valorCuota = ((saldo * porcentaje ) / numeroCuotas );
        console.log(valorCuota);
        alert("usted deberia pagar " + numeroCuotas + " cuotas de $" + valorCuota);
}

let valor1 = vehiculoProp()
let valor2 = efec()
const valores = (valor1 + valor2)

let valorNuevo = parseFloat(prompt("Ingrese el valor del auto nuevo que desea comprar"));
    console.log(valorNuevo)


const saldo = (valorNuevo - valores)
console.log(saldo);

let numeroCuotas = parseFloat(prompt("en cuantas cuotas quieres abonar los $"  + " restantes Maximo 18 cuotas----- 1 a 6 cuotas 50% interes----- 7 a 12 cuotas 70% interes-----13 a 18 cuotas 99% interes"))
     console.log(numeroCuotas)
        if (numeroCuotas <=6){
                alert("el interes es de 50%");
                calculoCuota(saldo, 1.5, numeroCuotas);   
            }
        if (numeroCuotas >6 && numeroCuotas <=12){
                alert("el interes es de 70%"); 
                calculoCuota(saldo, 1.7, numeroCuotas);
            }
        if (numeroCuotas >12 && numeroCuotas <=18){
                alert("el interes es de 99%");
                calculoCuota(saldo, 1.99, numeroCuotas);
            }    
        

let textoSalida = prompt("desea salir del simulador? indique si para salir");
const salir = "si";
const volverInicio = "no";

for (let i=0; i<4; i++){
    if (textoSalida == salir){
        alert("Muchas gracias! Hasta pronto");
        break
    } else {
        textoSalida = prompt("desea salir del simulador? indique si para salir");
    }
}