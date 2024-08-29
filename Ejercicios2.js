/*
 *calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el volumen de una esfera
*/
//forma 1
function circuloPerimeter(radio) {
    let pi = 3.1416
    let resultado = 2 * pi * radio
    console.log(`El area del circulo es: ${resultado}`)
}

circuloPerimeter(5)

//forma 2
const circuloP = (r) =>{
    let result = 2 * 3.1416 * r
    console.log (result)
}
circuloP(5)

///////////////////////////////////////
//forma 1
function areaRectangulo(longitud, ancho){
    let formula = longitud * ancho
    console.log(`El area del rectangulo es: ${formula}`)
}
areaRectangulo(2,4)

//forma 2
const areaRect = (l,a) => l * a
console.log(areaRect(2,4))

/////////////////////////////////////
//forma1
function cuadradoNum (numero){
    let resultado = numero * numero
    console.log(`El cuadrado de ${numero} es: ${resultado}`)
}

cuadradoNum(4)

//forma 2
const cuadrado = n => console.log(n*n)
cuadrado(4)


////////////////////////////////////
//forma 1
function conversionCelFaren(grado){
    let  formula = ((9/5)* grado) +32
    console.log(`Los grados celsius ${grado} a farenheit son: ${formula}F`)
}
conversionCelFaren(25)

//forma 2
const convert = grados => console.log(((9/5)*grados) + 32)
convert(25)

/////////////////////////////////////
//forma 1
function esfera(radio){
    let pi = 3.1416
    let result = ((4/3) * pi) * (radio* radio* radio)
    console.log(`El volumen de la esfera es: ${result}cm³`)
}
esfera(3)

//forma2
const esferav = radio => console.log(((4/3) * 3.1416) * (radio* radio* radio))
esferav(3)
