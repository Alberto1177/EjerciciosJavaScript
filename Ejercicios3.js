/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad = prompt("Ingrese su edad: ")

function getEdad(n) {
    return n
}

if (getEdad(edad)>=18) {
    console.log('La persona es mayor de edad')
} else {
    console.log('La persona es menor de edad')
}



/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

let dame1 = prompt("Dame la primera calificacion: ")
dame1 = Number(dame1)
let dame2 = prompt("Dame la segunda calificacion: ")
dame2 = Number(dame2)
let dame3 = prompt("Dame la tercera calificacion: ")
dame3 = Number(dame3)
let dame4 = prompt("Dame la cuarta calificacion: ")
dame4 = Number(dame4)


function calificaciones(a,b,c,d){
    let suma = a + b + c +d
    let promedio = suma/4
    return promedio
}

let promedio = calificaciones(dame1,dame2,dame3,dame4)

if (calificaciones(dame1,dame2,dame3,dame4) >= 7) {
    console.log(`Aprobo con: ${promedio}`)
} else {
    console.log(`Reprobo con : ${promedio}`)
}



/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function verfica(n){
    if ((n)%7 === 0 && (n)%8 ===0) {
        console.log("Verdadero")
    } else {
        console.log("Falso")
    }
}

verfica(56)
verfica(7)
verfica(8)
verfica(0)
verfica(224)
verfica(73)



/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

 let otroNum = parseInt(Math.random()*20)
 console.log(`El numero random es: ${otroNum}`)

function  fin(n){
    return n
}

if (fin(otroNum)%4 === 0 || fin(otroNum)%9 === 0) {
    console.log("Verdadero")
} else {
    console.log("Falso")
}
