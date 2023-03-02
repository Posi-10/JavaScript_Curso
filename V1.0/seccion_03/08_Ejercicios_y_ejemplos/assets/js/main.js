/*function crearPersona(nombre, apellido) {
  return {nombre, apellido};
}*/

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Miguel', 'Posada');
console.log(persona)

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => console.log({edad, args});
const imprimeArgumentos3 = (edad, ...args) => args;

imprimeArgumentos(10, 10.5, false, 'Hola');
imprimeArgumentos2(10, 10.5, false, 'adios');

const [estatura, vivo, saludo] = imprimeArgumentos3(10, 10.5, false, 'adios');
console.log({estatura, vivo, saludo});

const {nombre, apellido: nuevoApellido} = crearPersona('Miguel Angel', 'Posada Ibañez');
console.log({nuevoApellido});

const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

/*const imprimePropiedades = personaje => {
  console.log('nombre', personaje.nombre);
  console.log('codeName', personaje.codeName);
  console.log('vivo', personaje.vivo);
  console.log('vivo', personaje.edad);
  console.log('trajes', personaje.trajes);
}*/

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log({nombre})
  console.log({codeName})
  console.log({vivo})
  console.log({edad})
  console.log({trajes})
}

imprimePropiedades(tony);