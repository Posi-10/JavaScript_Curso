/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatiorFunctionsComponent = ( element ) => {

  /* const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
  console.log(myGenerator.next())
 */

  const genId = idGenerator();

  const  button = document.createElement('button');
  button.innerText = 'Click Me';
  element.append( button );

  const renderButton = () => {

    const { value } = genId.next();

    button.innerText = `Click ${ value }`
  };

  button.addEventListener( 'click', renderButton );

  // console.log( genId.next() );
  // console.log( genId.next() );
  // console.log( genId.next() );
  // console.log( genId.next() );

};

/**
 * Generación tipo funcion de flecha
 */
const idGenerator = function* (){

  let currentId = 0;

  while( true ) {

    yield ++ currentId;

  }

};
/**
 * Generacion tipo funcion nomales
 * @returns {String}
 */
function* myFirstGeneratorFunction() {

  yield 'Primero valor';
  yield 'Segundo valor';
  yield 'Tercero valor';
  yield 'Cuarto valor';
  
  return 'Ya no hay valores';  
  
  yield 'Ya no puede hacer nada';
  
}