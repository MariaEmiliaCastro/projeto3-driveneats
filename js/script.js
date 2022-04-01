function comidaSelecionada (comida) {

    let comidaAnterior = document.querySelector('.prato-selecionado');

    if (comidaAnterior !== null) {
        comidaAnterior.classList.remove('prato-selecionado');
    }

    comida.classList.add("prato-selecionado");

    pedidoLiberado();
    
}

function bebidaSelecionada (bebida) {

    let bebidaAnterior = document.querySelector('.bebida-selecionada');

    if (bebidaAnterior !== null) {
        bebidaAnterior.classList.remove('bebida-selecionada');
    }

    bebida.classList.add("bebida-selecionada");

    pedidoLiberado();
}

function sobremesaSelecionada (sobremesa) {

    let sobremesaAnterior = document.querySelector('.sobremesa-selecionada');

    if (sobremesaAnterior !== null) {
        sobremesaAnterior.classList.remove('sobremesa-selecionada');
    }

    sobremesa.classList.add("sobremesa-selecionada");

    pedidoLiberado();
}

function pedidoLiberado () {

    let botao = document.querySelector('.botao');

    let selecionados = [document.querySelector('.prato-selecionado'), document.querySelector('.bebida-selecionada'), document.querySelector('.sobremesa-selecionada')];
    console.log(selecionados);
    if(!selecionados.includes(null)){
        botao.classList.add("botao-selecionado");
        botao.innerHTML = "Fechar Pedido";

        return true;
    }else{
        console.log("Selecione um prato, bebida e sobremesa");

        return false;
    }

}

function comprar(pedido) {
    if (pedidoLiberado()){
        let cardFinalizacao = document.querySelector('.card-finalizacao');
        cardFinalizacao.classList.remove('esconder');
        alert("Pedido realizado com sucesso!");
    }else{
        alert("Selecione um prato, bebida e sobremesa");
    }
}