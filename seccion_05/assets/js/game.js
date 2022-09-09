/**
 * 2C = Tow of Clubs (Treboles)
 * 2D = Tow of Diaminds (Diamantes)
 * 2H = Tow of Hearts (Corazones)
 * 2S = Tow of Spades (Espadas)
 */

let deck = [];
const types = [ 'C', 'D', 'H', 'S' ];
const special = [ 'A', 'J', 'Q', 'K' ];

let puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML

const puntuacion = document.querySelectorAll( 'small' );

const btnPedir = document.querySelector( '#btnPedir' );
const btnDetener = document.querySelector( '#btnDetener' );
const btnNuevo = document.querySelector( '#btnNuevo' );

const divCartasJugador = document.querySelector( '#judador-cartas' );
const divCartasComputadora = document.querySelector( '#computadora-cartas' );

// Esta funcion genera un mazo de cartas y barajea el mismo
const crearDeck = () => {
  for( let i = 2; i<=10; i++ ){
    for( const type of types ){
      deck.push( i + type );
    }
  }

  for ( const type of types ) {
    for ( const spe of special ) {
      deck.push( spe + type );
    }
  }

  deck= _.shuffle( deck );
  return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
  if( deck.length === 0 ){
    throw 'No hay cartas en el mazo';
  }

  const cart = deck.pop();
  return cart;
}

const valorCarta = ( cart ) => {
  const value = cart.substring(0, cart.length - 1);
  return ( isNaN( value ) ) ? 
          ( value === 'A' ) ? 11 : 10
          : value * 1;
}

// Turno de la computadora

const turnoComputadora = ( puntosMinimos ) => {
  do {

    const carta = pedirCarta();
    puntosComputadora = puntosComputadora + valorCarta( carta );
    puntuacion[ 1 ].innerText = puntosComputadora;
    
    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/img/${ carta }.png`;
    imgCarta.classList.add( 'carta' );

    divCartasComputadora.append( imgCarta );

    if( puntosMinimos > 21 ){
      
      break;

    }

  } while ( puntosComputadora < puntosMinimos && puntosMinimos >= 21 );
  
  setTimeout( () => {

    if ( puntosComputadora === puntosMinimos ){

      alert( 'Empate' );
    
    } else if ( puntosMinimos > 21 ) {
    
      alert( 'Computadora Gana' );
    
    } else if ( puntosComputadora > 21 || puntosComputadora < puntosJugador ) {
    
      alert( 'Jugador Gana' );
    
    } else {
    
      alert( 'Computadora Gana' );
    
    }

  }, 10);

};

// Eventos

btnPedir.addEventListener( 'click', () => {

  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta( carta );
  puntuacion[ 0 ].innerText = puntosJugador;
  
  const imgCarta = document.createElement( 'img' );
  imgCarta.src = `assets/img/${ carta }.png`;
  imgCarta.classList.add( 'carta' );

  divCartasJugador.append( imgCarta );

  if ( puntosJugador > 21 ) {

    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );

  } else if ( puntosJugador === 21 ) {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

  }

});

btnDetener.addEventListener( 'click', () => {

  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosComputadora);

});

btnNuevo.addEventListener( 'click', () => {
  
  deck = [];
  puntosComputadora = 0;
  puntosJugador = 0;

  puntuacion[ 0 ].innerText = puntosJugador;
  puntuacion[ 1 ].innerText = puntosComputadora;

  btnPedir.disabled = false;
  btnDetener.disabled = false;

  divCartasJugador.innerHTML = ''
  divCartasComputadora.innerHTML = '';
  
  crearDeck();

});