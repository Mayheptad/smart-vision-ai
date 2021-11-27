const express = require("express");
const app = express();
const bcrypt = require("bcrypt-nodejs");
const cors = require('cors');
const {dbConn} = require('./dbConn');
const knex =  require('knex')(dbConn);
const {handleRegisterRoute} = require('./Controller/register');
const {handleSigninRoute} = require('./Controller/signIn');
const {handleProfileRoute} = require('./Controller/profile');
const {handleHomeRoute} = require('./Controller/home');
const {handleClarifaiApiCallRoute} = require('./Controller/clarifaiApiCall');
const {handleImageCountUpdate} = require('./Controller/imageCountUpdate');
const {validateEmail, validateName, validatePassword} = require('./usefullFuncs/utils');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./Public"));
app.use(express.json());

app.get("/", handleHomeRoute(knex));

app.post("/signin", handleSigninRoute(knex, bcrypt));

app.get("/profile/:id", (req, res) => handleProfileRoute(req, res, knex));

app.put("/image", (req, res) => handleImageCountUpdate(req, res, knex));

app.post("/register", handleRegisterRoute(bcrypt, knex, validateEmail, validateName, validatePassword));

app.post('/clarifaiapicallroute', (req, res) => handleClarifaiApiCallRoute(req, res));

app.listen(
process.env.PORT || 3001, _ =>
  console.log(`server running on port ${process.env.PORT || 3001}`)
);
