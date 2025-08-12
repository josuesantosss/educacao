// Pega o nome do arquivo atual (ex: "pagina6.html")
const currentPage = window.location.pathname.split("/").pop();

// Mapeia o nome da página para o conteúdo que deve ser carregado
const pageMap = {
    "6ano.html": ["6"],
    "7ano.html": ["7"],
    "8abo.html": ["8"],
    "9ano.html": ["9"]
};

// Verifica se a página atual está no mapeamento
if (pageMap[currentPage]) {
    pageMap[currentPage].forEach(num => {
        fetch(`${num}-body.html`)
            .then(response => {
                if (!response.ok) throw new Error(`Erro ao carregar ${num}-body.html`);
                return response.text();
            })
            .then(data => {
                const container = document.getElementById(`${num}-body-container`);
                if (container) container.innerHTML = data;
            })
            .catch(error => console.error(error));
    });
}
