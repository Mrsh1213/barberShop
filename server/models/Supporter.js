var express = require('express');
var router = express.Router();
const {checkToken,hasRole} = require("../middleware/auth");
const {findByUsername, addUser,User} = require("../models/User");


/* GET home page. */
router.get('/getById/:id?',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    const {id} = req.params;
    res.status(200).json({Dashboard:"Dashboard"});
});
router.get('/getAll',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
router.post('/add',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
router.put('/edit',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
router.delete('/delete',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
router.put('/deActive',checkToken,hasRole(["ADMIN"]) ,function (req, res) {
    res.status(200).json({Dashboard:"Dashboard"});
});
