function organizeInventory(inventory) {
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

//1. Filtrar por categoria, es decir, los categoria toys, estar en un nuevo objeto. 
//2. En el nuevo objeto, almacenar los nombres de los objetos y su cantidad.
//3. Finalmente, retornar el objeto.

    const resultado = inventory.reduce ((acumulador, item) => {
        //{[0].category} = {}
        //
        if (!acumulador[item.category]) {
            acumulador[item.category] = {};
            console.log("Hola desde adentro del if")
        }else{
            console.log("Hola")
        }
        return acumulador
        
    }, {})
}

// const result = inventory.reduce((acumulador, item) => {
//     if (!acumulador[item.category]) {
//         acumulador[item.category] = {};
//     }
//     acumulador[item.category][item.name] = item.quantity;
//     return acumulador;
// }, {})


const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventory)