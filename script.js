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
            if (document.documentElement.scrollTop > 3) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        };

        // Função para voltar ao topo suavemente
        function voltarAoTopo() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
