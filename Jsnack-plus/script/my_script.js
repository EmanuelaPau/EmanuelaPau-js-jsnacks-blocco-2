/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

const listUl = document.getElementById('my_list');

function createElementLi() {
    const liElement = document.createElement('li');
    return liElement;
}

for (let i = 0; i < 10; i++) {
    const actualLi = createElementLi();
    listUl.appendChild('actualLi');

    const textList = [ciao, ciaone, pippo, pippa, claudio, claudia, pipa, pierina, pierino, mini]
    liElement.innerHTML(textList[i])
}

