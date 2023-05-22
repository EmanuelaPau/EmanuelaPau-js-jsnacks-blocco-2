// Calcola la media dei primi 10 numeri 

let dividendoMedia;
let somma = 0;
dividendoMedia = 0;

for (let i = 1; i <= 10; i++) {
    somma = somma + i;
    dividendoMedia = dividendoMedia + 1;
}

console.log(somma);
console.log(dividendoMedia);

let media = somma / dividendoMedia;

console.log(media);