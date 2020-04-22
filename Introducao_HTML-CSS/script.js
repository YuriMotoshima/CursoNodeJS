const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').scr =  `https://www.youtube.com/embed/xWKRXJ7b9Lw`

    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
})
