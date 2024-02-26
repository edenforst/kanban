import User from '../models/user.js';
import bcrypt from 'bcrypt';

// CREATE - Création d'un nouvel utilisateur
export const createUser = async (req, res) => {
    try {

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
        });

        // Sauvegarder l'utilisateur dans la base de données
        const savedUser = await newUser.save();
        console.log("Utilisateur créé avec succès", savedUser);

        res.status(201).json(newUser); // Répondre avec l'utilisateur créé
    } catch (error) {
        res.status(400).json({ message: error.message }); // Répondre en cas d'erreur
    }
};



// READ - Récupérer tous les utilisateurs
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ - Récupérer un utilisateur par son ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE - Mettre à jour un utilisateur
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Supprimer un utilisateur par ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export default { createUser, getAllUsers, getUserById, updateUser, deleteUser };