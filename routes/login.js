var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');

let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);

/* GET home page. */
router.get('/', function(req, res) {
    user.name = req.body.name;
    user.password = req.body.password;

    const usersString = JSON.stringify(siteUsers);
        for(var x = 0; x < usersString.length; x++){
            if(user.name == usersString[x].name & user.password == usersString[x].password){
                res.render('listofusers');
                console.log("user login success");
            }else{
                res.render('index');
            }
        }
});

module.exports = router;
