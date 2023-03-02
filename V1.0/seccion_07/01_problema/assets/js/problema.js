const miguel = {
  nombre: 'Miguel Angel',
  edad: 23,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const fernando = {
  nombre: "Fernando Said",
  edad: 29,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const fatima = {
  nombre: 'Fatima Andrea',
  edad: 22,
  imprimir() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

/*miguel.imprimir();
fernando.imprimir();
fatima.imprimir();*/

function Persona(nombre, edad){ //
  console.log('Se ejecutó esta línea');

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = () => {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const arturo = new Persona( 'Arturo', 15 );
const alondra = new Persona( 'Alondra', 15 );
console.log(arturo)
arturo.imprimir();
alondra.imprimir();