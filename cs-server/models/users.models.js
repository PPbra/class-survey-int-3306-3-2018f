const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    id: String,
    role_id: Number,
    class: Array
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;