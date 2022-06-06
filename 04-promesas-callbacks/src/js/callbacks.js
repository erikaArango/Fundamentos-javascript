const heroes = {
    capi: {
        nombre:'Capitan america',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre:'spiderman',
        poder: 'Ser como una araña'
    }
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes [id];

    if ( heroe ) {
        callback();
    } else {
        //un error
        callback(`NO EXISTE UN HEROE CON EL ID ${id}`);
    }

    //callback( heroe );

}