import { obtenerChiste } from "./http-provider";

//variables
let contador = 0;

// referencias
const body = document.body;
let btnOtroChiste, olList;

// constructor
const crearChistesHtml = () => {
  const html = `
    <h1>Chistes</h1>
    <hr/>

    <button type="button" class="btn btn-primary"> Otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>
  `;

  const divChistes = document.createElement('div');
  divChistes.innerHTML = html;

  body.append(divChistes);

}

// eventos
const eventos = () => {
  
  // referencias
  olList = document.querySelector('ol');
  btnOtroChiste = document.querySelector('button');

  //eventos listener
  btnOtroChiste.addEventListener('click', async() => {

    btnOtroChiste.disabled = true;
    
    contador++;
    
    dibujarChiste( await obtenerChiste(), contador );

    btnOtroChiste.disabled = false;
    
  });

};

// creacion DOM
const dibujarChiste = ( chiste, contador ) => {

  const olItem = document.createElement('li');
  olItem.innerHTML = `${contador}.-\t\t<b>${ chiste.id }</b>: ${ chiste.value }`;
  olItem.classList.add('list-group-item');
  olList.append(olItem);

};

// exportacion
export const init = () => {

  crearChistesHtml();
  eventos();

}