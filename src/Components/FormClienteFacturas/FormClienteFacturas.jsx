import React, { useEffect, useState } from 'react'
import './FormClienteFacturas.css'
import { useForm } from "react-hook-form"

function FormClienteFacturas(props) {

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

    return (
    <>
      <section className='contenedorFormClientesFacutas'>
        <div>
            <h2>Completa los datos de tu cliente:</h2>
            <button type="button" onClick={ () => { setBloqueado(!bloqueado) } }>{ bloqueado ? 'Desbloquear' : 'Bloquear'}</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputGroupFormClienteFacturas'>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="nameCliente">Nombre</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} type="text" name="name" id="nameCliente" autoComplete='off' disabled={bloqueado}
                        {...register("name", {
                            required: true
                        })}
                        />
                    {errors.name && errors.name.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="emailCliente">Correo electrónico</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} type="email" name="email" id="emailCliente" autoComplete='off' disabled={bloqueado}
                        {...register("email", {
                            required: true
                        })}
                        />
                    {errors.email && errors.email.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
            </div>
            <div className='inputFormClienteFacturas'>
                <label htmlFor="addressCliente">Dirección</label>
                <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} type="text" name="address" id="addressCliente" autoComplete='off' disabled={bloqueado}
                    {...register("address", {
                        required: true
                    })}
                    />
                {errors.address && errors.address.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
            </div>
            <div className='inputGroupFormClienteFacturas'>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="phoneCliente">Teléfono</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} type="text" name="phone" id="phoneCliente" autoComplete='off' disabled={bloqueado}
                        {...register("phone", {
                            required: true
                        })}
                        />
                    {errors.phone && errors.phone.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
                <div className='inputFormClienteFacturas'>
                    <label htmlFor="rucCliente">R.U.C.</label>
                    <input className={`form-control ${ bloqueado && 'inputDesactivadoClienteFacturas' }`} type="text" name="ruc" id="rucCliente" autoComplete='off' disabled={bloqueado}
                        {...register("ruc", {
                            required: true
                        })}
                        />
                    {errors.ruc && errors.ruc.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
                </div>
            </div>
            <div className='inputFormClienteFacturas'>
                <label htmlFor="itemsCliente">Productos</label>
                <input className="form-control" type="text" name="items" id="itemsCliente" autoComplete='off'
                    {...register("items", {
                        required: true
                    })}
                    />
                {errors.items && errors.items.type === "required" && <p className='text-danger fs-6 mt-1'>Campo requerido.</p>}
            </div>
            <div className='text-end mt-4'>
                <button type='submit' className='btn btn-primary'>Crear factura</button>
            </div>
        </form>
      </section>
    </>
    )
}

export default FormClienteFacturas
