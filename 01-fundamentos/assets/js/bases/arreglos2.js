let juegos = ["zelda", "mario", "metroid", "chrono"];
console.log(juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

//console.table({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log(elemento, indice, arr);
});
//agrega elemento al final del array
let nuevaLongitud = juegos.push("zero");
console.log({ nuevaLongitud, juegos });

//agrega un elemento al inicio del array
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

//borra un elemento al final del array
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//borra los elementos que se le indiquen
let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });

//buscar la posicion de un elemento         
let metroidIndex = juegos.indexOf('metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });

