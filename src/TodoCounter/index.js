import React  from "react";
import { TodoContext } from "../TodoContext";
import './todoCounter.css'

function TodoCounter (){
    const {todosCompleted,count} = React.useContext(TodoContext);
    return (<h2 className="TodoCounter">Has completado {todosCompleted} de {count} tareas</h2>)
}

export { TodoCounter };