import React, {useState, useEffect} from 'react';
import Lista from './Lista';

const FormTarea = () => {
    // Aquí escribo código de JS
    let tareasLS = JSON.parse(localStorage.getItem('listaTareas'));
// Creo 2 states
const [tarea, setTarea] = useState("");
const [listaTareas, setListaTareas] = useState(tareasLS);

// Uso useEffect en el montaje y en cualquier state
useEffect(()=>{
    if (tareasLS) {
        console.log("aquí quiero actualizar LS");
        localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
    } else{
        console.log("el LS no existe la key listaTareas");
        localStorage.setItem('listaTareas', JSON.stringify([]));
    }
});

// Uso useEffect sólo en el montaje
// useEffect(()=>{
//     console.log("Ejecutando montaje");
// },[]);

// Uso useEffect en el montaje y en determinado state
// useEffect(()=>{
//     console.log("Ejecutando el ciclo de vida de un componente en el montaje y cambio de listaTareas");
// },[listaTareas]);

// const guardarTarea = (e)=>{
//     console.log(e.target.value);
//     // Guardar dentro del setTarea
//     setTarea(e.target.value);
// }

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Desde la funcion prevent default');
    // Agregar tarea en el state listaTareas
    // ...listaTareas significa que esa variable es un arreglo y los tres puntos es un operador spread. Lo que hace el spread es que escribe cada elemento del arreglo por separado. Desarma el arreglo y lo escribe con todos sus elementos.
    // Luego se agrega "," y la variable con el nuevo valor a agregar. Ej: let var = [...listaTareas, nuevoValor];
    setListaTareas([...listaTareas, tarea]);
    // Limpiar el valor de state tarea
    setTarea("");
}

const borrarTarea = (nombre)=>{
    // Función para eliminar un item del state listaTareas
    let arregloFiltrado = listaTareas.filter((elemento)=> elemento !== nombre);
    setListaTareas(arregloFiltrado);
}

    return ( 
    <div className="container my-5">
        {/* Agregar aquí HTML */}
        <form onSubmit = {handleSubmit}>
            <div className="d-flex mt-3">
                <input type="text"
                 placeholder="Ingrese una tarea"
                 className="form-control" 
                 onChange={(e)=> setTarea(e.target.value)}
                 value={tarea}
                 />
                <button type="submit" className="btn btn-dark text-light">Agregar</button>
            </div>
        </form>
        <article className="my-5">
        <Lista arregloTareas={listaTareas} borrarTarea={borrarTarea}></Lista>
        </article>
    </div>
    );
};

export default FormTarea;