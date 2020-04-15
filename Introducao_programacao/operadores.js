/*========================================================

    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual E do mesmo tipo
    !=      Diferente de
    !==     Diferente, inclusive do tipo

========================================================*/

console.log(5 > 4) // true

console.log(5 < 4) // false

console.log(5 >= 4) // true

console.log(4 <= 4) // true

console.log(4 == '4') // true 4 é igual a 4

console.log(4 === '4') // false 4 é igual a 4, mas de tipos diferente um number outro string

console.log(4 != '5') // true

console.log(4 !== '5') //true

/*DESAFIO

- VERIFICAR SE A PESSOA É MAIOR IGUAL A 18 ANOS
- SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR A ENTRADA
- AVISAR PARA VOLTAR QUANDO FIZER 18 ANOS
*/

const idade = 16

if (idade >= 18) {
    console.log(`Deixar entrar !`)
} else {
    console.log(`Bloquear entrada visto que pessoa não possui 18 anos.`)
}

/*========================================================

    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    ||  "OU" Uma das condições dever ser verdadeiras
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição

========================================================*/

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5>6))//true porque estamos negando que 5 é maior que 6
console.log(!(5<6))//false porque estamos negando o que seria true e transformando em false


/*========================================================

    OPERADORES ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

========================================================*/

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //0.5
console.log(2 + 2) //4
console.log(2 - 2) //0
