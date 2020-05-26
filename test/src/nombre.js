import React from 'react';

const Nombre = props => {
    return (
        <>
            {
                props.nombre != null ?
                    (
                        <p>Nombre: {props.nombre}</p>
                    ) : (
                        <p>Asigne un nombre</p>
                    )
            }

        </>
    )
}


export default Nombre;