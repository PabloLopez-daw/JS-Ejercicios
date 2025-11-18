import { Tabla } from "./Tabla.js";
export class SimonGame {
    constructor(UIControl) {
        this.UIControl = UIControl;
    }
    init() {
        Tabla.init({
            verde: this.UIControl.verde,
            rojo: this.UIControl.rojo,
            amarillo: this.UIControl.amarillo,
            azul: this.UIControl.azul,
            colorOnRojo: 'darkred',
            colorOnVerde: 'darkgreen',
            colorOnAmarillo: 'yellow',
            colorOnAzul: 'darkblue',
            colorOffRojo: 'lightcoral',
            colorOffVerde: 'lightgreen',
            colorOffAmarillo: 'lightyellow',
            colorOffAzul: 'lightblue'
        })

        

    }

}

