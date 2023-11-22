import React, { useState } from 'react'
import './createUser.css'
import { useForm } from "react-hook-form";

function CreateUser() {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [enviado, setEnviado] = useState(false)

    const onSubmit = async (data) => {
        console.log(data);
        setEnviado(true)
        await reset()
        window.location.replace('/home')
    }

    return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='registerForm'>
        <h1>Crea tu usuario</h1>
        <div className='registerField'>
            <label htmlFor='usernameRegister'>Username</label>
            <input type="text" name="username" id="usernameRegister"
            {...register("username", {
                required: true,
                minLength: 6,
                maxLength: 25,
                pattern: /^[a-zA-Z\-]+$/,
            })}
            />
            {errors.username && errors.username.type === "required" && <p className='formErrorMessage'>Campo requerido.</p>}
            {errors.username && errors.username.type === "minLength" && <p className='formErrorMessage'>Debe tener al menos 6 caracteres</p>}
            {errors.username && errors.username.type === "maxLength" && <p className='formErrorMessage'>Debe tener menos de 26 caracteres</p>}
            {errors.username && errors.username.type === "pattern" && <p className='formErrorMessage'>Campo invalido</p>}
        </div>
        <div className='registerField'>
            <label htmlFor='emailRegister'>Email</label>
            <input type="email" name="email" id="emailRegister"
            {...register("email", {
                required: true
            })}
            />
            {errors.email && errors.email.type === "required" && <p className='formErrorMessage'>Campo requerido.</p>}
        </div>
        <div className='registerField'>
            <label htmlFor='passwordRegister'>Password</label>
            <input type="password" name="password" id="passwordRegister"
            {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 25
            })}
            />
            {errors.password && errors.password.type === "required" && <p className='formErrorMessage'>Campo requerido.</p>}
            {errors.password && errors.password.type === "minLength" && <p className='formErrorMessage'>Debe tener al menos 6 caracteres</p>}
            {errors.password && errors.password.type === "maxLength" && <p className='formErrorMessage'>Debe tener menos de 26 caracteres</p>}
        </div>
        <div className='submitButton'>
            <button type='submit'>Enviar</button>
        </div>
    </form>
    {
        enviado &&
        <div className='mensajeExito'>
            <h2>¡Usuario creado con éxito!</h2>
        </div>
    }
    </>
    )
}

export default CreateUser
