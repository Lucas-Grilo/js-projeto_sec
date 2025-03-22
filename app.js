// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';

let tentativas = 3

exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1
}

let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    
    if(tentativas === 0){
        exibirTextoNaTela('h1', 'Você não tem mais tentativas');
        exibirTextoNaTela('p', 'Já era! O numero secreto era ' + numeroSecreto);
    } else {
        tentativas--;
        let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas'; 
        if(chute === numeroSecreto) {
            exibirTextoNaTela('h1', 'Parebéns, você acertou')
    } else if(chute > numeroSecreto){
            exibirTextoNaTela('h1', `Errou, o número secreto é menor.
                Você ainda tem ${tentativas} ${palavraTentativa}`);
    } else {
            exibirTextoNaTela('h1', `Errou, o número secreto é maior.
                Você ainda tem ${tentativas} ${palavraTentativa}`);
    }
}
}