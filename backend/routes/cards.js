import express from "express";
const router = express.Router();
const usersController = require('../controllers/cardsController');

// Routes pour les cartes
router.get('/', cardsController.getAllCards);
router.get('/:id', cardsController.getCardById);
router.post('/', cardsController.createCard);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);

export default router;
