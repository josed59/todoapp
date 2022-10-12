import React  from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props){
    const onClick = () => {
        alert('Se debe agregar una nueva tarea')
    };

    return (
        <button 
        onClick={onClick}
        className="CreateTodoButton"
        >
            +
        </button>
    )
}

export { CreateTodoButton };