import express from "express";
const router = express.Router();
const usersController = require('../controllers/cardsController');

// Routes pour les cartes
router.get('/', cardsController.getAllUsers);
router.get('/:id', cardsController.getUserById);
router.post('/', cardsController.createUser);
router.put('/:id', cardsController.updateUser);
router.delete('/:id', cardsController.deleteUser);

module.exports = router;
