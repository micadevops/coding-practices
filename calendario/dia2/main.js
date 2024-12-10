const names = ["Micaela", "Juan", "Pedrpppppppppp"]

// console.log("************")
// nombres.forEach((item) => {
//      console.log(`*${item}*`)
// })
// console.log("************")


// spread, guardo todos los elementos de un array en una variable.
// const numbers = [10, 20, 30];
// console.log(...numbers); 

// const nombreMasLargo = nombres.reduce((acc, elemento) => {
//     return acc.length > elemento.length ? acc : elemento;
//     }, '');



/** El reduce se usa para recorrer un array y hacer algo con cada uno de sus elementos.
En este caso, vamos a empezar el acc con un elemento ' ' , y vamos a comparar el largo del 
acc con el largo del elemento, si el acc es mayor se queda con el acc, 
si no lo es se queda con el elemento.

Luego, a ese elemento, le vamos a hacer un .length, y guardamos ese largo en maxLength
**/

// const maxLength = nombres.reduce((acc, elemento) => {
//     return acc.length > elemento.length ? acc : elemento;
// }, '').length;

// const border = '*'.repeat(maxLength + 3); // el +4 es para que agregue unos especios para que se vea bien
// console.log(border);

// nombres.forEach((item) => {
//     console.log(`*${item}${' '.repeat(maxLength - item.length)}*`) //voy a agregar especios vacios extras, el mayor largo, menos el largo del elemento

// })

// names.forEach((item) => {
//     result += (`* ${item} ${' '.repeat(maxLength - item.length)}\n *`)
// })

// console.log(border);



function createFrame(names) {

    const maxLength = names.reduce((acc, elemento) => {
        return acc.length > elemento.length ? acc : elemento;
    }, '').length;
  

  
    const border = '*'.repeat(maxLength + 4 );
    let result = border + '\n';
  
  
    names.forEach((item) => {
        result += (`* ${item}${' '.repeat(maxLength - item.length)} *\n`)
    })
  
    result+=border
  
    return result
  }

  const resulta = createFrame(names)
  console.log(resulta)