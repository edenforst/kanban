import express from "express";
const router = express.Router();
const usersController = require('../controllers/boardsController');

// Routes pour les tableaux
router.get('/', boardsController.getAllBoards);
router.get('/:id', boardsController.getBoardById);
router.post('/', boardsController.createBoard);
router.put('/:id', boardsController.updateBoard);
router.delete('/:id', boardsController.deleteBoard);

export default router;
