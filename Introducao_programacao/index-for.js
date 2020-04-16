// Estrutora de repetição com utilização de FOR

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
    ,
    {
        nome: 'Giovana',
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
    },
    {
        nome: 'Luiz',
        nota: 9
    }
]
/* ============================================================
let é uma variavel que permite mudança diferente de const que é constante e não muda.
com isso estamos dizendo que o i começa como 0 e vai somando mais 1 a cada vez que é lido um objeto dentro do array.

function calculaMedia(alunos) {
    for (let i = 0; i < alunos.length; i++){
        console.log(i)
    }
}

Nesta segunda etapa incluimos mais um let para agora somar as notas de cada aluna, a cada objeto lido dentro do array de alunos[i] é somado
o valor das notas.

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    console.log(soma)
}

Nesta terceira etapa efetuamos a divisão da soma pelo total de objetos dentro do array, para isso a soma total foi incluido dentro de uma variavel
constanta (const media) e dividido pelo total de alunos ou objetos com o alunos.length

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    console.log(media)
}
===============================================================*/

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
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


function marcarComoReprovado(alunos) {
    for (let aluno of alunos) {
        aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
        }
    }
    console.table(alunos)
}

marcarComoReprovado(alunosDaTurmaA)
marcarComoReprovado(alunosDaTurmaB)