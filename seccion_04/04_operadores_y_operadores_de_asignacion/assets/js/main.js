const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; // ?
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // true
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log( { a1, a2, a3, a4, a5 } );

if ( true || true || true || false ) {
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}

if ( regresaFalse() && regresaTrue() && ( true || false || true ) ) {
  console.log('Hacer algo');
} else {
  console.log('Hacer otra cosa');
}