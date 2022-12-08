"use strict";

class Zombi
{
    constructor(nombre, puntosVida, potencia)
    {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }

    atacar(objetivo)
    {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

class Abominacion extends Zombi
{
    ataqueMultiple(objetivo) // El método ataqueMultiple() debe llamar al método atacar() de la clase padre
    {
        super.atacar(objetivo);
        super.atacar(objetivo);
        super.atacar(objetivo);
    }
}

let abominacion = new Abominacion('Abominación', 200, 20);

abominacion.ataqueMultiple("Frodo");