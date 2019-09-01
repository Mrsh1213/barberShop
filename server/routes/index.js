var express = require('express');
var router = express.Router();
const {checkToken, getToken,hasRole} = require("../middleware/auth");
const {findByUsername, addUser,User} = require("../models/User");


/* GET home page. */
router.get('/dashboard',checkToken,hasRole(["ADMIN","SUPPORTER","CUSTOMER"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
router.get('/getUser/:username?', function (req, res, next) {
    const {username} = req.params;
    findByUsername(username).then(user => {
        if (user) {

            res.json(user);
        } else {
            res.json(null)
        }

    }).catch(err => {
        res.json(err);
    });


});
router.post('/addUser', function (req, res, next) {
    const {username, password,role} = req.body;
    addUser({role:role,username: username, password: password},function (err, user){
        if(err){
            res.status(409).json(err)
        }else {
            res.status(201).json(user)
        }
    });

});
router.get('/login/:username?/:password?', async function (req, res) {
    const {username, password} = req.params;
    if (username && password) {
        getToken(username, password).then(token => {
            if (token.token) {
                res.status(200).json(token)
            } else {
                res.status(409).json(token)
            }

        }).catch(err => {
            res.status(409).json(err)
        });
    } else {
        res.status(409).json({
            status: -1,
            msg: "لطفا نام کاربری و کلمه عبور را وارد نمایید"
        })
    }
});
router.get('/gtest', function (req, res, next) {
  res.json({name:"mohammad"})
});
router.get('/', async function (req, res) {
    res.sendFile('public/build/index.html');
});


module.exports = router;
