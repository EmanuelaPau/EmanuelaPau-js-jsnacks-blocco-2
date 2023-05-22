// Calcola la media dei primi 10 numeri 

let dividendoMedia = 0;
let somma = 0;

for (let i = 1; i <= 10; i++) {
    somma = somma + i;
    dividendoMedia = dividendoMedia + 1;
}

console.log(somma);
console.log(dividendoMedia);

let media = somma / dividendoMedia;

console.log(media);

// altrimenti 

// let dividendoMediaDue = 0;
// let sommaDue = 0;
// let numeroRipetizioni = 0;

// while (i !== 10) {

//     sommaDue = sommaDue + numeroRipetizioni;
//     dividendoMedia = dividendoMedia + 1;
// }