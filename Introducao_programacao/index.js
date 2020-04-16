
/*==========================================================================================

PARTE 01

const name = 'Yuri'
const grade = 9.8

const name1 = 'Roberto'
const grade1 = 10

const name2 = 'Motoshima'
const grade2 = 2

const average = (grade + grade1 + grade2) / 3

if (average > 5) {
    console.log(`Parabéns você foi aprovado com uma média de ${average}`)
} else {
    console.log(`Você não foi aprovado sua média foi de ${average}`)
}

============================================================================================
PARTE 02 


Criar um programa que calcula a média
das turmas de students e envia
mensagem do calculo das médias


classA = [
    {
        name: 'Yuri',
        grade: 9.8
    },
    {
        name: 'Roberto',
        grade: 10
    },
    {
        name: 'Motoshima',
        grade: 2
    }
    ,
    {
        name: 'Giovana',
        grade: 2
    }
]

classB = [
    {
        name: 'Bruna',
        grade: 10
    },
    {
        name: 'Nunes',
        grade: 5
    },
    {
        name: 'BMotoshima',
        grade: 6
    },
    {
        name: 'Luiz',
        grade: 9
    }
]

function calculateAverage(students) {

    return (students[0].grade + students[1].grade + students[2].grade) / 3
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A average da ${turma} foi de ${average}. Parabéns`)
    } else {
        console.log(`A média da ${turma}  é menor que 5`)
    }
}

sendMessage(average1, 'Turma A')
sendMessage(average2, 'Turma B')

// Na function sendMessage(average, turma) os names entre os () pode ser qualquer um, pois eles representam de forma simbolica uma variavel que será inserida,
// neste casos a primeira variavel vem da const average1 e average2 e a segunda variavel do segundo parametro da function sendMessage(xxxxx, 'Turma A ou Turma B').

============================================================================================
PARTE 03
*/

classA = [
    {
        name: 'Yuri',
        grade: 9.8
    },
    {
        name: 'Roberto',
        grade: 10
    },
    {
        name: 'Motoshima',
        grade: 2
    }
    ,
    {
        name: 'Giovana',
        grade: 2
    }
]

classB = [
    {
        name: 'Bruna',
        grade: 10
    },
    {
        name: 'Nunes',
        grade: 5
    },
    {
        name: 'BMotoshima',
        grade: 6
    },
    {
        name: 'Luiz',
        grade: 9
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}
const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average is less than  ${average}. Congratulation`)
    } else {
        console.log(`${turma} average is less than 5`)
    }
}

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

markAsFlunked(classA)
markAsFlunked(classB)

function markAsFlunked(student) {
    student.Flunked = false;
    if (student.grade < 5) {
        student.Flunked = true;
    }
}

function sendMessageFlunked(student) {
    if (student.Flunked) {
        console.log(`The student ${student.name} are Flunked.`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageFlunked(student)
    }
}

studentsFlunked(classA)
studentsFlunked(classB)