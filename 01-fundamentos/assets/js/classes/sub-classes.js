
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

class Heroe extends Persona {
    
    clan = 'sin clan';

    constructor (nombre, codigo, frase) {
       
        super(nombre,codigo,frase);

        this.clan = 'los avengers'
    }

    quienSoy () {
        console.log (`soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('peter parker','spiderman','soy tu vecino spiderman');

console.log (spiderman)
spiderman.quienSoy();