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

function filtrarPrato (elemento, seletor) {

    let filtrado = elemento.getElementsByClassName(seletor)[0].innerHTML;

    return filtrado;
}

function pegarPreco (pedido, seletor) {

    let preco = pedido.getElementsByClassName(seletor)[0].innerHTML.match(/\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})+/g);

    preco = preco[0].replace(/,/g, '.');

    preco = Number(preco);

    return preco;
}

function comprar() {
    if (pedidoLiberado()){

        let selecionados = [document.querySelector('.prato-selecionado'), document.querySelector('.bebida-selecionada'), document.querySelector('.sobremesa-selecionada')];

        let prato = filtrarPrato(selecionados[0], 'nome-prato');
        let bebida = filtrarPrato(selecionados[1], 'nome-prato');
        let sobremesa = filtrarPrato(selecionados[2], 'nome-prato');

        let precoPrato = pegarPreco(selecionados[0], 'preco');
        let precoBebida =  pegarPreco(selecionados[1], 'preco');
        let precoSobremesa = pegarPreco(selecionados[2], 'preco');

        let precoTotal = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);

        console.log(precoTotal);

        let numeroTelefone = prompt("Digite seu telefone para receber o pedido no formato (11987654321)");
        
        let pedidoCompleto = `Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0A-%20Prato%3A%20${prato}%0A-%20Bebida%3A%20${bebida}%0A-%20Sobremesa%3A%20${sobremesa}%0ATotal%3A%20R%24%20${precoTotal.toFixed(2)}`;

        if (numeroTelefone.length == 11){
            let whatsLink = "https://wa.me/55" + numeroTelefone + "?text=" + pedidoCompleto;

            window.open(whatsLink);
        }

    }else{
        alert("Selecione um prato, bebida e sobremesa");
    }
}