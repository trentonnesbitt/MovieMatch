const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes/api');
const app = express();
require('./models/Users');

//connecting to mongo db:
mongoose.connect(keys.mongodbURI,{ useNewUrlParser: true });

//bodyParser is just the middle man
app.use(bodyParser.json());

//initialize routes
app.use(routes);



app.listen(5000);