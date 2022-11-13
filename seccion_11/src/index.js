import { obtenerHeroesArr, obtenerHeroesAwait, heroesCiclo, heroeIfAwait } from "./js/await";

console.time('await');

/* obtenerHeroesArr().then( heroes => { 
  console.table(heroes);
  console.timeEnd('await'); 
}); */

/* obtenerHeroesAwait('capi2').then( heroes => { 
  console.log(heroes);
  console.timeEnd('await'); 
}). catch( console.warn ); */

// console.log( heroes );

//heroesCiclo();

heroeIfAwait('iron');