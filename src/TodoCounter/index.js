import React  from "react";
import './todoCounter.css'

function TodoCounter ({todosCompleted,count,loading}){
    
    return (<h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>Has completado {todosCompleted} de {count} tareas</h2>)
}

export { TodoCounter };