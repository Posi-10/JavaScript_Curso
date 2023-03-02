const heroes = {
  capi: {
    nombre: 'Capitán Amériaca',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reaccion alergica a las picadiras de arañas'
  }
};

// las promesar piden una funcion de callbcak y dos peticione que som *resolve* y *reject*
// resolve => cuando la promesa es valida
// reject => cuando la promesa es invalidad

export const buscarHeroe = ( id ) => {

  const heroe = heroes[id];

  /* const promesa = new Promise();
  return promesa; */

  return new Promise( ( resolve, reject) => {

    /* if( heroe ) {
      resolve(heroe);
    } else {
      reject(`No existe un héroe con el id ${ id }`);
    } */

    if( heroe ) {
      setInterval(() => {resolve(heroe)}, 1000);
    } else {
      reject(`No existe un héroe con el id ${ id }`);
    }

  });

};

export const buscarHeroeAsync = async( id ) => {

  const heroe = heroes[id];

    if( heroe ) {
      return heroe;
    } else {
      //throw Error(`No existe un héroe con el id ${ id }`); // forma 1
      throw `No existe un héroe con el id ${ id }`; // forma 2
    }

};

const promesaLenta = new Promise( (resolve, reject) => {
  setTimeout( () => resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise( (resolve, reject) => {
  setTimeout( () => resolve('Promesa Media'), 1500);
});

const promesaRapida = new Promise( (resolve, reject) => {
  setTimeout( () => resolve('Promesa Rapida'), 1000);
});

export {
  promesaLenta,
  promesaMedia,
  promesaRapida
}