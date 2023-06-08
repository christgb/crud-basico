const express = require('express')
const router = express.Router()
const users = require('./users')


exports.getUsersJson = function (request, response) {
    response.render('getUser', {users});
  };
  

 
  

  

