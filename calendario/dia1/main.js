function prepareGifts(gifts) {
    

    const giftOutDuplicate = gifts.filter((item, index) => gifts.indexOf(item) === index);
    giftOutDuplicate.sort((a, b) => a - b);
    console.log(giftOutDuplicate)

}
  
const gifts = [1, 40, 30, 31, 30, 20, 21]

prepareGifts(gifts)


/** 
 * 

Para gifts = [1, 40, 30, 31, 30, 20, 21]:

Primer elemento el filter dice:

item = 1, index = 0

gifts.indexOf(1) = 0

¿0 === 0? → Sí, se incluye 1.

Segundo elemento el filter dice:

item = 40, index = 1

gifts.indexOf(40) = 1 aparece por primera vez en el indice 1

¿1 === 1? → Sí, se incluye 40.

Tercer elemento en el filter dice:

item = 30, index = 2

gifts.indexOf(30) = 2 la primera vez que aparece el 30, es en el indice 2.

¿2 === 2? → Sí, se incluye 30.
Cuarto elemento:

item = 31, index = 3
gifts.indexOf(31) = 3
¿3 === 3? → Sí, se incluye 31.
Quinto elemento:

item = 30, index = 4
gifts.indexOf(30) = 2 (la primera vez que apareció 30 fue en el índice 2).
¿2 === 4? → No, se descarta 30.
 */