"use strict";

class Jugador
{
    constructor(nombre, ocupacion, puntosVida, faccion)
    {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = puntosVida;
        this.faccion = faccion;
        this.puntosVidaMax = 100;
    }

    toString()
    {
        console.log(`${this.nombre} es un ${this.ocupacion} del equipo ${this.faccion} con ${this.puntosVida} puntos de vida`);
    }
}

let jugador1 = new Jugador('Adri', 'Atacante', 80, 'Amarillo');
let jugador2 = new Jugador('Rodrigo', 'Defensa', 50, 'Azul');
let jugadores = [jugador1, jugador2];

jugadores.toString();