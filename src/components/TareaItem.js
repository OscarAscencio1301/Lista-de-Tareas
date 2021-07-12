import React from 'react'

export const TareaItem = ({tarea,indice,borrarTarea,tareaCompletada}) => {
    return (
        <li className="list-group-item"
        key={tarea.id}>
         <p 
            onClick={() => tareaCompletada(tarea.id)} 
            className={`${tarea.done === true ? 'completada' : null}`}>
            {indice + 1}. {tarea.tarea}</p>
            <button 
            className="btn btn-danger"
            onClick={() => borrarTarea(tarea.id)}
            >Borrar</button>
        </li>
        
        )
    
}
