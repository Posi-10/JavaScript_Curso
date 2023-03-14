import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksHellComponent = ( element ) => {

  const id1 = '5d86371f9f80b591f499df32';

  const id2 = '5d86371fd55e2e2a30fe1ccb2';

  const id3 = '5d86371fd55e2e2a30fe1ccb1';

  findHero( id1, ( error, hero1 ) => {

    if ( error ) {

      element.innerHTML = error;

      return;

    }

    findHero( id2, ( error, hero2 ) => {

      if ( error ) {

        element.innerHTML = error;
  
        return;
  
      }

      findHero( id3, ( error, hero3 ) => {

        if ( error ) {
  
          element.innerHTML = error;
    
          return;
    
        }
  
        element.innerHTML = `${ hero1.name } / ${ hero2.name } / ${ hero3.name }`;
  
      });

    });

  } );

};

/**
 * 
 * @param { String } id 
 * @param { ( error?: String | null, hero: Object ) => void } callback 
 */
const findHero = ( id, callback ) => {

  const hero = heroes.find( hero => hero.id === id );

  if( !hero ){

    callback(`Hero with id ${ id } not fount`);

    return;

  }

  callback( null, hero );

};