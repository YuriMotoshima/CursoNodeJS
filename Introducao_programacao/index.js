// const nome = 'Yuri'
// const nota = 9.8

// const nome1 = 'Roberto'
// const nota1 = 10

// const nome2 = 'Motoshima'
// const nota2 = 2

// const media = (nota + nota1 + nota2) / 3

// if (media > 5) {
//     console.log(`Parabéns você foi aprovado com uma média de ${media}`)
// } else {
//     console.log(`Você não foi aprovado sua média foi de ${media}`)
// }


// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do calculo das médias


alunosDaTurmaA = [
    {
        nome: 'Yuri',
        nota: 9.8
    },
    {
        nome: 'Roberto',
        nota: 10
    },
    {
        nome: 'Motoshima',
        nota: 2
    }
]

alunosDaTurmaB = [
    {
        nome: 'Bruna',
        nota: 10
    },
    {
        nome: 'Nunes',
        nota: 5
    },
    {
        nome: 'BMotoshima',
        nota: 6
    }
]

function calculaMedia(alunos) {

    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da ${turma}  é menor que 5`)
    }
}

enviaMensagem(media1, 'Turma A')
enviaMensagem(media2, 'Turma B')

// Na function enviaMensagem(media, turma) os nomes entre os () pode ser qualquer um, pois eles representam de forma simbolica uma variavel que será inserida,
// neste casos a primeira variavel vem da const media1 e media2 e a segunda variavel do segundo parametro da function enviaMensagem(xxxxx, 'Turma A ou Turma B')