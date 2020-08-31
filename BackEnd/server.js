/* npm init -y (Cria um json com configurações basicas do servidor)
npm star (Irá iniciar o server.js automaticamente)
npm install express (Instala o express que é a biblioteca que servirá para por online o servidor)
npm install nodemon (Irá fazer com que o servidor reinicie automaticamente após cada atualização)
npm install nunjucks (É uma template engine - um motor que trabalha com templates, ou seja ele reutilizar cogidos ou ou function na pagina para trazer informações) */


const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

/* req é requisição (request) e res resposta (response) */

server.get('/', function(req, res){
    return res.render("about")
})

server.get('/portifolio', function(req, res){
    return res.render("portifolio")
})

server.listen(5000, function(){
    console.log("server is running")
})