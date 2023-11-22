import React from 'react'

function ProtectedRoute(props) {

    console.log(props);
    
    return (
    <>
    {
        props.element
    }
    </>
    )
}

export default ProtectedRoute
