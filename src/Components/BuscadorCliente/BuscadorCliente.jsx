import React, { useEffect, useState } from 'react'
import searchIcon from '../../assets/searchIcon.png'
import { useForm } from "react-hook-form"
import './buscadorCliente.css'

function BuscadorCliente(props) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [clientesImprimir, setClientesImprimir] = useState([])

    useEffect(() => {
        setClientesImprimir(props.clientes)
    }, [props.clientes])

    const filtrarClientes = (data) => {
        const clientesFiltrados = props.clientes.filter(cliente => cliente.name.toLowerCase().includes(data.search.toLowerCase()))
        setClientesImprimir(clientesFiltrados)
    }

    const limpiarFiltrado = () => {
        reset()
        setClientesImprimir(props.clientes)
    }

    return (
    <>
        <div className='w-100 text-end'>
            <button type="button" className="btn btn-primary btnBuscarCliente" data-bs-toggle="modal" data-bs-target="#modalAñadirCliente">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <span>Buscar cliente</span>
            </button>
        </div>

        <div className="modal fade" id="modalAñadirCliente" tabIndex="-1" aria-labelledby="modalAñadirClienteLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl  modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body modalClientes">
                        <h1>Buscar un cliente</h1>
                        <button type="button" className="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className='contenidoModalClientes'>
                            <div className='buscadorModalClientes'>
                                <form  onSubmit={handleSubmit(filtrarClientes)}>
                                    <div>
                                        <input
                                            type="text"
                                            {...register("search",{
                                                required: true
                                            })}
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
                                            <button type="button"
                                                data-bs-dismiss="modal"
                                                disabled={props.clienteSeleccionado === cliente}
                                                onClick={ () => { props.setClienteSeleccionado(cliente) } }>
                                                {
                                                    props.clienteSeleccionado === cliente ? 
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                                            <path d="M9 12l2 2l4 -4" />
                                                        </svg>
                                                    </>
                                                    : 'Añadir'
                                                }
                                            </button>
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

export default BuscadorCliente
