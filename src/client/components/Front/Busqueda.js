import React from 'react';
import { Fragment } from 'react';

const Busqueda = () => {
    const[busqueda, actualizarBusqueda] = useState ({
        busquedaDato: ''
    });

    const [error, actualizarError] = useState(false);

    const actualizarState = e =>{
        actualizarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const{busquedaDato} = busqueda;

    const submitBusqueda = e => {
        e.preventDefault();

        if(busquedaDato.trim() === '') {
            actualizarError(true);
            return;
        }
    }

    console.log('enviando info...');
    console.log(busquedaDato);

    actualizarBusqueda({
        busquedaDato: ''
    })

    return (
        <Fragment>
            <h2>WonderFlix</h2>
            {error ? <p className='alerta-error'>Neceseitas llenar el campo</p>:null}
            <form onSubmit = {submitBusqueda}>
                <label>Buscar:</label>
                <input
                    type = 'text'
                    name = 'busquedaDato'
                    className = "u-full-width"
                    placeholder = "TituloActor"
                    onChange = {actualizarState}
                    value = {busquedaDato}>
                </input>

            </form>
        </Fragment>
    )
}

export default Busqueda;