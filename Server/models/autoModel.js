const mongoose = require('mongoose');

let schema =  mongoose.Schema;

let AutoSchema = new schema({
    Version : Number,
    Key : String,
    Type : String,
    Rank : Number,
    LocalizedName : String,
    Country : Object,
    AdministrativeArea : Object
});

module.exports =  mongoose.model('autocompletes',AutoSchema);
