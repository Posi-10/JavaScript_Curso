let a = 5;

if ( a >= 10 ) {
  console.log('a es mayor o igual a 10');
} else {
  console.log('a es menor a 10')
}

//console.log('fin de programa');

const hoy = new Date();

let dia = hoy.getDate();

console.log({dia});

if ( dia === 0 ) {
  console.log('Domingo');
} else if ( dia === 1 ) {
  console.log('Lunes');
} else if ( dia === 2 ) {
  console.log('Martes');
} else {
  console.log('No es lunes, martes ni domingo...')
}

// Sin usar If Else, o Switch únicamente objeto


const diasLetras = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
}

const diasLetras2 = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];

console.log(diasLetras[dia] || 'Día no definido');
console.log(diasLetras2[dia] || 'Día no definido');