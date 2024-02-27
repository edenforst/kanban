const roles = {
    admin: {
        permissions: ['createUser', 'updateUser', 'deleteUser', 'createBoard', 'updateBoard', 'deleteBoard', 'createCard', 'updateCard', 'deleteCard']
    },
    scrum_master: {
        permissions: ['createBoard', 'updateBoard', 'deleteBoard', 'createCard', 'updateCard', 'deleteCard']
    },
    user: {
        permissions: ['createCard', 'updateCard']
    }
};

module.exports = roles;
