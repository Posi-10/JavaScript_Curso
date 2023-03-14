# Sección 11

## Variable de entorno

Para la creacion de variables de entorno se usa el archivo **.env**, vite ya tiene implementado este pluging, si no lo tiene implementado se puede inralar el [dotenv](https://www.npmjs.com/package/dotenv).
Tambien por seguridad este archivo teien que estar marcado como ignorado al momento de guardar el prollecto en un controlador de versiones; en este caso en el archivo **.gitgnore**. Pero para dar a entener que se necesita las ariables de entorno se crea el archivo **.env.tamplate** y dando solo ejemplos para guiarce.
Para declarar las variable de entorno en vite se tiene que poner primero la palabre vite junto a un guion bajo ejemplo: **VITE_VARIABLE_NAME**, y para visualizar la variable del entorno en el sitema se tiene que coloar **import.meta.env**.

### [Ejemplo](./advanced/src/concepts/01-environments.js)

## Call Back

Un call back es una función que recive un argumeto y que ese argumento es una función que se invoca dentro de la función

### [Ejemplo](./advanced/src/concepts/02-callbacks.js)

### Call Back Hell

Se refiere acuando tenemos muchos callbacks que interna mente llamana muchos callbacks y asi sucesivamente.

![callback hell](https://miro.medium.com/v2/resize:fit:720/1*uLjTm9CLmmITQC233T-KzA.gif)

#### [Ejemplo](./advanced/src/concepts/02-callbacks-hell.js)

## Promesas

Las promesas es un pactos de dos parte el cual una se compromente a hacer un trabajo y la ptra esta esperando el cumplimiento de la promesa, puede ser que la promesa no se cumpla y se tiene que llevar ese resultado tambien.

### [Ejemplo](./advanced/src/concepts/03-promises.js)

### Promesas Hell

Se refiere acuando tenemos muchas promesas que interna mente llamana muchas promesas y asi sucesivamente.

#### [Ejemplo](./advanced/src/concepts/03.1-promises-hell.js)

### Promesas All

Esta tipos de promesas permiten solucionar algunas promesas hell, esto funciona si las promesas no se necesitan entre si, solo si la promesa realiza una misma acción.
El **Promise.all()** permite realizar una ejecucion de varias promesas como un arreglo.

#### [Ejemplo](./advanced/src/concepts/03.2-promises-all.js)

### Promesa Race

El **Promise.race()** es una metodo que permite almacenar varias promesas y eque solo retorne la promesas que se ejecute mas rapido.

#### [Ejemplo](./advanced/src/concepts/03.3-promises-race.js)

## Async


La declaración de función **async** define una función asíncrona, la cual devuelve un objeto Promise.

### [Ejemlo](./advanced/src/concepts/04-async.js)

## Async - await

La declaración de función **async** define una función asíncrona, la cual devuelve un objeto Promise. El operador **await** es usado para esperar a una Promise. Sólo puede ser usado dentro de una función **async**.

### [Ejemplo](./advanced/src/concepts/05-async-await.js)

## Funcion Generadora

Los generadores son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.
La llamada a una función generadora no ejecuta su cuerpo inmediatamente; se devuelve un objeto iterador para la función en su lugar.
La funcion genradora solo se puede decalrar de esta manera:
```js
function* functionName(){

}
```

y tiene dos tipos de return

* `yield` : este se puede repetir las veces que sean necesarioas
* `return`:  solo se puede repetir una vez

### [Ejemplo](./advanced/src/concepts/06-generators.js)