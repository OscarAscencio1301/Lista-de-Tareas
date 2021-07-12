import React, { useEffect, useReducer } from 'react'
import { reducer } from '../hooks/reducer'
import { AgregarTarea } from './AgregarTarea'
import { ListaTareasComp } from './ListaTareasComp'

const init = () => {
return JSON.parse(localStorage.getItem("tareas")) || []
}



export const ListaTareas = () => {

    const [tareas, dispatch] = useReducer(reducer, [], init)
    
    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas) )
    }, [tareas])
   
    
 
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

     const controlarNuevaTarea = (nuevaTarea) => {
      
        dispatch({
            type: 'agregar',
            payload: nuevaTarea
        })
   
       }

     
    return (
        <div>
            <h1 className="text-center">App Lista Tareas</h1>
            <hr />
            <div className="flex">
            <div className="item1">
            <h4>Tareas Totales: ({tareas.length})</h4>
            <hr />

            <ListaTareasComp 
                    tareas={tareas} 
                    tareaCompletada={tareaCompletada}
                    borrarTarea={borrarTarea}
            />
            
            </div>
            <div className="item2">
            <AgregarTarea 
                    controlarNuevaTarea={controlarNuevaTarea}
            />
            </div>
        </div>
        </div>
    )
    
}
