const elMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (mienbro) => (mienbro) ? '2 Dólares' : '10 Dólares';

console.log( elMayor(20, 15) );
console.log( tieneMembresia(false) );

const amigo = false;
const amigosArr = [
  'Peter',
  'Tony',
  'Dr. Strage',
  amigo ? 'Thor' : 'Loki',
  (() => 'Nick Fury')(), // funcion anonima auto invocada
  elMayor(10, 15),
];

console.log(amigosArr);

const nota = 82;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B':
              nota >= 75 ? 'c+':
              nota >= 70 ? 'c': 'F';

console.log( { nota, grado } )