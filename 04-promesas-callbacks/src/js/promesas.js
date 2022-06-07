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

export  const buscarHeroe = (id) => {

    const heroe = heroes [id];

    return new Promise((resolve, reject) => {

        if ( heroe) {
            resolve (heroe);
        } else {
            reject (`No existe un heroe con el id ${id}`);
        }

    });


}