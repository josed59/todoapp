import React  from "react";
import './todoCounter.css'

function TodoCounter ({todosCompleted,count}){
    
    return (<h2 className="TodoCounter">Has completado {todosCompleted} de {count} tareas</h2>)
}

export { TodoCounter };