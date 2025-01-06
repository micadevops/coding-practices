//EJERCICIO 1
function sumar (numero1, numero2){
    return numero1 + numero2
}

const resultado = sumar(10, 20)

console.log(resultado)


//EJERCICIO 2

function esPar (numero) {

    const resultado = numero % 2
    if (resultado === 0) {
        return true
    }else{
        return false
    }
}


const resultadoEsPar = esPar (20)

if (resultadoEsPar) {

    console.log ( "El numero es par")
}else {
    console.log ("El numero es impar")
}


//EJERCICIO 3


function mostrarNumeros () {
    
    for ( let i = 10;  i >= 0; i--){

        console.log (i)

    }
}


mostrarNumeros()


function cadenaReves (texto) {


    let nuevaPalabra = "";


    for (let i = texto.length -1 ; i >=0; i -- ){
        nuevaPalabra += texto [i]
       
    }

    return nuevaPalabra
}


const nuevaPalabraResultado = cadenaReves("Micaela")
console.log(nuevaPalabraResultado)