/*=======================================

OBJETOS E VETORES(ARRAYS)

OBJETOS SÃO REPRESENTADOS POR {} DENTRO DAS CHAVES PODEMOS POSSUIR
DIVERSOS ATRIBUTOS RELACIONADO AOS OBJETOS.

VETORES OU ARRAY SÃO REPRESENTADOS POR [] E DENTRO DESTE ARRAY PODEMOS
TER DIVERSOS OBJETOS E SEUS ATRIBUTOS.

=========================================*/

// OBJETOS

const aluno01 = {
    nome: 'Yuri',
    nota: 9.8
}
const aluno02 = {
    nome: 'Roberto',
    nota: 10
}
const aluno03 = {
    nome: 'Motoshima',
    nota: 2
}

const mediaO = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(mediaO)

// ARRAY com OBJETOS

const nomeDeAlunos = ['Yuri', 'Roberto', 'Motoshima']

console.log(nomeDeAlunos)

const alunos = [
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

const mediaA = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / alunos.length

console.log(mediaA)
