import React  from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props){
    const onClick = () => {
        if (!props.modal){
            props.setOpenModal(true);
        }else{
            props.setOpenModal(false);
        }
        
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