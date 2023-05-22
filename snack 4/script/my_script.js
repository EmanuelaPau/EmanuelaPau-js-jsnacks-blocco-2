// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const parolaUno = prompt('tell me a word');
const parolaDue = prompt('tell me a second word');

// console.log(parolaUno, parolaDue)

if (areSameLength(parolaUno, parolaDue)) {
    console.log('sono lunghe uguali')
} else if (parolaUno.length > parolaDue.length) {
    console.log('first word is longer')
} else if (parolaUno.length < parolaDue.length) {
    console.log('second word is longer');
}


/**
 * A function that determines if two words are the same lenght
 * @param {*} firstWord first word to determine 
 * @param {*} secondWord second word to determine 
 */

function areSameLength(firstWord, secondWord) {
    const firstWordLenght = firstWord.lenght;
    console.log(firstWordLenght);
    const secondWordLenght = secondWord.lenght;
    console.log(secondWordLenght);

    if (firstWordLenght === secondWordLenght) {
        return true;
    } return false;
}