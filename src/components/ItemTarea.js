import React from 'react';

const ItemTarea = (props) => {
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between">{props.nombreTarea}
            <button className="btn btn-danger" onClick={()=> props.borrarTarea(props.nombreTarea)}>Borrar</button></li>
        </div>
    );
};

export default ItemTarea;<li className="list-group-item"></li>