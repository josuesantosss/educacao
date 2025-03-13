fetch('https://github.com/josuesantosss/educacao/blob/ff0be37cc786bcae25321eb864cbc3b039ed1316/anosiniciais/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
    });
