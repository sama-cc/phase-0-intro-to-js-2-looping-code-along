// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

const newArray = [];

function writeCards(names, event) {
    for (let n = 0; n < names.length; n++) {
        newArray[n] = `Thank you, ${names[n]}, for the wonderful ${event} gift!`;
    }
    return newArray
}

wrapGifts(gifts);

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}

