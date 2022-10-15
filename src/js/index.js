/* 



*/


// 1 - pegar os elementos que representam as abas do html.

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // 2- identificar o clique do elemento na aba.

    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);

    });
});

function selecionarAba(aba) {
    // 3- quando o usuario clicar, desmarcar a aba selecionada.
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");


    // 4- marcar a aba clicada como selecionada.
    aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba) {
    // 5- esconder o conteudo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    // 6- mostrar o conteudo da aba selecionada.
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");
}