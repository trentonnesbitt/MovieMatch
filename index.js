const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

//connecting to mongo db:
mongoose.connect('keys.mongoURI');


app.get('/',(req,res) => {
    res.send('Hello');
})

app.listen(5000);