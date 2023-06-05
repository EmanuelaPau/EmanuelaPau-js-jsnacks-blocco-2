console.log('hello snack');
const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            array: ['gino', 'gina', 'ginetto', 'gin'],
            arraytwo: ['pippo', 'pluto', 'paperino', 'minnie', 'topolino', 'paperina', 'claudio', 'pino', 'jina', 'qui', 'quo', 'qua']
        }
    },
    // daassas
}).mount('#app')

// Genero due cicli for con vue, uno che cicla in un array di quattro elementi e li stampa su schermo, l'altro che stampa su schermo i primi 10 numeri.