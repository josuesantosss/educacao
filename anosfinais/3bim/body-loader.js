fetch('6-body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('6-body-container').innerHTML = data;
    });

fetch('7-body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('7-body-container').innerHTML = data;
    });

fetch('8-body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('8-body-container').innerHTML = data;
    });

fetch('9-body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('9-body-container').innerHTML = data;
    });

