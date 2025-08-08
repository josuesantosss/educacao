fetch('6-body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('6-body-container').innerHTML = data;
    });
