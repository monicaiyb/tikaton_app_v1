const express = require('express');
const colors = require('colors');
const mysql=require('./models/db')
// import morgan from 'morgan';
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

const DB = require('./mysqlBD')

const port=3000;

const app = express(); 



//Express session
const expressSession =require('express-session')({
  secret: 'secret',
  // cookie: {maxAge : 60000},
  resave: false,
  saveUninitialized: false
});

// Handle form data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(expressSession);
app.use(cookieParser());

const server = app.listen(3500, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://localhost:${port}`.magenta.bold);
  });
  
  module.exports = app;