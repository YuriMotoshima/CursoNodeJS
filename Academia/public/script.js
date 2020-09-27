const modalOverlay = document.querySelector('.modal-overlay') //acresentou na variavel modalOverlay as TAG existentes dentro da TAG que tem o nome da classe .modal-overlay
const cards = document.querySelectorAll('.card') // acrescentou a variavel cards todas as TAG existentes dentro da TAG que tem o nome da classe de .card

for (let card of cards) { // função de repetição for "para" (let => variavel mutável => card => variavel que sofrerá alteração e que pode ter qualquer nome => of "de" => cards => variavel constante definida a cima)
    card.addEventListener("click", function () { // cada card que sofrer um click, executar a função
        const videoId = card.getAttribute("id"); // procurar o atributo ID na TAG do HTML e atribuir esse ID na varivel constante de nome videoId
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}` //seleciona a TAG iframe que há dentro da TAG selecionada na const modalOverlay e adiciona no SRC o link que deve ser aberto de acordo a variavel constante de nome videoId
        window.location.href = `/video?id=${videoId}`
    })
}
