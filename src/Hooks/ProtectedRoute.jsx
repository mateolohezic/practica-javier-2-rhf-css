import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute( props ) {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('token')

    const getUser = async () => {
        // const response = axios.post('https://api.twitter.com/',{
        //     token
        // })
        console.log('getUser');
        const response = {
            status: 200,
            data: {
                username: 'Mateo'
            }
        }
        if (response.status === 200) {
            setUser(response.data)
        }
        setLoading(false)
    }

    useEffect(() => {
        getUser()
    }, [])
    

    return (
        <>
        {
            user && !loading && <props.Component/>
        }
        {
            !user && !loading && <Navigate to="/login"/>
        }
        {
            loading && <h1>CARGANDO</h1>
        }
        </>
    )
}

export default ProtectedRoute
