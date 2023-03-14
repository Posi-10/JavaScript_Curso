import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatiorFunctionsAsyncComponent = async ( element ) => {

  const heroGeneratos = getHeroGenerator();

  let isFinished = false;

  do{

    const { value, done } = await heroGeneratos.next();

    isFinished = done;

    if( isFinished ) break;

    element.innerHTML += `${ value } <br/>`;

  } while( !isFinished )
  

}

async function* getHeroGenerator (){
  for( const hero of heroes ){
    await slepp();
    yield hero.name;
  }
};

const slepp = () => {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      resolve();
    }, 1000);
  });
};