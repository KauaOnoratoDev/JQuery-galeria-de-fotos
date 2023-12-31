$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const endereçoImagemNova = $('#endereço-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${endereçoImagemNova}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereçoImagemNova}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#endereço-imagem-nova').val('')
    })
})