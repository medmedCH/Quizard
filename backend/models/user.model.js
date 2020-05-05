const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    username: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    phonenumber: {
        type: String,
    },
    borndate: {
        type: Date
    },
    bornplace: {
        type: String
    },
    Firstname: {
        type: String
    },
    Lastname: {
        type: String,
    },
    role: {
        type: String
    },
    avatar: {
        type: String
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    resetPasswordExpires: {
        type: Date,
        default: null
    },

    google: {
        id: String,
        token: String,
        email: String,
        name: String

    }



});

userSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};
userSchema.methods.validPassword = function (pwd) {
    return (this.password === pwd);
};
const User = mongoose.model('users', userSchema);
module.exports = User;
