import {buscarHeroe as buscarHeroeCallback} from './js/callbacks'
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

// buscarHeroe( heroeId1, (err, heroe1) =>{

//     if (err) { return console.error (err); } 

//     buscarHeroe( heroeId2, (err, heroe2) => {

//         if (err) { return console.error (err); } 

//         console.log (`enviando al ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })
    
// });

Promise.all([true,'hola',123]).then(arr => {
    console.log('promise.all', arr);
})



console.log ('fin del programa')