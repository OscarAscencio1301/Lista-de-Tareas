import React from 'react'
import { TareaItem } from './TareaItem'

export const ListaTareasComp = ({tareas,borrarTarea,tareaCompletada}) => {
    return (
       
        <ol className="list-group">
                    {
                        tareas.map((tarea, ind) => 
                            <TareaItem tarea= {tarea}
                                        key={tarea.id}
                                        indice={ind}
                                        borrarTarea={borrarTarea}
                                        tareaCompletada={tareaCompletada}
                            />
                        

                    )}
                
         </ol>
        
    )
}
