console.log('hello snack');

// Crea un array composto da 15 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: 

// nel primo array solo le auto a benzina,  // ciclo for 
// nel secondo solo le auto a diesel,  // ciclo foreach
// nel terzo il resto delle auto.  //array.filter

// Infine stampa separatamente i 3 array.

let carsList = [
    {
        marca: 'fiat',
        modello: 500,
        alimentazione: 'benzina'
    },

    {
        marca: 'audi',
        modello: 'blem',
        alimentazione: 'benzina'
    },

    {
        marca: 'tesla',
        modello: 'brum',
        alimentazione: 'elettrico'
    },

    {
        marca: 'bmw',
        modello: 'at30',
        alimentazione: 'diesel'
    },

    {
        marca: 'fiat',
        modello: '500xl',
        alimentazione: 'gpl'
    },

    {
        marca: 'polaris',
        modello: 'cof',
        alimentazione: 'elettrico'
    },

    {
        marca: 'toyota',
        modello: 'yaris',
        alimentazione: 'metano'
    },

    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'metano'
    },

    {
        marca: 'ford',
        modello: 'focus',
        alimentazione: 'diesel'
    },

    {
        marca: 'fiat',
        modello: 'lancia',
        alimentazione: 'metano'
    },

    {
        marca: 'alfa romeo',
        modello: 'giulia',
        alimentazione: 'benzina'
    },

    {
        marca: 'audi',
        modello: 'mono',
        alimentazione: 'gpl'
    },

    {
        marca: 'toyota',
        modello: 'giappa',
        alimentazione: 'elettrico'
    },

    {
        marca: 'bmw',
        modello: 'fiz',
        alimentazione: 'diesel'
    },

    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'metano'
    },
]

console.log(carsList.length);
console.log('AUTO A BENZINA');
for (let i = 0; i < carsList.length; i++) {

    let myObject = carsList[i];
    // console.log(myObject);

    if (myObject.alimentazione = 'benzina') {
        console.log(myObject);
    }
}
console.log('-------');

carsList.forEach(element => {

    if (element.alimentazione = 'diesel') {
        console.log(element);
    }
})

console.log('-------');

const result = carsList.filter(element => element.alimentazione = 'diesel' || 'benzina');
console.log(result);