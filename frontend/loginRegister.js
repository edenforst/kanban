document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = loginForm.elements.username.value;
        const password = loginForm.elements.password.value;
        const response = await loginUser(username, password);
        // Gérer la réponse du serveur et stocker le jeton JWT
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newUsername = registerForm.elements.newUsername.value;
        const newPassword = registerForm.elements.newPassword.value;
        const role = registerForm.elements.role.value; // Récupérer la valeur du champ de rôle
        const response = await registerUser(newUsername, newPassword, role);
    });
});

async function loginUser(username, password) {
    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            throw new Error('Failed to login');
            
        }
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token); // Stockez le jeton dans le localStorage
        // Rediriger vers la page index.html
        window.location.href = 'index.html';
        return token; // Retourne le token JWT
    } catch (error) {
        console.error('Error logging in:', error.message);
        throw error;
    }
}


async function registerUser(newUsername, newPassword, role) {
    try {
        const response = await fetch('/users', { // Modifier l'URL en fonction de votre endpoint d'inscription
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: newUsername, password: newPassword, role })
        });
        if (!response.ok) {
            throw new Error('Failed to register');
        }
        const data = await response.json();
        return data.token; // Retourne le token JWT
    } catch (error) {
        console.error('Error registering:', error.message);
        throw error;
    }
}
