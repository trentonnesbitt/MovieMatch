const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true }
});

const makeUser = mongoose.model('Users',userSchema);

module.exports = makeUser;