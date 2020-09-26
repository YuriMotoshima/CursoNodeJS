const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const recs = document.querySelectorAll('.receita-info')

for (let card of cards) {
    card.addEventListener('click', function () {
        const imageCard = card.querySelector('.card img')
        const titulo = card.querySelector('.card h4')
        const autor = card.querySelector('.card p')

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('.modal-content img').src = imageCard.getAttribute('src')
        modalOverlay.querySelector('.modal-content h4').textContent = titulo.textContent
        /* console.log(titulo) */
        modalOverlay.querySelector('.modal-content p').textContent = autor.textContent
    })
}

for (let rec of recs) {
    rec.querySelector('span').addEventListener('click', function () {
        const titulo = rec.querySelector('span').textContent
        if (titulo == 'Esconder') {
            rec.querySelector('span').innerHTML = 'Mostrar'
            /* 
            console.log(rec.className)
            console.log('-------')
            console.log(rec) 
            */
            rec.querySelector('.information').classList.remove("hidden")

        } else {
            rec.querySelector('span').innerHTML = 'Esconder'
            rec.querySelector('.information').classList.add("hidden")
        }
        console.log(titulo)
    })
}

document.querySelector('.modal-content, .close-modal').addEventListener("click", function () { // seleciona a TAG .close-modal e ao sofrer um click executa a função
    modalOverlay.classList.remove('active') // remove da classe da constante modalOverlay a palavra active
    modalOverlay.querySelector("img").src = "" // limpa o SRC da TAG iframe que está dentro da TAG da constante modalOverlay
})


/* display :none
display: block; */

