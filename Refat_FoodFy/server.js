const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
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

server.get("/recipes/:index", function (req, res) {
    const recipes = [ingredients]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;

    return res.send(console.log(recipes[recipeIndex]))
})