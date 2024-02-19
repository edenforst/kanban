const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'scrum_master', 'user'], default: 'user' }
});

const User = mongoose.model('User', userSchema);

export default router;
