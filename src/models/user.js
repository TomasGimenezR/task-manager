const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken = function () {
    //In a real world app, I would set the environment variable in the server as follows:
    // const token = jwt.sign({ _id: this._id }, config.get('jwtPrivateKey'));
    const token = jwt.sign({ _id: this._id }, 'jwtPrivateKey');
    return token;
}

const User = mongoose.model('User', userSchema);

/**
 * Validates user to Log In
 * @param {*} user User to be logged in
 * @returns true if validated, false if the user isn't in the Database or is incorrect
 */
function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });

    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;

