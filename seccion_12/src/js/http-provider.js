const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const userUrl = 'https://reqres.in/api/users?page=2';

// Cloudinary

const cloudPreset = 'pabjreyo';
const cloudUrl = 'https://api.cloudinary.com/v1_1/posi/image/upload/';

// El fetch agarra api's y optener informacion de la misma por funciones de callback, de la mismad se puede desetructural la imfomacion para onpener el valor mas exacto a tomar.

/* fetch( jokeUrl ).then( resp => {

  resp.json().then( ({ id, value }) => {
    console.log(id)
    console.log(value)
  })

}); */

/* fetch( jokeUrl )
  .then( resp => resp.json() )
  .then( ({ id, value }) => {
    console.log(id, value)
  })
 */

const obtenerChiste = async() => {

  try {

    const resp = await fetch( jokeUrl );

    if( !resp.ok ) throw 'No se puede realizar la peticion';

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };

  } catch (err) {

    throw err;

  }

};

const obtenerUsuarios = async() => {

  const resp = await fetch( userUrl );
  const { data:usuarios } = await resp.json();
  return usuarios
} ;

const subirImagen = async( archivoSubir ) => {
  const formData = new FormData();
  formData.append("upload_preset", cloudPreset);
  formData.append("file", archivoSubir );
  try {
    const resp =await fetch( cloudUrl, {
      method: 'POST',
      body: formData
    });
    if( resp.ok ) {
      const cloudResp = await resp.json();
      //console.log(cloudResp);
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (err) {
    throw err
  }
};


export {
  obtenerChiste,
  obtenerUsuarios,
  subirImagen
}