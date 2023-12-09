import React, { useEffect, useState } from 'react'
import './FormClienteFacturas.css'
import { useForm } from "react-hook-form"
import bloqueadoIcon from '../../assets/bloqueadoIcon.png'
import desbloqueadoIcon from '../../assets/desbloqueadoIcon.png'

function FormClienteFacturas(props) {

    const [bloqueadoMessage, setBloqueadoMessage] = useState(false)
    const [bloqueado, setBloqueado] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors }} = useForm()

    const clienteSeleccionado = () => {
        setBloqueado(true)
        const address = `${props.clienteSeleccionado.street}, ${props.clienteSeleccionado.city}, ${props.clienteSeleccionado.country}`
        setValue("name", props.clienteSeleccionado.name)
        setValue("email", props.clienteSeleccionado.email)
        setValue("address", address)
        setValue("phone", props.clienteSeleccionado.phoneNumber)
        setValue("ruc", props.clienteSeleccionado.ruc)
    }

    useEffect(() => {
        props.clienteSeleccionado && clienteSeleccionado()
    }, [props])

    const onSubmit = (data) => console.log(data)

    const inputBloqueado = () => {
        bloqueado && setBloqueadoMessage(true)
        return
    }

    useEffect(() => {

        !bloqueado && setBloqueadoMessage(false)

    }, [bloqueado])
    

    return (
    <>
        <div className='headerFormClienteFacturas'>
            <h2>Completa los datos de tu cliente</h2>
            <button type="button" className={`btn botonBloquearClienteFacturas ${ bloqueado ? 'btn-danger' : 'btn-primary' } `} onClick={ () => { setBloqueado(!bloqueado) } }>
                {
                    bloqueado
                    ?
                        <img src={bloqueadoIcon} alt="Inputs Bloqueados" />
                    :
                        <img src={desbloqueadoIcon} alt="Inputs Desbloqueados" />
                }
            </button>
        </div>
        { bloqueadoMessage && <p className='text-danger fs-6 text-end mt-2'>Debes desbloquear el formulario para editar.</p> }
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputGroupFormClienteFacturas'>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="nameCliente">Nombre</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} onClick={inputBloqueado} type="text" name="name" id="nameCliente" autoComplete='off' readOnly={bloqueado}
                        {...register("name", {
                            required: true
                        })}
                        />
                    {errors.name && errors.name.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="emailCliente">Correo electrónico</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} onClick={inputBloqueado} type="email" name="email" id="emailCliente" autoComplete='off' readOnly={bloqueado}
                        {...register("email", {
                            required: true
                        })}
                        />
                    {errors.email && errors.email.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
            </div>
            <div className='inputFormClienteFacturas'>
                <label htmlFor="addressCliente">Dirección</label>
                <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} onClick={inputBloqueado} type="text" name="address" id="addressCliente" autoComplete='off' readOnly={bloqueado}
                    {...register("address", {
                        required: true
                    })}
                    />
                {errors.address && errors.address.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
            </div>
            <div className='inputGroupFormClienteFacturas'>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="phoneCliente">Teléfono</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} onClick={inputBloqueado} type="text" name="phone" id="phoneCliente" autoComplete='off' readOnly={bloqueado}
                        {...register("phone", {
                            required: true
                        })}
                        />
                    {errors.phone && errors.phone.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="rucCliente">R.U.C.</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} onClick={inputBloqueado} type="text" name="ruc" id="rucCliente" autoComplete='off' readOnly={bloqueado}
                        {...register("ruc", {
                            required: true
                        })}
                        />
                    {errors.ruc && errors.ruc.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
            </div>
            <div className='text-end mt-4'>
                <button type='submit' className='btn btn-primary'>Crear factura</button>
            </div>
        </form>
    </>
    )
}

export default FormClienteFacturas
