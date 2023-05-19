// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

console.log('hello')

let myList = [];

let mySum = 0;

while (mySum < 50) {
    let yourNumber = prompt('tell me a number');
    myList.push(yourNumber);
    // console.log(yourNumber);
    mySum = mySum + parseInt(yourNumber);
    // console.log(mySum);
    console.log(myList);
}

// let button = document.querySelector('button');

// let input = document.querySelector('input')

// button.addEventListener('click', function () {
//     let myList = [];

//     let mySum = 0;
//     let yourNumber = input.value;
//     myList.push(yourNumber);

//     while (mySum < 50) {
//         // console.log(yourNumber);
//         mySum = mySum + parseInt(yourNumber);
//         // console.log(mySum);
//         console.log(myList);
//     }
// })