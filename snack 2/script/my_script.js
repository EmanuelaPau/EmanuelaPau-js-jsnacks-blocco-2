// Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
// Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
// Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.

let MyRandomNumber = Math.floor(Math.random() * 100 + 1);
console.log(MyRandomNumber);

let yourGuess;
let tryCounter = 0

let Guessed = false;
while (MyRandomNumber !== yourGuess) {

    yourGuess = parseInt(prompt('guess the number'));
    if (yourGuess < MyRandomNumber) {
        console.log("il numero che hai messo è minore di quello che devi indovinare");
    } else if (yourGuess > MyRandomNumber) {
        console.log("il numero che hai messo è maggiore di quello che devi indovinare");
    }
    let Guessed = true;
    tryCounter = tryCounter + 1;
}

console.log(`bravo, hai indovinato in ${tryCounter} tentativi`);
