import React from 'react'
import './home.css'
import GrillaProductos from '../../Components/GrillaProductos/GrillaProductos'

function Home() {

    return (
    <>
        <h1 className='tituloProductos'>PRODUCTOS</h1>
        <GrillaProductos />
    </>
    )
}

export default Home
