import React from 'react';

const FormTarea = () => {
    return ( 
    <div className="container my-5">
        <form className="w-75">
            <div className="d-flex mt-3">
                <input type="text" placeholder="Ingrese una tarea" className="form-control"/>
                <button className="btn btn-dark text-light">Agregar</button>
            </div>
        </form>
    </div>
    );
};

export default FormTarea;