function saludar(nombre) {
  console.log(arguments)
  console.log('Hola ' + nombre);
}

const saludar2 = function(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Peter', 25, true, 'New York');
saludar2('Tony');