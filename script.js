        function toggleMenu() {
            var menu = document.getElementById("menu");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }

// Exibe o botão apenas quando a página for rolada para baixo
window.onscroll = function() {
    var btn = document.getElementById("topoBtn");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Função para voltar ao topo suavemente
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ajusta o botão para dispositivos móveis
function ajustarBotaoParaMobile() {
    var btn = document.getElementById("topoBtn");
    if (window.innerWidth <= 768) { // Considerando 768px como o breakpoint para dispositivos móveis
        btn.style.width = "40px"; // Tamanho menor para dispositivos móveis
        btn.style.height = "40px"; // Tamanho menor para dispositivos móveis
        btn.style.bottom = "20px"; // Posição a partir do fundo
        btn.style.right = "20px"; // Posição a partir da direita
    } else {
        btn.style.width = "50px"; // Tamanho padrão para desktop
        btn.style.height = "50px"; // Tamanho padrão para desktop
        btn.style.bottom = "50px"; // Posição a partir do fundo
        btn.style.right = "50px"; // Posição a partir da direita
    }
}

// Chama a função de ajuste ao carregar a página e ao redimensionar a janela
window.onload = ajustarBotaoParaMobile;
window.onresize = ajustarBotaoParaMobile;