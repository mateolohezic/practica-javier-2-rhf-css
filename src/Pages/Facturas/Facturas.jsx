import React, { useEffect, useState } from 'react'
import './facturas.css'
import { faker } from '@faker-js/faker';
import BuscadorCliente from '../../Components/BuscadorCliente/BuscadorCliente';
import FacturaCard from '../../Components/FacturaCard/FacturaCard';

function Facturas() {

    const [clienteSeleccionado, setClienteSeleccionado] = useState()
    const [clientes, setClientes] = useState([])

    const getClientes = () => {
        const db = [
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
            {
                name: faker.person.fullName(),
                mail: faker.internet.email(),
                street: faker.location.street()
            },
        ]
        setClientes(db)
    }

    useEffect(() => {
        getClientes()
    }, [])

    return (
    <>
        <section className='contenedorFacturas'>
            <h1>Crear Factura</h1>
            <BuscadorCliente clientes={clientes} clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado}/>
            <FacturaCard clienteSeleccionado={clienteSeleccionado}/>
        </section>
    </>
    )
}

export default Facturas
