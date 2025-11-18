export const UI = {
    verdes: null,
    rojo: null,
    amarillo: null,
    azul: null,
    boton: null,

    init: (UIControl) => {
        UI.verde = document.getElementById(UIControl.verde);
        UI.rojo = document.getElementById(UIControl.rojo);
        UI.amarillo = document.getElementById(UIControl.amarillo);
        UI.azul = document.getElementById(UIControl.azul);
        UI.boton = document.getElementsByClassName(UIControl.boton);
    }   
    


}