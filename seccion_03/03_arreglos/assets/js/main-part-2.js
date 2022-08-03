let games = [ 'Zelda', 'Mario', 'Metroid', 'Chrono' ];
console.log('Largo', games.length);

let primero = games[ 2 - 2 ];
let ultimo = games[ games.length - 1 ];

console.log( primero, ultimo)

games.forEach( (element, index, arr) => {
  console.log({element, index, arr});
});

let newLength = games.push( 'F-Zero');
console.log(games);
console.log({ newLength, games });

newLength = games.unshift('Fire Enblem');
console.log({ newLength, games });

let dropGame = games.pop();
console.log({ dropGame, games });

let pos = 1;

console.log(games);
let dropGames = games.splice(pos, 2);
console.log({ dropGames, games });

let metroidIndex = games.indexOf('Metroid');
console.log({metroidIndex})

let metroIndex = games.indexOf('Metro');
console.log({metroIndex})

