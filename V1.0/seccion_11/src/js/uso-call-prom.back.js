//asignar alias los onjetos es con un *as*

import { buscarHeroe as buscarHeroeCallback } from './callbacks';
import { buscarHeroe as buscarHeroePromesas} from './promesas';

import './styles.css';

const heroeID1 = 'capi'
const heroeID2 = 'spider'
const heroeID3 = 'iron'

// Tema: Callbacks

// hacen peticiones metiente funciones y de esas mismas se pueder retornar algo o no 

/* buscarHeroeCallback( heroeID1, (err, heroe1) => {

  if( err ) { return console.error(err) };

  buscarHeroeCallback(heroeID2, ( err, heroe2 ) => {

    if( err ) { return console.error(err) };

    // console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);

    buscarHeroeCallback(heroeID3, ( err, heroe3 ) => {

      if( err ) { return console.error(err) };
  
      console.log(`Enviando a ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre } a la mision`);
  
    });

  });

}); */

// Tema: Promesas

// las promesas tienen tres funciones que son: then(), catch() y finally()
// then() -------> promesas validas
// catch() ------> promesa invalidas
// finally() ----> finalizacion de la promesa 

/* buscarHeroePromesas( heroeID1 ).then( heroe1 => {

  //console.log(`Enviando a ${ heroe.nombre } a la mision`);

  buscarHeroePromesas( heroeID2 ).then( heroe2 => {

    console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision`);
  
  })

}); */

Promise.all([buscarHeroePromesas(heroeID1), buscarHeroePromesas(heroeID2), buscarHeroePromesas(heroeID3)])
  .then( ([heroe1, heroe2, heroe3]) => {

    console.log(`Enviando a ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre } a la mision`);

  })
  .catch( err => alert(err))
  .finally( () => console.log('Se termino el promise.all'));





console.log('Fin de programa')