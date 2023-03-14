/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = ( element ) => {

  // console.log( process.env );

  console.log( import.meta.env );

  const html = `
    Base_url: ${ import.meta.env.BASE_URL } </br>
    Dev: ${ import.meta.env.DEV } </br>
    Mode: ${ import.meta.env.MODE } </br>
    Prod: ${ import.meta.env.PROD } </br>
    Ssr: ${ import.meta.env.SSR } </br>
    Vite_api_key: ${ import.meta.env.VITE_API_KEY } </br>
    Vite_base_url: ${ import.meta.env.VITE_BASE_URL } </br>
  `;  
  
  element.innerHTML = html;
  
};