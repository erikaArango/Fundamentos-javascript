

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + 'instancias';
    }

    static mensaje () {
        console.log(this.nombre);
        console.log('hola, soy un metodo estatico')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita (comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice : ${this.frase}`)
    }

}

const spiderman = new Persona('peter parker','spider', 'soy amable');
const ironman = new Persona('tony stark','ironman','yo soy ironman');

console.log(ironman);

spiderman.miFrase();
//ironman.quienSoy();

spiderman.setComidaFavorita = 'el pie de cereza de la tia'

// console.log(spiderman);
// console.log(spiderman.getComidaFavorita);
console.log('conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();