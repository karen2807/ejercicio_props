import React from 'react';
import { Componentes } from '../models/componentea';
import Componenteb from '../pure/componenteb';

const DatosN = () => {

    const changeState = (id) =>{

        {/**TODO: CAMBIO DESDE EL HIJO Y ESTO ES EL PADRES */}
        console.log('TODO: Cambiar estado de una tarea');
    }

    const defaultComp = new Componentes ('Juanito', 'Perez', 'jperez@gmail.com', false)

    return (
        <div>
            <div>
               <h1>Datos: </h1> 
            </div>
            

            <Componenteb componentes={defaultComp}></Componenteb>
        </div>
    );
};



export default DatosN;

