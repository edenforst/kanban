import jwt from 'jsonwebtoken';
import roles from './config/roles.js';

const authenticateUser = (req, res, next) => {
    // Vérifier si l'utilisateur a un jeton JWT valide dans l'en-tête Authorization
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                return res.status(401).json({ message: 'Token invalide' });
            } else {
                // Stocker les informations d'utilisateur dans l'objet req pour une utilisation ultérieure dans les gestionnaires de routes
                req.user = decodedToken.user;

                // Vérifier les autorisations de l'utilisateur en fonction de son rôle
                const userRole = req.user.role;
                const routePermissions = roles[userRole].permissions;
                const requestedRoute = req.originalUrl; // Récupérer l'URL demandée

                // Vérifier si l'utilisateur a les autorisations nécessaires pour accéder à la route demandée
                if (!routePermissions.includes(requestedRoute)) {
                    return res.status(403).json({ message: 'Accès interdit. Vous n\'avez pas les autorisations nécessaires.' });
                }

                // Passer à la prochaine fonction middleware
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Aucun jeton fourni' });
    }
};

export default authenticateUser;