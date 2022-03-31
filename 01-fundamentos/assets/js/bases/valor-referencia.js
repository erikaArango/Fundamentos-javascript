let a = 10;
let b = a;

console.log({ a, b });

let juan = { nombre: "juan" };
let ana = { ...juan }; //spred separa los elementos y rompe la referencia
ana.nombre = "ana";

console.log({ juan, ana });

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "tony";
  return persona;
};

let peter = { nombre: "peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

//arreglos
const frutas = ["manzana", "pera", "limon"];

// const otrasFrutas = [...frutas]; //...separa cada uno de los elementos que vienen en el arreglo de manera independiente, rompiendo la relacion

//otra forma de romper la relacion es con slice()
console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas];
console.timeEnd("spread");

otrasFrutas.push("mango");

console.table({ frutas, otrasFrutas });
