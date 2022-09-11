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

class Heroe extends Persona{
  clan = 'Sin clan';

  constructor( nombre, codigo, frase ){
    /*const a  = 10;
    let b = 10 + a;*/

    super( nombre, codigo, frase ); // extencion del constructor de la clase principal
    
    this.clan = 'The Avengers'
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`)
    super.quienSoy();
  }
}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
//const batman = new Persona( 'Bruce Wayne', 'Batman', 'Yo soy Batman');

//const spiderman = new Heroe();

console.log(spiderman);
spiderman.quienSoy();
