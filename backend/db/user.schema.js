const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userid: { type: String, },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
},{collection:'userdetails'});

const UserDetail = mongoose.model('UserDetail', userSchema);

module.exports = UserDetail;
