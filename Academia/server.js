/* npm init -y (Cria um json com configurações basicas do servidor)
npm star (Irá iniciar o server.js automaticamente)
npm install express (Instala o express que é a biblioteca que servirá para por online o servidor)
npm install nodemon (Irá fazer com que o servidor reinicie automaticamente após cada atualização)
npm install nunjucks (É uma template engine - um motor que trabalha com templates, ou seja ele reutilizar cogidos ou ou function na pagina para trazer informações)
npm install browser-sync -D(Responsável por reload na pagina quando mudar arquivos, no projeto.)
npm npm-run-all -D(ele faz rodar diversos serviços.) */

/* === NO PACKAGE.JSON ====
"start": "npm-run-all -p nodemon browsersync", aqui é onde configuramos para rodar o servidor e o browser sync que verifica atualizações nas pastas do projeto 
"nodemon": "nodemon server.js", aqui roda o servidor com as rotas 
"browsersync": "browser-sync start --proxy http://localhost:5000 --files 'public,views'" aqui é onde é configura que antes de reinicia o server primeiro tem que passar nas pastas public e views, para atualizar o conteudo
 */

const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.listen(5000, function () {
    console.log("server is running...")
})