
function creaGrid(total) {
    document.getElementById('tabla1').style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    for (let i=0; i<total * total; i++) {
        const div = document.createElement("div");
        div.classList.add("casilla");
        div.textContent = i + 1;
        document.getElementById('tabla1').appendChild(div);
    }
}

function creaGridTemplate(total) {
    const plantilla = document.getElementById('casilla-template');
    document.getElementById('tabla').style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    for (let i=0; i<total * total; i++) {
        const clon = plantilla.content.cloneNode(true);
        clon.querySelector('.casilla').textContent = i + 1;
        document.getElementById('tabla').appendChild(clon);
    }
}

function creaGridTemplate2(total, plantilla, tabla) {
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    for (let i=0; i<total * total; i++) {
        const clon = plantilla.content.cloneNode(true);
        clon.querySelector('.casilla').textContent = i + 1;
        tabla.appendChild(clon);
    }
}

function creaGridTemplate3(total, plantilla, tabla) {
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    for (let i=0; i<total * total; i++) {
        const clon = plantilla.content.cloneNode(true);
        clon.querySelector('.casilla').textContent = i + 1;
        clon.querySelector('.casilla').addEventListener('click', (event) => {
            event.target.style.display = 'none';
        });
        tabla.appendChild(clon);
    }
}



creaGrid(6);
creaGridTemplate(4);
creaGridTemplate2(8, document.getElementById('casilla-template'),
    document.getElementById('tabla2'));
  
creaGridTemplate4(8, document.getElementById('casilla-template2'),
    document.getElementById('tabla3'));