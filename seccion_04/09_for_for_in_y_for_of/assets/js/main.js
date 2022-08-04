const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman', 'Robin'];

console.warn('For Tradicional');
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('For IN');
for (let i in heroes) {
  console.log(heroes[i])
}
console.warn('For Tradicional');
for (let i of heroes) {
  console.log(i)
}