/* npm init -y (Cria um json com configurações basicas do servidor)
npm star (Irá iniciar o server.js automaticamente)
npm install express (Instala o express que é a biblioteca que servirá para por online o servidor)
npm install nodemon (Irá fazer com que o servidor reinicie automaticamente após cada atualização)
npm install nunjucks (É uma template engine - um motor que trabalha com templates, ou seja ele reutilizar cogidos ou ou function na pagina para trazer informações) */


const express = require('express')
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

/* req é requisição (request) e res resposta (response) */

server.get('/', function (req, res) {
    const about = {
        avatar_url: "https://lh3.googleusercontent.com/RfEth5-pzaXP4PmyCH7Vmi7bfWvEl105KTxIZfVKMJtDh8x9qcvOIOfFC-VgHRzJ8r_0BGg6Aw-fbXkQxK2ALPXLb6p-jJ2mr7LCScT99_syAM4GCCscSRFLv8xc0Pj8sPQPZlNJgpzDxZeZMv5GDQM8_V66M6c7gWgsa59OryPd9dnwIE0zBwLoLkaosQshs3ThjFLHg3fkgi9Fk5kw_uIPg0h24m-S5EKPIL0B8oWcudpcYROcG1jdL8AoDbA6YiURze5vpFYrBDymFV6n9N5R2ZT43G9QrxLfFjfbreNnhUhddZh3OR1909yhKXi8jL02NsKqRz7VDxsJQZcTRHyypvtf-U-1BopgwIUzb9zKzPtT12J5DFsbmLn2EBpuARZV7xvkcAzs-RGeuFSBgsdfUSuN5SDm4K4p_gLOQtt1SmNFC1DsSvxY3UcHCXHG7jPm1cDYbPH2g7EOktNB4Xgi55yBxAc3VbV0VEDfOyJnEZ7MgyyOGN_c9IlsN0HCG5RtmD4SwpuGWOt3NrBxrYEaA04qDX5VOQtCOUKCrU6M1jsfybX_DHcwyzPEWZK5c4uUI7mgyDLBTIkooX_6wIC_pMRHWREEYdQXCep6s58Q_lG1ZOW1yxrA42_eSSm0u4fr0YFFZf5HBJIyYvb01qy-wKniFWR-nBrnZ1J_ttbtqoZPWFeKeAyLgilU1qo=w696-h927-no",
        name: "Yuri Motoshima",
        role: "Aluno - Rocketseat",
        description: 'Analista Sênior em Negócios Imobiliário e Análista de Dados para BI na <a href="https://www.accenture.com.br" target="_blank">Accenture</a>',
        links: [
            { name: "Github", url: "https://github.com/YuriMotoshima/CursoNodeJS" },
            { name: "Twitter", url: "https://www.twitter.com" },
            { name: "Linkedin", url: "https://www.Linkedin.com.br" }
        ]
    }
    return res.render("about", { about })
})

server.get('/portifolio', function (req, res) {
    return res.render("portifolio", { items: videos })
})

/* Nova rota video será para o video do modal em uma nova aba. */
server.get('/video', function (req, res) {
    const id = req.query.id; /*pega o valor de ID enviado no URL da pagina*/

    const video = videos.find(function (video) {
        return video.id == id

    })
    if (!video) {
        return res.send("Video not found!")
    }
    return res.render("video", { item: video })

})

server.listen(5000, function () {
    console.log("server is running")
})