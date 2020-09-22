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

server.get("/receita/:index", function (req, res) {
    const recipes = receitas
    const recipeIndex = req.params.index

    if (!recipes[recipeIndex]) {
        res.send(`Receita nº ${recipeIndex}, not found!`)
    }

    console.log(recipes[recipeIndex])
    return res.render("receita", { item: recipes[recipeIndex] })

})