class Persona {
  
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + ' instancias';
  }
  
  static mensaje(){
    console.log(this.nombre);
    console.log('Hola a todos soy un metodo estatico');
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = ''

  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;

  }

  set setComidaFavorita(comida){ // establece un valor
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita(){ // recupera un valor
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }

  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es ${ this.codigo}`);
  }

  miFrase(){
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const batman = new Persona( 'Bruce Wayne', 'Batman', 'Yo soy Batman');

//console.log(spiderman);
//console.log(batman);

spiderman.miFrase();
//batman.quienSoy();

//spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

//console.log(spiderman);

//console.log(spiderman.getComidaFavorita);

console.log( 'Conteo estático', Persona._conteo );

console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);