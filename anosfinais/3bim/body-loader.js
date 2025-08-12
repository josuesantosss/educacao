const pages = [6, 7, 8, 9];

pages.forEach(num => {
    fetch(`${num}-body.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${num}-body.html`);
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(`${num}-body-container`);
            if (container) {
                container.innerHTML = data;
            } else {
                console.warn(`Elemento #${num}-body-container não encontrado.`);
            }
        })
        .catch(error => console.error(error));
});
