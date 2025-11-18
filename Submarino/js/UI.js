export const UI = {
    game: null,
    board: null,
    status: null,
    casillas: null,
    plantilla: null,
    boton : null,
    disparar : null,
    coordx : null,
    coordy : null,
    win : null,
    init: (UIControl) => {
        UI.board = document.getElementById(UIControl.board);
        UI.status = document.getElementById(UIControl.status);
        UI.casillas = document.getElementsByClassName(UIControl.casillas);
        UI.plantilla = document.getElementById(UIControl.plantilla);
        UI.boton = document.getElementById(UIControl.boton);
        UI.disparar = document.getElementById(UIControl.disparar);
        UI.coordx = document.getElementById(UIControl.coordx);
        UI.coordy = document.getElementById(UIControl.coordy);
        UI.win = document.getElementById(UIControl.win);

    },

    start: (gameInstance) => {
        UI.game = gameInstance;
    },

    changeStatus: (message) => {
        UI.status.textContent = message;
    }
 

}
