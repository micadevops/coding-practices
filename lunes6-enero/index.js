// //EJERCICIO 1 - Crea una función que reciba dos números y devuelva su suma.
// function sumar (numero1, numero2){
//     return numero1 + numero2
// }

// const resultado = sumar(10, 20)

// console.log(resultado)


// //EJERCICIO 2 - Escribe un programa que determine si un número es par o impar.


// function esPar (numero) {

//     const resultado = numero % 2
//     if (resultado === 0) {
//         return true
//     }else{
//         return false
//     }
// }


// const resultadoEsPar = esPar (20)

// if (resultadoEsPar) {

//     console.log ( "El numero es par")
// }else {
//     console.log ("El numero es impar")
// }


// //EJERCICIO 3 - Usa un bucle for para imprimir los números del 1 al 10 en la consola.



// function mostrarNumeros () {
    
//     for ( let i = 10;  i >= 0; i--){

//         console.log (i)

//     }
// }


// mostrarNumeros()


//EJERCICIO 4: Escribe una función que tome una cadena y la devuelva al revés.


// function cadenaReves (texto) {


//     let nuevaPalabra = "";


//     for (let i = texto.length -1 ; i >=0; i -- ){
//         nuevaPalabra += texto [i]
       
//     }

//     return nuevaPalabra
// }


// const nuevaPalabraResultado = cadenaReves("Micaela")
// console.log(nuevaPalabraResultado)



//EJERCICIO 5: Crea un programa que encuentre el número más grande en un array.

// function numeroMasGrande(){

//     const numeros = [1, 10, 2, 4, 55, 6, 7, 8, 9, 10, 20, 1, 30, 20, 4];
//     let numeroMasGrande = 0

//     for (let i=0; i < numeros.length ; i ++) {

//         if (numeros[i] > numeroMasGrande){
//             numeroMasGrande = numeros[i]
//         }

//     }

//     return numeroMasGrande;
// }


// const resultadoNumeroMasGrande = numeroMasGrande()
// console.log(resultadoNumeroMasGrande)


//EJERCICIO 6: Usa un bucle while para imprimir los números del 10 al 1.

// let numeroMaximo = 10;


// while(numeroMaximo >= 0) {
//     console.log(numeroMaximo)
//     numeroMaximo = numeroMaximo - 1  
// }


//EJERCICIO 7: Crea una función que verifique si una palabra es un palíndromo.


// const palabra  = "oso"

// //convertir cadena en array - split
// const arrayPalabra = palabra.split('');
// let nuevaPalabra = []



// for (let i = arrayPalabra.length -1; i >=  0 ; i --) {

//     nuevaPalabra.push(arrayPalabra[i])
// }

////convertir array en string

// if (palabra === nuevaPalabra.join('')) {
//     console.log ("Es un palíndromo")
// } else {
//     console.log("No es un palíndromo")
// }

// //version optimizada. 


// const palabraAnalizada = "amar"

// const palabraNueva = palabraAnalizada.split('').reverse().join('')


// if (palabraAnalizada === palabraNueva) {
//     console.log ("Es un palíndromo")
// }else{
//     console.log("No es un palíndromo")
// }

//NOTAS: 


/**
 * EL REVERSE MODIFICA EL ARRAY ORIGINAL, ASI QUE SI NECESITO UN NUEVO ARRAY DEBERIA COPIAR. 
 * 
    const arrayPalabra = palabra.split('');
    const arrayInvertido = [...arrayPalabra].reverse();
 */


//EJERCICIO 8: Escribe un programa que cuente la cantidad de vocales en una cadena.

// const palabra = "Micaela"
// const palabraArray = palabra.toLocaleLowerCase().split('');
// let cantidadDeVocales = 0

// console.log(palabraArray)
// for (let i = 0; i < palabraArray.length; i++) {

//     if ((palabraArray[i] === "a") || (palabraArray[i] === "e") || (palabraArray[i] === "i") || 
//     (palabraArray[i] === "o") || (palabraArray[i] === "u")) {
//         cantidadDeVocales += 1
//     }

// }

// console.log (`La cantidad de vocales de la palabra: ${palabra} es: ${cantidadDeVocales}`)



// //Version mejorada: 

// const palabraVocal = "Micaela";
// const vocales = ["a", "e", "i", "o", "u"]
// const palabraArrayNueva = palabraVocal.toLocaleLowerCase().split('');
// let cantidadDeVocalesNuevas = 0;

// for (const letra of palabraArrayNueva) {
//     if (vocales.includes(letra)) {
//         cantidadDeVocalesNuevas++;
//     }
// }

// console.log (`La cantidad de vocales de la palabra: ${palabraVocal} es: ${cantidadDeVocalesNuevas}`)



//EJERCIO 9: Usa if...else para determinar si un número está en un rango dado (por ejemplo, entre 10 y 50).

// const numero = 54


// if ((numero >= 10) && (numero <=50)){
//     console.log("Numero es mayor a 10 y menor a 50")
// } else {
//     console.log("Numero es menor a 10 o mayor a 50")
// }


//EJERCICIO 10: Escribe una función que devuelva el factorial de un número.

// let numeroFactorial = 10
// let resultado = 1;

// for (let i = numeroFactorial - 1; i>0; i--) {

//     resultado *= i
// } 

// console.log(resultado)


//EJERCICIO 11: Crea un programa que ordene un array de números de menor a mayor (sin usar métodos predefinidos).


//TODO: continuar con este ejercicio 

const arrayDeNumeros = [1, 33, 5, 6, 9]
let arrayOrdenando = []
for (let i=0; i < arrayDeNumeros.length; i++) {


    //arrayDeNumeros [0] == 1
    //arrayOrdenando [0] == 0
    //...

    if (arrayDeNumeros[i] > arrayOrdenando[i]) {
        console.log(arrayDeNumeros[i])
        console.log(arrayOrdenando[i])

        arrayOrdenando.push(arrayDeNumeros[i]);
    }else{
        arrayOrdenando.unshift(arrayDeNumeros[i])
    }


}

console.log(arrayOrdenando)