const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    _id: String,
    role_id: Number,
    token: String,
    password: String,
    class: Array
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;