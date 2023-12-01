import React from 'react'
import './facturaCard.css'

function FacturaCard(props) {
    return (
    <>
        <article className='facturaCard'>
            <h2>Cliente</h2>
            {
                !props.clienteSeleccionado ?
                <>
                    <h3>Añada un usuario...</h3>                
                </>
                :
                <>
                    <h3>Nombre Completo: <b>{props.clienteSeleccionado.name}</b></h3>
                    <h3>Correo Electronico: <b>{props.clienteSeleccionado.mail}</b></h3>
                    <h3>Calle: <b>{props.clienteSeleccionado.street}</b></h3>
                </>
            }
        </article>
    </>
    )
}

export default FacturaCard
