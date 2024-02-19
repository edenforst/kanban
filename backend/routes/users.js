import express from "express";
const router = express.Router();
const usersController = require('../controllers/usersController');

// Routes pour les utilisateurs
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

export default router;