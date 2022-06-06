

class Persona {

    static porObjeto({nombre,apellido,pais}) {
        return new Persona(nombre,apellido,pais);
    }

    constructor (nombre,apellido,pais) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;


    }

    getInfo () {
        console.log (`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const nombre1     = 'melissa';
        apellido1 = 'contreras';
        pais      = 'honduras';

const erika = {
    nombre   : 'Erika',
    apellido : 'Arango',
    pais     : 'colombia'
}

const persona1 = new Persona(nombre1, apellido1, pais);
const persona2 = Persona.porObjeto( erika )

persona1.getInfo();
persona2.getInfo();