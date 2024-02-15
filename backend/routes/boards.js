import express from "express";
const router = express.Router();
const usersController = require('../controllers/boardsController');

// Routes pour les tableaux
router.get('/', boardsController.getAllUsers);
router.get('/:id', boardsController.getUserById);
router.post('/', boardsController.createUser);
router.put('/:id', boardsController.updateUser);
router.delete('/:id', boardsController.deleteUser);

module.exports = router;
