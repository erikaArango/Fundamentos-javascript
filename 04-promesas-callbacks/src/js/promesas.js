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

    if ( heroe) {
        return heroe;
    } else {
        throw `No existe un heroe con el id ${id}`;
    }

}


export const buscarHeroeAsync = async( id ) => {
    
    const heroe = heroes[id];

    if( heroe ) {
        return heroe;
    } else {
        throw `No existe un héroe con el id ${ id }`;
    }
}




const promesaLenta = new Promise((resolve,reject) => { 

    setTimeout(() => resolve('Promesa Lenta') , 2000);

});

const promesaMedia = new Promise((resolve,reject) => { 

    setTimeout(() => resolve('Promesa Media') , 1500);

});

const promesaRapida = new Promise((resolve,reject) => { 

    setTimeout(() => resolve('Promesa Rapida') , 1000);

});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}