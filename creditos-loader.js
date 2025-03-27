// creditos-loader.js
document.addEventListener('DOMContentLoaded', function() {
    const creditosHTML = `
        <div class="creditos">
            Site criado por <a href="https://www.instagram.com/josuesantos" target="_blank">Josué Santos</a>
        </div>
    `;
    
    // Cria um container para os créditos
    const container = document.createElement('div');
    container.id = 'creditos-container';
    container.innerHTML = creditosHTML;
    
    // Insere no final do body
    document.body.appendChild(container);
    
    // Adiciona o CSS dinamicamente
    const style = document.createElement('style');
    style.textContent = `
        .creditos {
            text-align: center;
            padding: 15px 0;
            background-color: #000000;
            font-family: 'Google Sans', Roboto, sans-serif;
            font-size: 0.666em;
            color: white;
        }
        .creditos a {
            color: #E1306C;
            text-decoration: none;
            font-weight: 500;
        }
        .creditos a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
});
