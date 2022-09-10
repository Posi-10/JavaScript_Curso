/**
 * 2C = Tow of Clubs (Treboles)
 * 2D = Tow of Diaminds (Diamantes)
 * 2H = Tow of Hearts (Corazones)
 * 2S = Tow of Spades (Espadas)
 */

const miModulo = (() => { //funcion anonima auto invocadas

  'use strict'; // Ser estricto a la hora de evaluar el codigo

  let deck = [],
    puntosJugadores = [];
  
  const tipos = [ 'C', 'D', 'H', 'S' ],
    especiales = [ 'A', 'J', 'Q', 'K' ];


  // Referencias del HTML

  const puntuacion = document.querySelectorAll( 'small' ),
    btnPedir = document.querySelector( '#btnPedir' ),
    btnDetener = document.querySelector( '#btnDetener' ),
    btnNuevo = document.querySelector( '#btnNuevo' ),
    divCartasJugadores = document.querySelectorAll( '.divCartas' )

  // Esta funcion inicializa el juego

  const inicializarJuego = (  numJugadores = 2 ) => {

     deck = crearDeck();

     puntosJugadores = [];

     for( let i = 0; i < numJugadores; i++ ){

      puntosJugadores.push(0);

     }

     puntuacion.forEach( element => element.innerText = 0 );

     divCartasJugadores.forEach( element => element.innerHTML = '');

     btnPedir.disabled = false;
     btnDetener.disabled = false;

  }

  // Esta funcion genera un mazo de cartas y barajea el mismo

  const crearDeck = () => {

    deck = [];
    
    for( let i = 2; i<=10; i++ ){
      for( const type of tipos ){
        deck.push( i + type );
      }
    }

    for( const type of tipos ) {
      for( const spe of especiales ) {
        deck.push( spe + type );
      }
    }

    return _.shuffle( deck );
  }

  // Esta funcion me permite tomar una carta

  const pedirCarta = () => {

    if( deck.length === 0 ){

      throw 'No hay cartas en el mazo';

    }

    return deck.pop();
  }

  const valorCarta = ( cart ) => {

    const value = cart.substring(0, cart.length - 1);

    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
  }

  // Turno 0 = primer jugador y el ultimo será la computadora
  const acumularPuntos = ( carta, turno ) => {

    puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta( carta );
    puntuacion[ turno ].innerText = puntosJugadores[ turno ];
    return puntosJugadores[turno];

  }

  const crearCarta = ( carta, turno ) => {

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/img/${ carta }.png`;
    imgCarta.classList.add( 'carta' );
    divCartasJugadores[turno].append( imgCarta );

  }

  const determinarGanador = () => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout( () => {

      if( puntosComputadora === puntosMinimos ){

        alert( 'Empate' );
      
      } else if( puntosMinimos > 21 ) {
      
        alert( 'Computadora Gana' );
      
      } else if( puntosComputadora > 21 ) {
      
        alert( 'Jugador Gana' );
      
      } else {
      
        alert( 'Computadora Gana' );
      
      }

    }, 10);

  }

  // Turno de la computadora

  const turnoComputadora = ( puntosMinimos ) => {

    let puntosComputadora = 0

    do {

      const carta = pedirCarta();
      
      puntosComputadora = acumularPuntos( carta, ( puntosJugadores.length - 1 ) );

      crearCarta( carta, ( puntosJugadores.length - 1 ) );

    } while( puntosComputadora < puntosMinimos && puntosMinimos >= 21 );

    determinarGanador();

  };

  // Eventos

  btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta();

    const  puntosJugador =  acumularPuntos( carta, 0 );

    crearCarta( carta, 0 );

    if( puntosJugador > 21 ) {

      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador );

    } else if( puntosJugador === 21 ) {

      btnPedir.disabled = true;
      btnDetener.disabled = true;

    }

  });

  btnDetener.addEventListener( 'click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntuacion[0]);

  });

  btnNuevo.addEventListener( 'click', () => {

    inicializarJuego();

  });

  return {
    nuevoJuego: inicializarJuego
  }; // los modulos siempre tienen que retomar algo

})(); 
