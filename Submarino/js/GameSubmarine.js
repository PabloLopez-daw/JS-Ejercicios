import { Tablero } from "./Tablero.js";
export class GameSubmarine {
    constructor(UIControl) {
        this.UIControl = UIControl;
        this.tablero = new Tablero();
    }
    init() {
        this.UIControl.changeStatus("Juego iniciado");
        this.tablero.init({
            size: 5
        });

        if (this.UIControl.boton) {
            
            this.UIControl.boton.addEventListener('click', () => {
                this.tablero.tablet(this.tablero.size, this.UIControl.plantilla, this.UIControl.board, '.casilla');
                this.UIControl.disparar.style.display = 'inline';
            });
        }

    }


    shot() {
        if (this.UIControl.disparar) {
            this.UIControl.disparar.addEventListener('click', () => {
                const x = parseInt(this.UIControl.coordx.value);
                const y = parseInt(this.UIControl.coordy.value);

                if (this.tablero.dispara(x, y)){
                    this.UIControl.board.style.display = 'none';
                }

            });
        }

    }
}
