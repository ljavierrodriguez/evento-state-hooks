import React, { useState } from 'react';
import Nombre from './nombre';

const App = (props) => {
    const [nombre, setNombre] = useState(null);
    const [edad, setEdad] = useState(0);


    let imprimirNombre = null;
    if(nombre != null){
        imprimirNombre = <p>Nombre: {nombre}</p>;
    }else{
        imprimirNombre =  <p>Asigne un nombre</p>;
    }


    /* if (a > b){

    }else if (a < b) {

    }else if (a > c) {

    }else{

    } */

    //a > b ? true : a < b ? true : a > c ? true : false;

    let genero;
    console.log(genero);

    return (
        <>
            <h1>Hola desde React</h1>
            <p>(condicion ? true : condicion ? true : condicion ? true : false )</p>

            <Nombre nombre={nombre} />

            {
                // null y undefined
                !!nombre && (
                    <p>Nombre: {nombre}</p>
                )
            }

            {
                imprimirNombre
            }
            


            <input type="text" onKeyUp={(evento) => {
                setNombre(evento.target.value);
            }} /> <br />

            <button onClick={() => {
                setNombre("Luis");
                setEdad(28);
            }}>Click</button>
        </>
    )
}

export default App;