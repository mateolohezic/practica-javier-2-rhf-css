import React, { useEffect, useState } from 'react'
import './facturas.css'
import { faker } from '@faker-js/faker';
import BuscadorCliente from '../../Components/BuscadorCliente/BuscadorCliente';
import FacturaCard from '../../Components/FacturaCard/FacturaCard';
import FormClienteFacturas from '../../Components/FormClienteFacturas/FormClienteFacturas';
import BuscadorProductos from '../../Components/BuscadorProductos/BuscadorProductos';

function Facturas() {

    const [clienteSeleccionado, setClienteSeleccionado] = useState()
    const [productosSeleccionados, setProductosSeleccionados] = useState([])
    const [clientes, setClientes] = useState([])
    const [productos, setProductos] = useState([])
    const [sync, setSync] = useState(1)

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
        return db
    }

    const getProductos = () => {
        let db = []
        for (let i = 0; i < 30; i++) {
            const newProduct = {
                id: faker.commerce.isbn({ variant: 10, separator: '' }),
                name: faker.commerce.product(),
                price: faker.commerce.price({ min: 20, max: 2000, dec: 2 })
            }
            db.push(newProduct)
        }
        return db
    }
    
    const getData = async () => {
        setProductos(await getProductos())
        setClientes(await getClientes())
    }

    useEffect(() => {
        getData()
    }, [])

    const selectProduct = (product) => {
        const newArray = productosSeleccionados

        const productoExistente = productosSeleccionados.find(productoDB => productoDB.id === product.id)
        
        if (!productoExistente) {
            newArray.push(product);
            setProductosSeleccionados(newArray)
            setSync(sync + 1)        
        }
    }

    return (
    <>
        <section className='contenedorFacturas'>
            <h1>Crear Factura</h1>
            <BuscadorCliente clientes={clientes} clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado}/>
            <section className='contenedorFormClientesFacutas'>
                <FormClienteFacturas clienteSeleccionado={clienteSeleccionado}/>
                <BuscadorProductos productos={productos} productosSeleccionados={productosSeleccionados} selectProduct={selectProduct}/>
                {
                    productosSeleccionados.map(producto =>
                        <>
                        <p>{producto.name}</p>
                        </>
                    )
                }
            </section>
            {/* <FacturaCard clienteSeleccionado={clienteSeleccionado}/> */}
        </section>
    </>
    )
}

export default Facturas
