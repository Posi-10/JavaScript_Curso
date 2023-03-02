function saludar(nombre) {
  return [10, 20, 30];
}

const retornoDeSaludar = saludar();

console.log({retornoDeSaludar});

function sumar(a, b) {
  return a + b;
}

console.log(3 + 2);

const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(50, 25));

function getAleatorio() {
  return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());