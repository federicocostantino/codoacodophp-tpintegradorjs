'use strict';

let valorTicket = 200;

document.querySelector("#buttonResumen").addEventListener("click",resumen);

function resumen() {
    let descuento;
    let cantidad = document.querySelector("#cantidad").value;
    if (cantidad=="") {
        alert("Debe ingresar una cantidad de tickets");
    } else {
        let categoria = document.querySelector("#categoria").value;
        switch (categoria) {
            case "estudiante":
                descuento = 0.2;
                break;
            case "trainee":
                descuento = 0.5;
                break;
            case "junior":
                descuento = 0.85;
                break;
            default:
                descuento = 1;
                break;
        };
        let valorTicketTotal = (valorTicket * descuento) * cantidad; 
        document.querySelector("#spanPrecioFinal").innerHTML = valorTicketTotal;
    }
};