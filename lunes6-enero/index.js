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



//NO terminado //TODO: terminar ejercicio 
const palabra  = "amar"
const arrayPalabra = palabra.split('');


for (let i=0; i < arrayPalabra.length; i ++) {

    console.log("Primera letra")
    console.log(arrayPalabra[i])

    for (let i = arrayPalabra.length ; i > 0 ; i --) {

        console.log("Segunda letra")
        console.log(arrayPalabra[i -1])
    
    }
}
