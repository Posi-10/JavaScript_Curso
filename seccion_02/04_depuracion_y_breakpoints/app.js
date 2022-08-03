/** Depuracion
 *  nos sirve para poder controlar la ejecucion del programa y poder ejecutar linea por liena hasta que salga nuestro error o para per los tiempos.
*/

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'SpinderMan',
    x = a + b;

const saludo = c + d;

console.log('%c Mis variables', 'color:#25c5ce; font-size:30px;')
console.log({ a });
console.log({ b });
console.log({ c });
console.table({a,b,c,d,x});

c = 'Hola de nuevo';