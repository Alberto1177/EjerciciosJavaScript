/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion 
*/
// let numero1 = prompt("Dame un numero: ")
// numero1 = Number(numero1)
// let numero2 = prompt("Dame un segundo numero: ")
// numero2 = Number(numero2)

// let operacion = prompt("Dame una operacion que deseas realizar: ")

// switch (operacion) {
//     case "suma":
//         let opera = numero1 + numero2
//         console.log(`El resultado de la ${operacion} es : ${opera}`)
        
//         break;
//     case "resta":
//         let opera1 = numero1 - numero2
//         console.log(`El resultado de la ${operacion} es : ${opera1}`)
//         break;
//     case "multiplicacion":
//         let opera2 = numero1 * numero2
//         console.log(`El resultado de la ${operacion} es : ${opera2}`)
//         break;
//     case "division":
//         let opera3 = numero1 / numero2
//         console.log(`El resultado de la ${operacion} es : ${opera3}`)
//         break;
//     default:
//         console.log("Esa operacion no esta disponible")
//         break;
// }

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

// let dato = prompt("Dame la categoria de peliculas: ")

// switch (dato) {
//     case "accion":
//         console.log(`La recomendacion de ${dato} es: Jhon Wick`)
//         break;
//     case "drama":
//         console.log(`La recomendacion de ${dato} es: Roma`)
//         break;
//     case "comedia":
//         console.log(`La recomendacion de ${dato} es: Dias de futbol`)
//         break;
//     case "romance":
//         console.log(`La recomendacion de ${dato} es: El hilo rojo`)
//         break;
//     case "suspenso":
//         console.log(`La recomendacion de ${dato} es: El cuerpo`)
//         break;
//     case "terror":
//         console.log(`La recomendacion de ${dato} es: El orfanato`)
//         break;
//     default:
//         console.log(`No hay recomendacion para la categoria ${dato}`)
//         break;
// }


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

let tarjeta = prompt("Ingresa el numero de tu tarjeta: ")
let pin = prompt("Ingrese su pin: ")

let opcion = prompt("Que desea realizar: 1. Retirar dinero 2. Transferencia , 3. Deposito, 4. Pago de servicios")

if (opcion == 1) {
    let dinero = prompt("Cuando dinero desea retirar: ")
    let decision = prompt("Desea realizar la operacion: SI/NO")
    if (decision == "SI") {
        console.log(`Se ha retirado ${dinero} de su cuenta`)
    } else {
        console.log(`Se ha cancelado la operacion`)
    }
} else if(opcion == 2) {
    let trans = prompt("Cuando dinero desea transferir: ")
    let cuenta = prompt("Ingrese la cuenta a depositar: ")
    let decision1 = prompt("Desea realizar la operacion: SI/NO")
    if (decision1 == "SI") {
        console.log(`Se ha transferido $${trans} a la cuenta ${cuenta}`)
    } else {
        console.log(`Se ha cancelado la operacion`)
    }
}else if(opcion == 3){
    let depo = prompt("Cuando dinero desea depositar: ")
    console.log(`Se ha retirado ${depo} de su cuenta`)
}else if(opcion == 4){
    let serv = prompt(" Que servicio desea pagar: ")
    let pago = prompt("Ingrese la cantidad a pagar: ")
    let decision2 = prompt("Desea realizar la operacion: SI/NO")
    if (decision2 == "SI") {
        console.log(`Su pago de ${serv} de $${pago}, se ha realizado correctamente`)
    } else {
        console.log(`Se ha cancelado la operacion`)
    }
}else{
    console.log("Esa accion no existe")
}