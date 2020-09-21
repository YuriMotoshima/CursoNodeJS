const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.listen(5000, function () {
    console.log('Server is running')
})

server.get('/', function (req, res) {
    return res.render("index", { items: receitas })
})

server.get('/receitas', function (req, res) {
    return res.render("receitas", { items: receitas })
})

server.get('/about', function (req, res) {
    return res.render("about")
})