function prepareGifts(gifts) {
    
    const giftOutDuplicate = gifts.filter((item, index) => gifts.indexOf(item) === index);
    giftOutDuplicate.sort((a, b) => a - b);
    console.log(giftOutDuplicate)

}
  
const gifts = [1, 40, 30, 31, 30, 20, 21]

prepareGifts(gifts)
