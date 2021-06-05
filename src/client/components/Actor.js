import React, { Fragment, useState } from 'react';

const Actor = () => {
  const [busquedaActor, actualizarBusqueda] = useState({
    busquedaActor: ''
  });

  // eslint-disable-next-line no-unused-vars
  const submitActor = e => {
    e.preventDefault();

    if (busquedaActor.trim() === '') {
      // eslint-disable-next-line no-undef
      actualizarError(true);
    }
  };

  console.log('enviando info...');
  console.log(busquedaActor);

  // eslint-disable-next-line no-undef
  actualizarError(false);

  actualizarBusqueda({
    busquedaActor: ''
  });

  return (
    <Fragment>
      <div>
        <button type="submit" className="one-half column button-primary" name="actor">
          Actor
        </button>
      </div>
    </Fragment>
  );
};
export default Actor;
