import React, { useEffect, useReducer } from 'react'
import { reducer } from '../hooks/reducer'
import { useForm } from '../hooks/useForm'

const init = () => {
return JSON.parse(localStorage.getItem("tareas")) || []
}



export const ListaTareas = () => {

    const [tareas, dispatch] = useReducer(reducer, [], init)
    const [{descripcion}, cambioValores, reset] = useForm({
        descripcion: ''
    })
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas) )
    }, [tareas])
   
    
    const agregarTarea = (e) =>{
        e.preventDefault();
        const nuevaTarea = {
            id: Date.now(),
            tarea: descripcion,
            done: false
        }

        const action = {
            type: 'agregar',
            payload: nuevaTarea
        }

       if(nuevaTarea.tarea.trim().length >= 3){
        dispatch(action)
        reset();
       }
       
    }
     const borrarTarea = (tareaId) => {
         const action = {
             type: 'borrar',
             payload: tareaId
         }
         dispatch(action)
     }
     const tareaCompletada = (tareaId) => {
         const action = {
             type: 'completo',
             payload: tareaId
         }
         dispatch(action)
     }

    return (
        <div>
            <h1 className="text-center">App Lista Tareas</h1>
            <hr />
            <div className="flex">
            <div className="item1">
                <h4>Tareas Totales: ({tareas.length})</h4>
                <hr />
                <ol className="list-group">
                    
                    {
                        tareas.map((tarea, ind) => <li className="list-group-item"
                        key={tarea.id}>
                         <p 
                            onClick={() => tareaCompletada(tarea.id)} 
                            className={`${tarea.done === true ? 'completada' : null}`}>
                            {ind + 1}. {tarea.tarea}</p>
                        <button 
                            className="btn btn-danger"
                            onClick={() => borrarTarea(tarea.id)}
                            >Borrar</button>
                        </li>)

                    }
                    
                </ol>
            </div>
            <div className="item2">
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
            </div>
        </div>
        </div>
    )
}
