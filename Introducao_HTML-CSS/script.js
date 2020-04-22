const modalOverlay = document.querySelector('.modal-overlay') //acresentou na variavel modalOverlay as TAG existentes dentro da TAG que tem o nome da classe .modal-overlay
const cards = document.querySelectorAll('.card') // acrescentou a variavel cards todas as TAG existentes dentro da TAG que tem o nome da classe de .card

for (let card of cards) { // função de repetição for "para" (let => variavel mutável => card => variavel que sofrerá alteração e que pode ter qualquer nome => of "de" => cards => variavel constante definida a cima)
    card.addEventListener("click", function () { // cada card que sofrer um click, executar a função
        const videoId = card.getAttribute("id"); // procurar o atributo ID na TAG do HTML e atribuir esse ID na varivel constante de nome videoId
        modalOverlay.classList.add('active') // adicionar no nome da classe da TAG atribuida na variavel constante de nome modalOverlay o nome active
        modalOverlay.querySelector('iframe').src =  `https://www.youtube.com/embed/${videoId}` //seleciona a TAG iframe que há dentro da TAG selecionada na const modalOverlay e adiciona no SRC o link que deve ser aberto de acordo a variavel constante de nome videoId

    })
}

document.querySelector('.close-modal').addEventListener("click", function () { // seleciona a TAG .close-modal e ao sofrer um click executa a função
    modalOverlay.classList.remove('active') // remove da classe da constante modalOverlay a palavra active
    modalOverlay.querySelector("iframe").src = "" // limpa o SRC da TAG iframe que está dentro da TAG da constante modalOverlay
})

/* 

- document. é qualquer TAG do HTML;
- .querySelector('.modal-overlay') seleciona uma TAG especificada do HTML;
- .addEventListener("click", function () {}) faz a leitura de algum evento no HTML e após a leitura executa uma função;
- .classList.add() ou .classList.remove() esse atributo seleciona a classe de uma TAG e adiciona, remove nomes nesta classe entre outras coisas;
- .getAttribute() seleciona qualquer atributo existente em uma TAG do HTML;

*/