import React, { Fragment, useState } from 'react';

const Formulario = () => {
    
    const [cita, actualizarCita] = useState({
        mascota: ''
    });

    const [error, actualizarError] = useState(false);
    
    //Se ejecuta cada vez que el usaurio escribe en los input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer Valores
    const {mascota} = cita;

    //Cuando el usuario presione agregar cita
    const submitCita = e => {
        e.preventDefault();
        

        //Validar
        if(mascota.trim() === ''){
            actualizarError(true);
            return;
        }

        console.log('agregando...')
        console.log(cita);

        //Eliminar el mensaje previo
        actualizarError(false);

        //Reiniciar el form
        actualizarCita({
            mascota: ''
        })
    }
    
    return (  
        <Fragment>
            <h2>Wonderflix</h2>
            { error ? <p className="alerta-error"> Es necesario llenar el campo </p>: null}
            <form
                onSubmit={submitCita}
            >
                <label>Buscar:</label>
                <input 
                   type = "text"
                   name = "mascota"
                   className="u-full-width" 
                   placeholder="Busqueda"
                   onChange={actualizarState}
                   value={mascota}
                />
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;