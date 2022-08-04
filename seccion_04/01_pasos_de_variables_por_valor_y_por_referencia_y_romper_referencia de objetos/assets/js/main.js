/** Valor **/

let a = 10;
let b = a;

a = 30;

console.log({ a, b });

/** Referencia **/

let juan = { nombre: 'Juan' };
let ana = { ...juan }; 
/** De esta forma rompemos la referencia se 
 * llama operador esprit mientras tanto esta 
 * dentro de llaves si no esta dento de las 
 * llaves se llama operador Rest
 **/

ana.nombre = 'Ana';

console.log({ juan, ana} );

const cambiarNombre = ({ ...persona }) => { // 
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony })

// Arreglos

const frutas = [ 'Manzana', 'Pera', 'Piña' ];

//
console.time('spread');
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');
otrasFrutas2.push('Fresa');

console.table({ frutas, otrasFrutas });
console.table({ frutas, otrasFrutas2 });