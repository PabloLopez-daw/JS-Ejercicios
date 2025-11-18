export class Tabla {

    static init(config) {
        const pulsarTecla = (colorOn, colorOff, tecla) => {
            tecla.style.backgroundColor = colorOn;
            setTimeout(() => {
                tecla.style.backgroundColor = colorOff;
                setTimeout(() => {
                    tecla.style.backgroundColor = colorOn;
                    control.start();
                }, 2000);
            }, 2000);
        }
        const control = {
            lista: [],
            addTecla: (tecla,colorOn,colorOff) => control.lista.push({
                id : tecla,
                colorOn: colorOn, 
                colorOff: colorOff
            }),
            start: () => {
                let elemento = control.lista.pop();
                if (elemento !== undefined)  pulsarTecla(elemento.colorOn, elemento.colorOff, elemento.id);
            }     
        }

        control.addTecla(config.verde ,config.verde.style.backgroundColor = config.colorOffVerde, config.colorOnVerde);
        control.addTecla(config.rojo, config.rojo.style.backgroundColor = config.colorOffRojo, config.colorOnRojo);
        control.addTecla(config.amarillo ,config.amarillo.style.backgroundColor = config.colorOffAmarillo, config.colorOnAmarillo);
        control.addTecla(config.azul, config.azul.style.backgroundColor = config.colorOffAzul,config.colorOnAzul);
        control.start();
    }    
}

