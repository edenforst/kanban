// Récupération du formulaire d'ajout d'utilisateur
const userForm = document.getElementById('userForm');

// Ajout d'un écouteur d'événement pour soumettre le formulaire
userForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupération des valeurs saisies dans le formulaire
    const formData = new FormData(userForm);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Envoi des données au serveur via une requête POST
    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de l\'utilisateur.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Utilisateur ajouté avec succès:', data);
        // Réinitialisation du formulaire ou autres actions nécessaires
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});

// Récupération du formulaire d'ajout de carte
const cardForm = document.getElementById('cardForm');

// Ajout d'un écouteur d'événement pour soumettre le formulaire
cardForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupération des valeurs saisies dans le formulaire
    const formData = new FormData(cardForm);
    const cardData = {};
    formData.forEach((value, key) => {
        cardData[key] = value;
    });

    // Envoi des données au serveur via une requête POST
    fetch('/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de la carte.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Carte ajoutée avec succès:', data);
        // Réinitialisation du formulaire ou autres actions nécessaires
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});


// Récupération du formulaire d'ajout de tableau
const boardForm = document.getElementById('boardForm');

// Ajout d'un écouteur d'événement pour soumettre le formulaire
boardForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire

    // Récupération des valeurs saisies dans le formulaire
    const formData = new FormData(boardForm);
    const boardData = {};
    formData.forEach((value, key) => {
        boardData[key] = value;
    });

    // Envoi des données au serveur via une requête POST
    fetch('/boards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(boardData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout du tableau.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Tableau ajouté avec succès:', data);
        // Réinitialisation du formulaire ou autres actions nécessaires
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
});
