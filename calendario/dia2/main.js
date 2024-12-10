const nombres = ["Micaela"]

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


const maxLength = nombres.reduce((acc, elemento) => {
    return acc.length > elemento.length ? acc : elemento;
}, '').length;

const border = '*'.repeat(maxLength + 4 );
console.log(border);

nombres.forEach((item) => {
    console.log(`* ${item} ${' '.repeat(maxLength - item.length)}*`)

})
console.log(border);