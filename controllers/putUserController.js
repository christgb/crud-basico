const express = require('express')
const router = express.Router()
const users = require('./users')

exports.getPut = function (request, response) {
    const { id } = request.params;
    response.render('usersUpdate', {id});
}

exports.usersPatch = function (request, response) {
     try {

        const { id } = request.params;
        const { nombre } = request.body;

          const user = users.find((u)=>{
              return u.id === +id;
              
          })
    
          user.nombre = nombre
    
           response.redirect(`/users`)

     } catch (error) {

        response.status(400).json({ error: "not found" });
     }
  
  };