import { UI } from "./UI.js";
import { SimonGame } from "./simongame.js";


UI.init({
    verde: 'verde',
    rojo: 'rojo',
    amarillo: 'amarillo',
    azul: 'azul',
     boton: 'boton',
});

const gameInstance = new SimonGame(UI);

gameInstance.init();

