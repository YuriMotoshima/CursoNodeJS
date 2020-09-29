// GET
const fs = require("fs")
const data = require("./data.json")
//POST - CREATE NEW INSTRUCTOR -- VALID

//exports.postCreateNewInstructors = function (req, res) {
//
//    const keys = Object.keys(req.body) // aqui temos a criação de uma constante de nome keys que recebe o body e transforma ele em um objeto ({[]})
//
//    /* Abaixo temos um loop que percorre o objeto criado na const keys do body recebido
//    e verifica se todo os campos está preenchidos. */
//    for (let key of keys) {
//        if (req.body[key] == "") {
//            return res.send("Please, fill all fields")
//        }
//    }
//
//    req.body.birth = Date.parse(req.body.birth) // aqui é alterado a formação de data recebido pelo body campo de name Birth
//    req.body.created_at = Date.now() // aqui é acrescentado um novo campo no data.json de nome created_at e de valor a data atual no momento do submit
//    req.body.id = Number(data.instructors.length + 1) // aqui é verificado quantos items tem no .data e criado um id.
//    data.instructors.push(req.body) // aqui é recebido o body do form já com alterações á cima e enviado para o arquivo .json se nome data que está salvo na raiz do projeto.
//
//    /* abaixo temos a utilizaçao da const FS que serve para criar um arquivo, neste caso um data.json na raiz do projeto,
//     com uma (callback funtion) que valida se teve algum erro nesta rotina. */
//    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
//        if (err) return res.send("Write file error!")
//
//        return res.redirect('instructors')
//    })
//
//    //return res.send(req.body)
//}


/*  -==== DESESTRUTURANDO ====- */

exports.postCreateNewInstructors = function (req, res) {

    const keys = Object.keys(req.body) // aqui temos a criação de uma constante de nome keys que recebe o body e transforma ele em um objeto ({[]})

    /* Abaixo temos um loop que percorre o objeto criado na const keys do body recebido
    e verifica se todo os campos está preenchidos. */
    for (let key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields")
        }
    }

    let { avatar_url, birth, gender, services, name } = req.body

    birth = Date.parse(birth) // aqui é alterado a formação de data em milisegudos recebido pelo body o campo de name Birth
    const created_at = Date.now() // aqui é acrescentado um novo campo no data.json de nome created_at e de valor a data atual no momento do submit
    const id = Number(data.instructors.length + 1) // aqui é verificado quantos items tem no .data e criado um id.

    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })

    /* abaixo temos a utilizaçao da const FS que serve para criar um arquivo, neste caso um data.json na raiz do projeto,
     com uma (callback funtion) que valida se teve algum erro nesta rotina. */
    fs.writeFile('data.json', JSON.stringify(data, null, 4), function (err) {
        if (err) return res.send("Write file error!")

        return res.redirect('instructors')
    })

    //return res.send(req.body)
}

exports.show = function (req, res) {
    const { id } = req.params

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id
    })
    if (!foundInstructor) {
        return res.send('Instructor not found!')
    }
    return res.send(foundInstructor)
}