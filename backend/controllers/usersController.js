import User from '../models/user.js';
// import bcrypt from 'bcrypt';

// CREATE - Création d'un nouvel utilisateur
export const createUser = async (req, res) => {
    try {
        
        // Récupérer les données de la requête
        // const {username} = req.body;
        // const {password} = req.body;
        // const {role} = req.body;

        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        });
        // Sauvegarder l'utilisateur dans la base de données
        const savedUser = await newUser.save();
        console.log("Utilisateur créé avec succès", savedUser);

        // Hacher le mot de passe
        // const bcrypt = await import('bcrypt');
        // const hashedPassword = await bcrypt.default.hash(password, 10);

        // Créer un nouvel utilisateur


        // Enregistrer l'utilisateur avec le mot de passe haché
        // const newUser = await User.create({ username, password, role });

        res.status(201).json(newUser); // Répondre avec l'utilisateur créé
    } catch (error) {
        res.status(400).json({ message: error.message }); // Répondre en cas d'erreur
    }
};



// // READ - Récupérer tous les utilisateurs
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // READ - Récupérer un utilisateur par son ID
// export const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (user) {
//             res.json(user);
//         } else {
//             res.status(404).json({ message: 'Utilisateur non trouvé' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // UPDATE - Mettre à jour un utilisateur
// export const updateUser = async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedUser);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // DELETE - Supprimer un utilisateur
// export const deleteUser = async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Utilisateur supprimé' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

export default { createUser }