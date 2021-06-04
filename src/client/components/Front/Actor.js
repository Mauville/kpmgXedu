import React, { Fragment, useState } from 'react';

const Actor = () => {
    const [busquedaActor, actualizarBusqueda] = useState({
      busquedaActor: ''
    });

const submitActor = e => {
    e.preventDefault();
    
    if (busquedaActor.trim() === '') {
        actualizarError(true);
    }
};

console.log('enviando info...');
  console.log(busquedaActor);

  actualizarError(false);

  actualizarBusqueda({
    busquedaActor: ''
  });

  return (
      <Fragment>
          <div>
          <button type = "submit" className = "one-half column button-primary" name = "actor">Actor</button>
          </div>
      </Fragment>
  )

  export default Actor;
