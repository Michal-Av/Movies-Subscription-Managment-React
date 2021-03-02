const mongoose = require('mongoose');

let schema =  mongoose.Schema;

let PerSchema = new schema({
    userID : String,
    permissions : [String]
 });
module.exports =  mongoose.model('permissions',PerSchema);
