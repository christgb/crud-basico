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
      

        console.log("ID:", id);
        console.log("Nombre:", nombre);

          const user = users.find((u)=>{
              return u.id === +id;
              
          })

          console.log("Usuario encontrado:", user);
    
          user.nombre = nombre
          console.log("Nombre actualizado:", user.nombre);
    
           response.redirect(`/users`)

     } catch (error) {

        response.status(400).json({ error: "not found" });
     }
  
  };