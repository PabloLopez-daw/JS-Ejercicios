export const UI = {
    status: {
        ON: 1,
        OFF: 0
    },

    boton: null,

    botones(config) {
        UI.boton = document.getElementById(config.boton);
    },

    listButtons: [],
    list: [],
    busy: false,
    list2: [],


    init(configButtons) {
        UI.listButtons = configButtons;
        UI.listButtons.forEach((item) => item.id = document.getElementById(item.id));
    },

    setList: (list) => {
        UI.list = list;
    },

    isBusy: () => {
        return UI.busy;
    },

    send: () => {
        UI.boton.addEventListener("click", () => {
            UI.sum();
        });
    },

    play: async () => {
        UI.busy = true;
        for (let item of UI.list) {
            await UI.change(UI.listButtons[item], UI.status.ON);
            await UI.change(UI.listButtons[item], UI.status.OFF);
        }
        UI.busy = false;
    },
    seleccion: () => {
        UI.listButtons.forEach((item, index) => {
            item.id.addEventListener("click", () => {
                if (!UI.busy) {
                    item.id.style.backgroundColor = item.colorOn;
                    setTimeout(() => {
                        item.id.style.backgroundColor = item.colorOff;
                    }, 500);
                }
                UI.list2.push(index);
                console.log(UI.list2);
            })
        });
    },
    compare: () => {
        if (UI.list.length === UI.list2.length) {
            for (let i = 0; i < UI.list.length; i++) {
                if (UI.list[i] !== UI.list2[i]) {
                    return false;
                }
            }
            console.log("tus muertos");
            return true;
        }
        console.log("false");
        return false;
    },
    sum: () => {
        if (UI.compare() || UI.list.length === 0) {
            UI.list.push(Math.floor(Math.random() * 4));
            UI.play();
            UI.list2 = [];
            UI.seleccion();
            UI.send();
        } else {
            console.log("perdiste");
        }
    },

    change: (element, status) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                element.id.style.backgroundColor = (status === UI.status.ON) ? element.colorOn : element.colorOff;
                resolve(true);
            }, 1000);
        });
    },
}