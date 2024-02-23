import express from "express";
import cardsController from '../controllers/cardsController';

const router = express.Router();

// Routes pour les cartes
router.get('/', cardsController.getAllCards);
router.get('/:id', cardsController.getCardById);
router.post('/', cardsController.createCard);
router.put('/:id', cardsController.updateCard);
router.delete('/:id', cardsController.deleteCard);

export default router;
