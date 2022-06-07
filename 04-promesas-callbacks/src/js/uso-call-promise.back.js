import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe } from "./js/promesas";
import "./styles.css";

const heroeId1 = "capi1";
const heroeId2 = "iron";

// buscarHeroe( heroeId1, (err, heroe1) =>{

//     if (err) { return console.error (err); }

//     buscarHeroe( heroeId2, (err, heroe2) => {

//         if (err) { return console.error (err); }

//         console.log (`enviando al ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
//     })

// });

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`enviando al ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("se termino el promise.all");
  });

console.log("fin del programa");
