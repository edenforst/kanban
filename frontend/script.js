// document.addEventListener('DOMContentLoaded', function() {
//     const cards = document.querySelectorAll('.card');

//     cards.forEach(card => {
//         card.addEventListener('click', function() {
//             alert(`Clicked on: ${card.textContent}`);
//         });
//     });
// });

// Sélection des éléments glissables
const cards = document.querySelectorAll('.card');

// Ajout d'un gestionnaire d'événements pour dragstart
cards.forEach(card => {
    card.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', card.id);
    });
});

// Sélection des éléments cibles
const columns = document.querySelectorAll('.column');

// Ajout de gestionnaires d'événements pour dragover, dragenter, dragleave et drop
columns.forEach(column => {
    column.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    column.addEventListener('dragenter', function(event) {
        column.classList.add('dragover');
    });

    column.addEventListener('dragleave', function(event) {
        column.classList.remove('dragover');
    });

    column.addEventListener('drop', function(event) {
        event.preventDefault();
        const cardId = event.dataTransfer.getData('text/plain');
        const card = document.getElementById(cardId);
        column.appendChild(card);
        column.classList.remove('dragover');
        // Ajouter ici la logique pour mettre à jour les données (par exemple, déplacer la carte dans le modèle de données)
    });
});

// Bouton pour créer une carte
document.addEventListener('DOMContentLoaded', () => {
    const createCardBtn = document.getElementById('createCardBtn');
    createCardBtn.addEventListener('click', () => {
        // Afficher un formulaire modal pour ajouter une carte
        const title = prompt('Entrez le titre de la carte :');
        const description = prompt('Entrez la description de la carte :');
        const defaultColumn = 'To Do';
        if (title && description) {
            // Créer un élément de carte avec les données saisies
            const card = document.createElement('div');
            card.classList.add('card');
            card.draggable = true;
            card.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;
            // Ajouter la carte à la colonne par défaut
            const columnContainer = document.querySelector(`.column[data-column="${defaultColumn}"]`);
            if (columnContainer) {
                columnContainer.appendChild(card);
            } else {
                alert('Colonne par défaut invalide !');
            }
        } else {
            alert('Veuillez remplir tous les champs !');
        }
    });
});

//create user
document.addEventListener('DOMContentLoaded', () => {
    const createCardBtn = document.getElementById('createUsr');
    createCardBtn.addEventListener('click', () => {
        // Afficher un formulaire modal pour ajouter une carte
        const username = prompt('Entrez le nom :');
        const password = prompt('Entrez le password :');
        const role = prompt('Entrez le rôle :');
    });
});

