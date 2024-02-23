import express from "express";
import boardsController from '../controllers/boardsController';

const router = express.Router();

// Routes pour les tableaux
router.get('/', boardsController.getAllBoards);
router.get('/:id', boardsController.getBoardById);
router.post('/', boardsController.createBoard);
router.put('/:id', boardsController.updateBoard);
router.delete('/:id', boardsController.deleteBoard);

export default router;
