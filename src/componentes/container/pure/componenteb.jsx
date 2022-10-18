import React from 'react';
import PropTypes from 'prop-types';
import { Componentes } from '../models/componentea';

const Componenteb = ({componentes}) => {
    return (
        <div>
            <h2>Nombre: { componentes.nombre }</h2>
            <h2>Apellido: { componentes.apellido }</h2>
            <h2>Email: { componentes.email }</h2>

            <h3>Estado: { componentes.estado ? 'Contacto en Linea':'Contacto No Disponible' } </h3>
        </div>
    );
};

Componenteb.propTypes = {

  componentes: PropTypes.instanceOf(Componentes),

};

export default Componenteb;
