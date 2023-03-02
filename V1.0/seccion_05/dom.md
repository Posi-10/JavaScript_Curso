# DOM - Document Object Model #
Ejemplo podemos tenemos el documento HTML.

```html
<html>
  <!-- Es una etiqueta que genera un documento HTML que a la vez es un objeto del Dom -->
  <head>
    <!-- Dentro del objeto pricipal o objeto padre se puede tener otro objeto hijo en te caso es la etiqueta head, que asu vez puede tener mas objetos hijos -->
  </head>
  <body>
    <!-- Y no necesaria mente puede tener un hijo, puede tener de uno o mas como este caso el body que es otra etiqueta hijo de la etiqueta html -->
    <div>
      <input>
      <input>
      <button>
      </button>
    </div>
  </body>
</html>
```
## Manipulacion basica del DOM ##
La funcionalidad del DOM solo es manipulable en el navejado en su misma consola.
1. Con `documet` en el navegador de Google Chrome el cual nos muestra doto el archivo HTML.
2. Si solo queremos hacer referencia aun solo objeto por ejemplo el body es becesario poner `document.querySelector(<objeto>)` => `document.querySelector('body')` el cual muestra los objeto dentro del body.
3. Si tenemos mas de una etiqueta o objeto del mismo formato se pude hacer la busqueda del anterior `document.querySelector(<objeto>)` pero solo te muestra el primero si quiere visualisar todos se tiene que usar el siguente formato `document.querySelectorAll(<objeto>)` y de esta manera se puede visualizar los demas elementos como un arreglo.
4. Con fal afuncion del `document.querySeletor(<objetos>)` le puede poner una extencion para poder visualir algo especifigo por ejemplro par poder visualizar la ruta que tiene una imagen con el sigiente proceso `document.querySeletor(<objeto>).src`.
5. Tambien podemos cambiar el texto de algun objeto o etiqueta y se hace de la siguiente manera `document.querySelector('h1').innerText = 'Hola Mundo'` o `document.querySelector('h1').innerHTML = 'Hola Mundo'` con la gran diferancia que el innerText solo permite puros String y el innerHTML se pude poner formatos de HTML es decir poner etiquetas.
6. No solamete se pueden buscar por el nombre de la etiqueta si no tambien por el nombre de una clase `document.querySelector('.titulo').innerText = 'Hola Mundo'` o un id`document.querySelector('#titulo').innerHTML = 'Hola Mundo'`.
7. Tambien se pueden almacenaar los objetos en variables `const divBotones = document.querySelector('#divBotones')`.
8. Se pueden crear objetos y se crean con la propiedad **creareElement** `document.createElement`, y para poder insertar el objeto creado es necesario insertarlo con **append** `document.apped(document.createElement)`
9. si queremos ver cuantas clases tiene un objeto se puede ver con **classList**
10. para agregar una clase es con **classList.add**