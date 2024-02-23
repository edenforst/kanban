import express from "express";
import usersController from '../controllers/usersController.js';

const router = express.Router();

// Routes pour les utilisateurs
router.post('/', usersController.createUser);
// router.get('/', getAllUsers);
// router.get('/:id', getUserById);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;