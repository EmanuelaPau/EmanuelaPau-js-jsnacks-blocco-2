console.log('hello snack');

// let hisShots;

// console.log(hisShots);

// let allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// function getRandomString(randomLetter, randomNumbers) {

// }

// const basketPlayer = {
//     playerId: 2,
//     name: "LeBron",
//     surname: "James",
//     age: 38,
//     scoreAverage: Math.floor(Math.random() * 30) + 1,
//     "average 3 points free shooting": Math.floor(Math.random() * 100) + 1,
//     stops: Math.floor(Math.random() * 30 + 1) + 1,
//     shots: Math.floor(Math.random() * (100 - 20 + 1)) + 20
// }

// console.log(basketPlayer);

// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione

let variety = ['lungo', 'tondo', 'rosso', 'verde', 'giallo'];

function randomNumber(minNumber, maxNumber) {
    let myRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return myRandomNumber;
}

function myPeperone(varietyArray) {
    let myPeperoni = {
    };

    let varietyRandomNumber = randomNumber(0, varietyArray.lenght - 1);
    let myVariety = varietyArray[varietyRandomNumber];
    myPeperoni['variety'] = myVariety;

    let randomWeight = randomNumber(50, 300);
    let myWeight = `${randomWeight}gr`;
    myPeperoni['weight'] = myWeight;

    let randomLength = randomNumber(2, 20);
    let myLenght = `${randomLength}cm`;
    myPeperoni['lenght'] = myLenght;

    return myPeperoni;
}

console.log(myPeperone(variety));


let myPeperoni = []

for (let i = 0; i < 10; i++) {
    myPeperoni.push(myPeperone(variety));
}

console.log(myPeperoni);