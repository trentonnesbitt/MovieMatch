const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
require('.models/Users');

//connecting to mongo db:
mongoose.connect('keys.mongoURI');


app.get('/',(req,res) => {
    res.send({bye:'test'});
});

app.listen(5000);