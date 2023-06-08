const express = require('express')
const router = express.Router()
const users = require('./users')


 exports.usersPost = function (request, response) {
    try{
      const { id, nombre } = request.body;
      if(!nombre || nombre === ""){
        response.status(400).json({ error: "El nombre no puede estar vacio" });
        return
      }
    
      const existName = users.some((user) => user.nombre === nombre)
      const existID = users.some((user) => user.id === +id)
    
      if(existName && existID){
        response.status(400).json({ error: "Elija un nombre y un ID distinto" });
        return;
       }
      if(existName){
        response.status(400).json({ error: "Elija un nombre distinto" });
        return;
       }
     if(existID){
        response.status(400).json({ error: "Elija un ID distinto" });
        return;
       }
    
       const newUser = { id, nombre };
       users.push(newUser);
       response.redirect("/users")
    } catch(err){
      response.status(500).send("No se pudo ingresar el usuario")
    }
    
  };