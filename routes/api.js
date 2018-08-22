const express = require('express');
const router = express.Router();

// gets list of users from DB
router.get('/api-gt', function(req,res){
    res.send({type:'GET'});
});
// adds new users to db
router.post('/api-pst', function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        id: req.body.id,
        name: req.body.name
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