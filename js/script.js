function comidaSelecionada (comida) {

    let comidaAnterior = document.querySelector('.prato-selecionado');

    if (comidaAnterior !== null) {
        comidaAnterior.classList.remove('prato-selecionado');
    }

    comida.classList.add("prato-selecionado");
}

function bebidaSelecionada (bebida) {

    let bebidaAnterior = document.querySelector('.bebida-selecionada');

    if (bebidaAnterior !== null) {
        bebidaAnterior.classList.remove('bebida-selecionada');
    }

    bebida.classList.add("bebida-selecionada");
}

function sobremesaSelecionada (sobremesa) {

    let sobremesaAnterior = document.querySelector('.sobremesa-selecionada');

    if (sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove('sobremesa-selecionada');
    }

    sobremesa.classList.add("sobremesa-selecionada");
}

function comprar (pedido) {

    

}