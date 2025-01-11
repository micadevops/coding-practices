// //EJERCICIO 1
// function sumar (numero1, numero2){
//     return numero1 + numero2
// }

// const resultado = sumar(10, 20)

// console.log(resultado)


// //EJERCICIO 2

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


// //EJERCICIO 3


// function mostrarNumeros () {
    
//     for ( let i = 10;  i >= 0; i--){

//         console.log (i)

//     }
// }


// mostrarNumeros()


// function cadenaReves (texto) {


//     let nuevaPalabra = "";


//     for (let i = texto.length -1 ; i >=0; i -- ){
//         nuevaPalabra += texto [i]
       
//     }

//     return nuevaPalabra
// }


// const nuevaPalabraResultado = cadenaReves("Micaela")
// console.log(nuevaPalabraResultado)




// numeros[0] == 1
//numeroNuevo == 0 

// numeroMasGrande == 1

// // numeros[1] == 10
// numeroMasGrane == 1


// numeroMasGrande == 10


// // numeros[2] == 2
// numeroMasGrande == 10

// let numeroMasGrande



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


// const resultado = numeroMasGrande()
// console.log(resultado)


// let numeroMaximo = 10;


// while(numeroMaximo >= 0) {
//     console.log(numeroMaximo)
//     numeroMaximo = numeroMaximo - 1  
// }




// const palabra  = "oso"

// //convertir cadena en array - split
// const arrayPalabra = palabra.split('');
// let nuevaPalabra = []



// for (let i = arrayPalabra.length -1; i >=  0 ; i --) {

//     nuevaPalabra.push(arrayPalabra[i])
// }

//convertir array en string

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



const numero = 54


if ((numero >= 10) && (numero <=50)){
    console.log("Numero es mayor a 10 y menor a 50")
} else {
    console.log("Numero es menor a 10 o mayor a 50")
}

