// body-loader.js
document.addEventListener('DOMContentLoaded', () => {
    const match = window.location.pathname.match(/(\d+)ano\.html$/);
    if (!match) return;
    const num = match[1];

    fetch(`${num}-body.html`)
        .then(res => res.text())
        .then(html => {
            const container = document.getElementById(`${num}-body-container`);
            if (!container) return;

            container.innerHTML = html;

            // Adiciona listener ao botão depois que ele existe
            const botao = container.querySelector("button");
            if (botao) {
                botao.addEventListener("click", () => {
                    const id = container.querySelector("#disciplinaSelect").value;

                    // Oculta todas as tabelas
                    container.querySelectorAll(".tabela-materia").forEach(tabela => {
                        tabela.style.display = "none";
                    });

                    // Mostra a tabela selecionada
                    if (id) {
                        const tabelaSelecionada = container.querySelector(`#${id}`);
                        if (tabelaSelecionada) {
                            tabelaSelecionada.style.display = "table";
                            tabelaSelecionada.scrollIntoView({ behavior: 'smooth' });
                        }
                    } else {
                        alert("Por favor, selecione uma disciplina.");
                    }
                });
            }
        })
        .catch(console.error);
});