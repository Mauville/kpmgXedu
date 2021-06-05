import React, { Fragment, useState } from 'react';
import Resultados from './Resultados';

const Busqueda = ({ execute, option, changeOption }) => {
  const [cita, actualizarCita] = useState({
    mascota: ''
  });

  const [error, actualizarError] = useState(false);

  //Se ejecuta cada vez que el usaurio escribe en los input
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  //Extraer Valores
  const { mascota } = cita;

  //Cuando el usuario presione agregar cita
  const submitCita = e => {
    e.preventDefault();

    //Validar
    if (mascota.trim() === '') {
      actualizarError(true);
      return;
    }
    console.log(Number(option) === 2);
    if (Number(option) === 1) {
      execute.PerCountry(mascota);
    } else if (Number(option) === 2) {
      execute.PerTitle(mascota);
    } else if (Number(option) === 3) {
      execute.PerCount(mascota);
    } else if (Number(option) === 4) {
      execute.PerYear(mascota);
    } else if (Number(option) === 5) {
      execute.PerActor(mascota);
    }

    //Eliminar el mensaje previo
    actualizarError(false);

    //Reiniciar el form
    actualizarCita({
      mascota: ''
    });
  };

  return (
    <Fragment>
      <h2>Wonderflix</h2>
      {error ? <p className="alerta-error"> Es necesario llenar el campo </p> : null}
      <form onSubmit={submitCita}>
        <label>Buscar:</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Busqueda"
          onChange={actualizarState}
          value={mascota}
        />
        <select onChange={changeOption}>
          <option value={1}>Country</option>
          <option value={2}>Title</option>
          <option value={3}>Count</option>
          <option value={4}>Year</option>
          <option value={5}>Info</option>
          <option value={6}>Actor</option>
        </select>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Busqueda;
