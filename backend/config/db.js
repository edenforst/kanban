const mongoose = require('mongoose');

// URL de connexion à votre base de données MongoDB
const dbURI = 'mongodb://localhost:27017/kanban';

// Configurer la connexion à la base de données
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Gérer les événements de connexion, d'erreur et de déconnexion
mongoose.connection.on('connected', () => {
    console.log('Connexion à la base de données MongoDB établie');
});

mongoose.connection.on('error', (err) => {
    console.error('Erreur de connexion à la base de données :', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Déconnexion de la base de données MongoDB');
});

// Exporter l'objet de connexion Mongoose
module.exports = mongoose.connection;