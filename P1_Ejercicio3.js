"use strict";

class Consumible 
{
    constructor(nombre)
    {
        this.nombre = nombre;
    }

    consumir(jugador)
    {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto.");
    }
}

let manzana = new Consumible('Manzana');
let ricardo = 
{
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 8,
    puntosVidaMax: 10,
    consumir: function (consumible)
    {
        consumible.consumir(this);
    }

}

ricardo.consumir(manzana);

class PlantaCurativa extends Consumible
{
    constructor(nombre, poder)
    {
        super(nombre);
        this.poder = poder;
    }

    consumir(jugador)
    {
        if((this.poder + jugador.puntosVida) > jugador.puntosVidaMax)
        {
            jugador.puntosVida = jugador.puntosVidaMax;

            console.log("Recuperas la vida que te faltaba.");
        }
        else
        {
            jugador.puntosVida = jugador.puntosVida + this.poder;

            console.log("Recuperas " + this.poder + " puntos de vida.");
        }

        console.log(jugador.nombre + " consume " + this.nombre + " y tiene " + jugador.puntosVida + " puntos de vida.");
    }
}

let plantaCurativa = new PlantaCurativa('Planta Curativa', 5);

plantaCurativa.consumir(ricardo);