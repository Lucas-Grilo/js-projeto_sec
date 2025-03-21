// let titulo = document.querySelector('h1');
// let subtitulo = document.querySelector('p');


// titulo.innerHTML = "Jogo da adivinhação";
// subtitulo.innerHTML = "Escolha um número de 1 a 100";

exibirTextoNaTela('h1', 'Jogo a adivinhação');
exibirTextoNaTela('p', 'Escolha um número de 1 a 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    console.log('Apertou o botão')
}

