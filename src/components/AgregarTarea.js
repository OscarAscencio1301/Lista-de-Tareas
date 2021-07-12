import React from 'react'
import { useForm } from '../hooks/useForm'

export const AgregarTarea = ({controlarNuevaTarea}) => {
    const [{descripcion}, cambioValores, reset] = useForm({
        descripcion: ''
    })
    const agregarTarea = (e) =>{
        e.preventDefault();
        if(descripcion.trim().length <= 2){
            return null;
        }

        const nuevaTarea = {
            id: Date.now(),
            tarea: descripcion,
            done: false
        }

       controlarNuevaTarea(nuevaTarea)
       reset();

       
    }
    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr />
                <form onSubmit={agregarTarea}>
                    <input 
                        type="text"
                        name="descripcion"
                        value={descripcion}
                        onChange={cambioValores}
                    />
                    <button 
                        type="submit"
                        className="d-block w-100 btn btn-primary my-3"
                    >Agregar</button>
                </form> 
        </>
    )
}
