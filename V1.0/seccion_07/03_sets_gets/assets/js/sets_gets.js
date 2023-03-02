class Persona { 
  nombre = '';
  codigo = '';
  frase = '';
  comida = ';'

  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
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
console.log(spiderman);
console.log(batman);

spiderman.miFrase();
batman.quienSoy();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
console.log(spiderman);

console.log(spiderman.getComidaFavorita);

