var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var budgetSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    },
    Budget: {
        type: Number,
        required: true,
        unique: false
    },
    color: {
        type: String,
        required: true,
        unique: false,
        minlength: 7,//included # also thats why set limit to 7
        maxlength: 7//included # also thats why set limit to 7
    }
}, {collection: 'Budget'});

module.exports = mongoose.model('Budget', budgetSchema);  