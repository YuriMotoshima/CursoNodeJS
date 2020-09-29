
const express = require('express')
const routes = express.Router()
const instructors = require('./functions')

/* req é requisição (request) e res resposta (response) */

routes.get('/', function (req, res) {
    return res.redirect('/instructors')
})

routes.get('/instructors', function (req, res) {
    return res.render('instructors/index')
})

routes.get('/instructors/create', function (req, res) {
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.post('/instructors', instructors.postCreateNewInstructors)


routes.get('/members', function (req, res) {
    return res.send('/members')
})

module.exports = routes


/*
-==== EXEMPLO ====-
Aqui temos uma forma de criar rotas e usar functions para validar, receber e enviar
e/ou alterar DOMs do HTML.

routes.post('/instructors', function (req, res) {

    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields")
        }
    }
    return res.send(req.body)
})
 */
