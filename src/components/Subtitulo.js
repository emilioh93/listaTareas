import React from 'react';

const Subtitulo = (props) => {
    return ( 
        <div>
            <h3 className="text-dark text-center">Tareas de la comisión {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;