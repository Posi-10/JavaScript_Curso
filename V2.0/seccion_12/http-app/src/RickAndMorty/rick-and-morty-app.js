/**
 * 
 * @returns { Promise<Object> } object information
 */
const fetchCharacter = async () => {

  const random = Math.floor( Math.random() * 827 );  
  const res = await fetch( `https://rickandmortyapi.com/api/character/${random === 0 ? 1 : random }` );
  const data = await res.json();

  return data;
}
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMorty = async ( element ) => {
  
  document.querySelector('#app-title').innerHTML = 'Rick and Morty App';
  element.innerHTML = 'Loading...';

  const idLabel = document.createElement('h2');
  const nameLabel = document.createElement('h3');
  const genderLabel = document.createElement('h3');
  const imageLabel = document.createElement('img');
  const nextCharacterButton = document.createElement('button');
  nextCharacterButton.innerText = 'Next Character';

  const renderCharacter = ( {name, id, gender, image} ) => {

    idLabel.innerHTML = id;
    nameLabel.innerHTML = name;
    genderLabel.innerHTML = gender;
    imageLabel.src = image

    element.replaceChildren( idLabel, nameLabel, genderLabel, imageLabel, nextCharacterButton);
    
  };

  nextCharacterButton.addEventListener( 'click', async () => {
    element.innerHTML = 'Loading...';
    renderCharacter(await fetchCharacter());
  })

  fetchCharacter()
    .then( renderCharacter );
};