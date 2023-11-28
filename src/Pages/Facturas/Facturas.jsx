import React, { useEffect, useState } from 'react'
import './facturas.css'
import searchIcon from '../../assets/searchIcon.png'
import { useForm } from "react-hook-form"

function Facturas() {

    const [clientes, setClientes] = useState([])
    const [clientesImprimir, setClientesImprimir] = useState([])
    const { register, handleSubmit, formState: { errors }} = useForm()

    const getClientes = () => {
        const db = [
            {
                name: 'Mateo'
            },
            {
                name: 'Pablo'
            },
            {
                name: 'Javier'
            },
            {
                name: 'Paula'
            },
            {
                name: 'Sofia'
            },
            {
                name: 'Martina'
            },
            {
                name: 'Wanda'
            },
            {
                name: 'Agostina'
            },
            {
                name: 'Santiago'
            },
        ]
        setClientes(db)
        setClientesImprimir(db)
    }

    useEffect(() => {
        getClientes()
    }, [])

    const filtrarClientes = (data) => {
        const clientesFiltrados = clientes.filter(cliente => cliente.name.toLowerCase().includes(data.search.toLowerCase()))
        setClientesImprimir(clientesFiltrados)
    }

    const filtrarEnVivo = (event) => {
        const clientesFiltrados = clientes.filter(cliente => cliente.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setClientesImprimir(clientesFiltrados)
    }

    const limpiarFiltrado = () => {
        setClientesImprimir(clientes)
    }
    

    return (
    <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Añadir
        </button>
        {/* <div className='imagenPrueba'>
            <img src={searchIcon} alt="Buscar Clientes" />
        </div> */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl  modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body modalClientes">
                        <h1>Buscar un cliente</h1>
                        <div className='contenidoModalClientes'>
                            <div className='buscadorModalClientes'>
                                <form  onSubmit={handleSubmit(filtrarClientes)}>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("search",{
                                                required: true
                                            })}
                                            onChange={filtrarEnVivo}
                                            placeholder='Buscar...' className='form-control' name="search" id="busquedaModalClientes" />
                                        <button type="submit">
                                            <img src={searchIcon} alt="Buscar Clientes" />
                                        </button>
                                        {errors.search && <span>Campo requerido</span>}
                                    </div>
                                </form>
                                <button type="button" onClick={limpiarFiltrado}>Limpiar</button>
                            </div>
                            <div className='grillaClientesModal'>
                                {
                                    clientesImprimir.map(cliente =>
                                        <div className='cardClientesModal' key={cliente.name}>
                                            <h2>{cliente.name}</h2>
                                            <button type="button">Añadir</button>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Facturas
