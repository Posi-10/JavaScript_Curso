import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesID = [ 'capi', 'iron', 'spider' ];
const heroesPromesas = heroesID.map( buscarHeroe )

/* export const obtenerHeroesArr = async() => { // si usamos un await necesariamente se tiene que usar un async
  
  const heroesArr = [];

  for( const id of heroesID ) {

    // const heroe = await buscarHeroeAsync( id ); // await espera que la promesa se resuelva 

    //const heroe = await buscarHeroe( id );

    //heroesArr.push( heroe );
    heroesArr.push( buscarHeroe( id ) );

  }

  //return heroesArr;
  return await Promise.all( heroesArr );

}; */

export const obtenerHeroesArr = async() => await Promise.all( heroesID.map( buscarHeroe ) );

// Nueva Funcion

export const obtenerHeroesAwait = async( id ) => {

  try {

    const heroe = await buscarHeroeAsync( id );
    return heroe;
    
  } catch (error) {

    console.log( 'CATCH!!!!' );
    return {
      nombre: 'Sin Nombre',
      poder: 'Sin poder'
    };
    
  }

};

// Nueva Funcion 2

export const heroesCiclo = async() => {

  console.time('HeroesCiclo');

  /* const heroes = await Promise.all( heroesPromesas );
  heroes.forEach( heroe => console.log(heroe)); */

  /* for await( const heroe of heroesPromesas ){
    console.log(heroe);
  } */

  //heroesPromesas.forEach( async(heroe) => console.log(await heroe)); // no se recomienda usar


  console.timeEnd('HeroesCiclo');

}

export const heroeIfAwait = async( id ) => {

  if( (await buscarHeroeAsync( id )).nombre === 'Ironman') {
    console.log('Es el mejor de todos')
  } else {
    console.log('Naaaa!!!')
  }

};