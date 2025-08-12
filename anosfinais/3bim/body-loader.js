document.addEventListener('DOMContentLoaded', () => {
    // Pega o número da página (6, 7, 8, etc.)
    const match = window.location.pathname.match(/(\d+)ano\.html$/);
    if (!match) return; // se não achar número, sai
    const num = match[1];

    fetch(`${num}-body.html`)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar ${num}-body.html`);
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(`${num}-body-container`);
            if (container) {
                container.innerHTML = html;
            } else {
                console.error(`Container #${num}-body-container não encontrado`);
            }
        })
        .catch(err => console.error(err));
});
