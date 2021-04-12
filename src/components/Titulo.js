import React, { Component } from 'react';

class Titulo extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center mt-5">🗒</h1>
                <h1 className="text-center mb-4 -text-dark display-4">Lista de tareas</h1>
            </div>
        );
    }
}

export default Titulo;