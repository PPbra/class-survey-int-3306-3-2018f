const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    _id: String,
    role_id: Number,
    class: Array,
    token: String
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;