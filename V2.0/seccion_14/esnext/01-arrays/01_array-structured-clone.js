const superHeros = [
  {
    id: 1,
    name: 'Batman'
  },
  {
    id: 2,
    name: 'Superman'
  },
  {
    id: 3,
    name: 'Flash'
  },
  {
    id: 4,
    name: 'Aquaman'
  }
];

/* Antigua Forma de copiar */
// const array2 = JSON.parse( JSON.stringify( superHeros ) );

const superHerosCopy = structuredClone( superHeros );

superHerosCopy[0].name = 'Green Lantern'

console.table( superHeros );
console.table( superHerosCopy );