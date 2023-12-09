import React, { useEffect, useState } from 'react'
import searchIcon from '../../assets/searchIcon.png'
import { useForm } from "react-hook-form"
import './buscadorProductos.css'

function BuscadorProductos(props) {

    const { register, handleSubmit, reset, formState: { errors }} = useForm()
    const [productosImprimir, setProductosImprimir] = useState([])

    useEffect(() => {
        setProductosImprimir(props.productos)
    }, [props.productos])

    const filtrarProductos = (data) => {
        const productosFiltrados = props.productos.filter(producto => producto.name.toLowerCase().includes(data.search.toLowerCase()))
        setProductosImprimir(productosFiltrados)
    }

    const limpiarFiltrado = () => {
        reset()
        setProductosImprimir(props.productos)
    }

    return (
    <>
        <div className='w-100 d-flex justify-content-between mt-5'>
            <h2>Agregar productos</h2>
            <button type="button" className="btn btn-primary btnBuscarCliente" data-bs-toggle="modal" data-bs-target="#modalAñadirProducto">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
                <span>Buscar producto</span>
            </button>
        </div>



        
        <div className="modal fade" id="modalAñadirProducto" tabIndex="-1" aria-labelledby="modalAñadirProductoLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl  modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-body modalClientes">
                        <h1>Buscar un producto</h1>
                        <button type="button" className="btn-close botonCerrarModal" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className='contenidoModalClientes'>
                            <div className='buscadorModalClientes'>
                                <form  onSubmit={handleSubmit(filtrarProductos)}>
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
                                    productosImprimir.map(product =>
                                        <div className='cardClientesModal' key={product.id}>
                                            <div>
                                                <h2>{product.name}</h2>
                                                <h3>{product.id} - ${product.price}</h3>
                                            </div>
                                            <button type="button"
                                                data-bs-dismiss="modal"
                                                disabled={props.productosSeleccionados.find(productoExistente => productoExistente.id === product.id )}
                                                onClick={ () => { props.selectProduct(product) } }>
                                                {
                                                    props.productosSeleccionados.find(productoExistente => productoExistente.id === product.id ) ? 
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

export default BuscadorProductos
