function calcMascotA(input) {
    let dogEquivalent = 7
    let conversion = input * dogEquivalent
    console.log("La edad de la mascota "+ input +" y en humanos: " +conversion)
}

calcMascotA(5)


//literales
function mesage(personName,age, hobbie) {
    console.log(
        "Hi, my name is " +personName
        + " i'm " + age + " y/o" + " and my fav activity is " + hobbie 
    )
}

mesage("Fernando", "x", "play games")

function mesage(personName,age, hobbie) {
    console.log(`Hi, my name is ${personName}, i'm ${age} y/o, my fav activiti is ${hobbie}`)
}


/////////////////////////////
/*
Funciones flecha (arrow functions/ fat arrow)
declaracion
1- palabra reservada let, var, const
2- asignar nombre de la funcion
3- argumentos
4-colocar flecha (=>)
*/

const arrowVoltage = (r , i) => r*i
console.log(arrowVoltage(4,4))

const arrow = (r,i) => {
    let voltage = r*i
    return voltage
}

const perimeterarrow = l => console.log(l*4)
perimeterarrow(5)



