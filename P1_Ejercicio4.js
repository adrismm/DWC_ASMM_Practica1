"use strict";

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180},
    { nombre: "Javier", puntuacion: 270},
    { nombre: "Raquel", puntuacion: 70},
    { nombre: "Mario", puntuacion: 310},
    { nombre: "Miriam", puntuacion: 90},
    { nombre: "Laura", puntuacion: 210}
];

console.log(puntuaciones);

function jugadoresTop(puntuaciones)
{
    //Creamos un nuevo array con los nombres de los jugadores con puntuaciones superiores a 100
    let mejoresPuntuaciones = puntuaciones.filter(puntuaciones => puntuaciones.puntuacion > 100);

    console.log(mejoresPuntuaciones);
}

jugadoresTop(puntuaciones);