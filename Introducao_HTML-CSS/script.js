const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src =  `https://www.youtube.com/embed/${videoId}`

    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

/* 

- document. é qualquer TAG do HTML;
- .querySelector('.modal-overlay') seleciona uma TAG especificada do HTML;
- .addEventListener("click", function () {}) faz a leitura de algum evento no HTML e após a leitura executa uma função;
- .classList.add() ou .classList.remove() esse atributo seleciona a classe de uma TAG e adiciona, remove nomes nesta classe entre outras coisas;
- .getAttribute() seleciona qualquer atributo existente em uma TAG do HTML;

*/