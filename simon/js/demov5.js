import { UI } from './UIv2.js';

// Como hemos hecho en clase creamos un objeto de configuración con el comportamiento de la interfaz.
UI.init(
    [
        {
            id: "pulsador1",
            colorOn: "#d3c500ff",
            colorOff: "lightyellow"
        },
        {
            id: "pulsador2",
            colorOn: "#008800ff",
            colorOff: "lightgreen"
        },
        {
            id: "pulsador3",
            colorOn: "#001dc4ff",
            colorOff: "lightblue"
        },
        {
            id: "pulsador4",
            colorOn: "#8a0000ff",
            colorOff: "lightcoral"
        }
    ]
);

UI.botones({
    boton: 'boton'
})

// La lógica del juego tendría que contactar con la interfaz y enviarle la secuencia a mostrar.
UI.setList([0, 1, 1, 2]);
UI.play();
UI.seleccion();
UI.send();







// En cualquier momento la lógica del juego podría saber si la interfaz está ocupada mostrando la secuencia.
console.log(UI.isBusy());



