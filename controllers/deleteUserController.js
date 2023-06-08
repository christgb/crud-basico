const express = require('express')
const router = express.Router()
const users = require('./users')


exports.usersDelete = function (request, response) {
    try {
      const { id } = request.params;
  
      const userIndex = users.findIndex((user) => user.id === +id);
  
      if (userIndex !== -1) {
        users.splice(userIndex, 1);
        response.redirect("/users");
      } else {
        response.json("Usuario no encontrado");
      }
    } catch (err) {
      console.log(err);
      response.status(500).send("No se pudo eliminar el usuario");
    }
  };
  