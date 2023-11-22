import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Admin() {

    const [user, setUser] = useState(true)
    const token = localStorage.getItem('token')

    const auth = async () => {

        if (!token) {
            setUser(false)
            return
        }

        const response = true
        if (response) {
            setUser(true)
        } else {
            setUser(false)
            localStorage.removeItem('token')
        }
    }

    useEffect(() => {
        auth()
    }, [])
  
    return (
    user &&
    <>
        <h1>ADMIN</h1>  
        <h2>Esta es la página de administración</h2>
    </>
    )
}

export default Admin
