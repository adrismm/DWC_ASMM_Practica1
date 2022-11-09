"use strict";

let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180},
    { nombre: "Javier", puntuacion: 270},
    { nombre: "Raquel", puntuacion: 70},
    { nombre: "Mario", puntuacion: 310},
    { nombre: "Miriam", puntuacion: 90},
    { nombre: "Laura", puntuacion: 210}
]

for(let i of puntuaciones) // Recorremos el array de esta forma y mostramos las puntuaciones una a una
{
    console.log("El jugador " + i.nombre + " tiene " + i.puntuacion + " puntos.");
}

function jugadoresTop(puntuaciones)
{
    //Creamos un nuevo array con los nombres de los jugadores con puntuaciones superiores a 100
    let mejoresPuntuaciones = puntuaciones.filter(puntuaciones => puntuaciones.puntuacion > 100);

    console.log("Los jugadores con las mejores puntuaciones son: ");

    for(let i of mejoresPuntuaciones)
    {
        console.log("Nombre de jugador: " + i.nombre + ", Puntuación: " + i.puntuacion);
    }

    return jugadoresTop;
}

jugadoresTop(puntuaciones);