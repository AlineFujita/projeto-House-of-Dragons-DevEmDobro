// index é o primeiro arquivo carregavel
// passo 1 - dar um jeito de pegar os elementos html dos botões
const botoesCarrossel = (document.querySelectorAll(".botao"));
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// passo 2 - verificar clique do usuario no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        // passo 3 - desmarcar botao selecionado anterior
        desativarBotaoSelecionado();

        // passo 4 - marcar o botao clicado como se estivesse selecionado
        marcarBotaoComoSelecionado(botao);

        // passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();

        //passo 6 - mostrar a imagem correspondente ao botao clicado
        mostrarImagemDeFundo(indice);

        // passo 7 - esconder a informação do dragão anterior
        esconderInformacoesAtivas();

        // passo 8 - mostrar a imagem do dragão correspondente
        mostrarInformacoes(indice);

    });
});

function marcarBotaoComoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
