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
        btn.style.width = "50px";
        btn.style.height = "50px";
        btn.style.fontSize = "24px";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
    } else {
        btn.style.width = ""; // Restaura o valor padrão
        btn.style.height = ""; // Restaura o valor padrão
        btn.style.fontSize = ""; // Restaura o valor padrão
        btn.style.bottom = ""; // Restaura o valor padrão
        btn.style.right = ""; // Restaura o valor padrão
    }
}

// Chama a função de ajuste ao carregar a página e ao redimensionar a janela
window.onload = ajustarBotaoParaMobile;
window.onresize = ajustarBotaoParaMobile;