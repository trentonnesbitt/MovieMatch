const express = require('express');
const router = express.Router();
const makeUser = require('../models/Users');
 
// gets list of users from DB
router.get('/api-gt', function(req,res){
    res.send({type:'GET'});
});
// adds new users to db
router.post('/api-pst', function(req,res){
    makeUser.create(req.body).then(function(user1){
    res.send(user1);
    });
});
// update user in db
router.put('/api-put/:id', function(req,res){
    res.send({type:'PUT'});
});
// delete user from db
router.delete('/api-del/:id', function(req,res){
    res.send({type:'DELETE'});
});


module.exports = router;