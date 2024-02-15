const jwt = require('jsonwebtoken');

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
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Aucun jeton fourni' });
    }
};

module.exports = authenticateUser;
