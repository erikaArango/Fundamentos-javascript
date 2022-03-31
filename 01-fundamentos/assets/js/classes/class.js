

class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        console.log(`${this.codigo} dice : ${this.frase}`)
    }

}

const spiderman = new Persona('peter parker','spider', 'soy amable');
const ironman = new Persona('tony stark','ironman','yo soy ironman');

console.log(spiderman);
console.log(ironman);

spiderman.miFrase();
ironman.quienSoy();