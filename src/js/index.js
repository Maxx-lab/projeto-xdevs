const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener('click', function(){
    // faz aparecer o próximo cartão
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimoCartao)return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
});


btnVoltar.addEventListener('click', function(){
    // faz aparecer o cartão anterior
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
