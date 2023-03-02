/** Clases
 * Para la creacion de clases se necestita definir con la palabra reservada **class**
 * Y su metodo prinsipal e el **constructor**
 * Para definir un meto es:
 * constructor(){
 * 
 * }
 * ó
 * miMetodo(){
 * 
 * }
 * Tambien se pueden definir variables como:
 * variable = <valor>;
 * 
 * Para llamar todo los parametros de la clase en la misma clase se nesecita usar la funcion **this**:
 * 
 * this.<variable> ó this.<metodo>
 * 
 **/
class Persona { // clase
  // variables

  nombre = '';
  codigo = '';
  frase = '';

  //metodos

  constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  quienSoy(){ // metodo
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