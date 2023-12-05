const mongoose = require('mongoose');

let schema = mongoose.Schema;

let UserSchema = new schema({
    firstName: String,
    lastName: String,
    created: String,
    sessionTimeOut: Number
});

module.exports = mongoose.model('users', UserSchema);
