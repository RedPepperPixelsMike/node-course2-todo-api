const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const _ = require('lodash');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    }
    ,
    password: {
        type: String,
        required: true,
        minlength: 6
    }
    ,
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);

};

UserSchema.methods.generateAuthTokens = function () {
    let user = this;
    console.log("1");
    let access = 'auth';
    console.log("2");
    let token = jwt.sign(
        {_id: user._id.toHexString(), access},
        'abc123');
    console.log("3");
    user.tokens.push({
        access,
        token
    });
    console.log("4");
    return user.save().then(() => {
        console.log("5");
        return token;
    });
};

let User = mongoose.model('User', UserSchema);

module.exports = {
    User
};