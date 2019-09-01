const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const {checkToken}=require("./middleware/auth");
const {connectMongoDb}=require("./config/mongoose");

require('dotenv').config();



const app = express();
app.use(bodyParser.urlencoded({
    extended: false,

}));
app.disable('x-powered-by');
app.disable('etag');

app.use(bodyParser.json());
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

// connectMongoDb();
app.use('/api/v1.0', checkToken,usersRouter)
app.use('/', indexRouter);
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

module.exports = app;
