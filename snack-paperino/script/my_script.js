console.log('hello snack');

/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */

const animals = ['pippo', 'PLUTO', 'PapERino'];
console.log(animals);

// const myAnimalsFirstLetterUppercase = [...animals];
// console.log(animalsFirstLetterUppercase);

// let allAnimals = " ...animals";

let myAnimalsFirstLetterUppercase = [];

animals.forEach((word) => {
    const newString = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    myAnimalsFirstLetterUppercase.push(newString);
})

console.log(myAnimalsFirstLetterUppercase);