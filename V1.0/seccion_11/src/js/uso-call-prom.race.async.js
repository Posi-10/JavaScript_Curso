import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";

import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

/* promesaLenta.then( console.log );
promesaMedia.then( mnj => {
  console.log(mnj)
});
promesaRapida.then( mnj => console.log(mnj) ); */

/* Promise.race( [ promesaLenta, promesaMedia, promesaRapida ] )
  .then( console.log )
  .catch( console.warn ); */

buscarHeroe( 'capi2' ).then( console.log ).catch( console.warn );

buscarHeroeAsync( 'iron2' ).then( console.log ).catch( console.warn );