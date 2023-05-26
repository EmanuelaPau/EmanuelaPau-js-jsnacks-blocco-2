console.log('hello snack');

// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..

const myInput = document.querySelector('.form-input');
const mySubimitListButton = document.querySelector('#button-add-recipe');
const myGenerateRecipeButton = document.querySelector('#button-stylize-recipe');

const myUlElement = document.querySelector('.list');
const myIngredientsList = [];

mySubimitListButton.addEventListener('click', function () {
    const myInputValue = myInput.value;
    myIngredientsList.push(myInputValue);
    console.log(myIngredientsList);
    myUlElement.innerHTML += `
    <li>
        ${myInputValue} 
    </li>
    `;
    myInput.value = '';

}); 
