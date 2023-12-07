import React, { useEffect, useState } from 'react'
import './facturas.css'
import { faker } from '@faker-js/faker';
import BuscadorCliente from '../../Components/BuscadorCliente/BuscadorCliente';
import FacturaCard from '../../Components/FacturaCard/FacturaCard';
import FormClienteFacturas from '../../Components/FormClienteFacturas/FormClienteFacturas';

function Facturas() {

    const [clienteSeleccionado, setClienteSeleccionado] = useState()
    const [clientes, setClientes] = useState([])


    // nombre
    // direccion
    // correo
    // telefono
    // ruc

    const getClientes = () => {
        let db = []
        for (let i = 0; i < 30; i++) {
            const newCostumer = {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                country: faker.location.country(),
                city: faker.location.city(),
                street: faker.location.streetAddress({ useFullAddress: true }),
                phoneNumber: faker.phone.number(),
                ruc: faker.string.numeric({length: 6})
            }
            db.push(newCostumer)
        }
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
            <FormClienteFacturas clienteSeleccionado={clienteSeleccionado}/>
            {/* <FacturaCard clienteSeleccionado={clienteSeleccionado}/> */}
        </section>
    </>
    )
}

export default Facturas
