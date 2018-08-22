const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    emailAddress: String
});

mongoose.model('users',userSchema);