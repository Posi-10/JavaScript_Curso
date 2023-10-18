const heros = ['Batman','Superman','Flash','Aquaman'];
const sortHeros = heros.sort(); // mutable
const sortedHeros = heros.toSorted(); // inmutable
const reverseHeros = heros.toReversed();
const splicedHeros = heros.toSpliced(0,2,'Green Lanter')

console.table( heros );
console.table( sortedHeros );
console.table( reverseHeros );
console.table( splicedHeros );