import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";

UI.init({
    board: 'board',
    status: 'gameStatus',
    casillas: 'casilla',
    plantilla: 'tabla',
    boton : 'boton',
    disparar : 'disparar',
    coordx : 'coordX',
    coordy : 'coordY'
});



const gameInstance = new GameSubmarine(UI);

gameInstance.init();

gameInstance.shot();

