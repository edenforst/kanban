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
