import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Prueba() {

    // isAddMode = true | false
    const { idCliente } = useParams()

    const isAddMode = !idCliente

    if (isAddMode) {
        console.log('add')
    } else {
        console.log('edit');
    }

    // Ejemplo 1, me ahorro el isAddMode
    if (idCliente) {
        console.log('edit')
    } else {
        console.log('add');
    }

    //Ejemplo 2
    const [mode, setMode] = useState()

    if (idCliente) {
        setMode('edit')
    } else {
        setMode('add');
    }

    return (
    <>
      { !mode && <><h1>Cargando...</h1></>}
      { mode && mode === 'edit' && <></>}
      { mode && mode === 'add' && <></>}
    </>
    )
}

export default Prueba
