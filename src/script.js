document.addEventListener("DOMContentLoaded", function() {
    const projetos = document.querySelectorAll(".projeto");
    const botao = document.querySelector('button');

    botao.addEventListener('click', function() {
        botao.textContent = 'Botão Clicado!';
    });

    projetos.forEach(projeto => {
        const informacoes = projeto.querySelector(".Informações do prjeto");

        projeto.addEventListener("mouseover", function() {
            informacoes.style.opacity = "0.7";
            informacoes.style.backgroundColor = "#000";
        });

        projeto.addEventListener("mouseout", function() {
            informacoes.style.opacity = "0";
            informacoes.style.backgroundColor = "rgb(0, 100, 0)";
        });
    });
});
