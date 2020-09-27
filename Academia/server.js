/* npm init -y (Cria um json com configurações basicas do servidor)
npm star (Irá iniciar o server.js automaticamente)
npm install express (Instala o express que é a biblioteca que servirá para por online o servidor)
npm install nodemon (Irá fazer com que o servidor reinicie automaticamente após cada atualização)
npm install nunjucks (É uma template engine - um motor que trabalha com templates, ou seja ele reutilizar cogidos ou ou function na pagina para trazer informações)
npm install browser-sync -D(Responsável por reload na pagina quando mudar arquivos, no projeto.)
npm npm-run-all -D(ele faz rodar diversos serviços.) */

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function () {
    console.log("server is running")
})