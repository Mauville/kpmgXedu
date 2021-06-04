import React, { Fragment, useState } from 'react';
import Resultados from './Resultados';


const Busqueda = () => {
  const [busqueda, actualizarBusqueda] = useState({
    busquedaDato: ''
  });

  const [error, actualizarError] = useState(false);

  const actualizarState = e => {
    actualizarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const { busquedaDato } = busqueda;
  

  //evento botn
  const submitBusqueda = e => {
    e.preventDefault();

    if (busquedaDato.trim() === '') {
      actualizarError(true);
      return;
    }

    // if (button === "actor"){
    //     actualizarBusqueda({
    //         actor:''
    //     });

    // } else(button === "titulo"){
    //     actualizarBusqueda({
    //         titulo:''
    //     });
    // }
  

  console.log('enviando info...');
  console.log(busqueda);
  console.log('Hola ¿cómo estás?');

  actualizarError(false);

  actualizarBusqueda({
    busquedaDato: ''
  })

}

  return (
    <Fragment>
      <h2>WonderFlix</h2>
      {error ? <p className="alerta-error">Es necesario llenar el campo</p> : null}
      <form onSubmit={submitBusqueda}>
        <label>Buscar:</label>
        <input
          type="text"
          name="titulo"
          className="u-full-width"
          placeholder="Ingresa el título de la pelicula o el nombre del actor a buscar"
          onChange={actualizarState}
          value={busquedaDato}
        />
        <div>
            <button type = "submit" className = "u-full-width column button-primary" name = "pelicula" >Buscar</button>
        </div>
      </form>
      <Resultados />
    </Fragment>
  );
}

export default Busqueda;
