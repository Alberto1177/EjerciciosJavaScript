/** Ejercicio
 * 
 * Desarrolla una función que, imprima todos los numeros del 0 al 100 y compare 
 * que numeros son divisibles entre 4 o 9
 * 
 * Consideraciones
 * Asignarle un nombre significativo a la función declarada
 * Si el numero es divisible entre 4, imprimir un mensaje alusivo a costado del numero
 * Mismo caso para todos los numeros divisibles entre 9
 */

// function numeroDivisibles(){
//     let numero = []

//     for (let index = 0; index <= 100; index++) {
//         numero.push(index)
//     }
    
//     for (let index = 1; index <= numero.length; index++) {
    
//         if (numero[index] %9 === 0) {
//             console.log(`${index} es un numero divisible entre 9`)
//         }else if(numero[index] %4 === 0) {
//             console.log(`${index} es un numero divisible entre 4`)
//         }
//     }
// }

// numeroDivisibles()




/** Ejercicio
 * 
 * Declara una variable y asignale como valor un arreglo vacio
 * Elabora una iteracion que ayude a llenar el arreglo con los numeros del 1 al 10
 * Al final, e debera obtener un arreglo con los numeros ordenados de manera descendente
(10 - 1)
 * 
 * Consideraciones
 * Asigna un nombre significativo a la variable
 * Utiliza el metodo para arreglos adecuado para cumplir con el objetivo del ejercicio
*/

// let arrayVacio = []

// for (let index = 1; index <= 10; index++) {
//         arrayVacio.push(index)
// }
// arrayVacio.reverse()
// console.log(arrayVacio)





// Crea un bucle que sume los numeros del 1 al 100
// resultado final 5050

let suma =0

for (let i = 0; i <= 100; i++) {
    suma = suma + i 
}

console.log(suma)