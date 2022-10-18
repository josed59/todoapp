import React from "react";
import emptyIcon from '../images/checklist.png';
import './TodoEmpty.css';



function TodoEmpty(){

    return(
        <div className="emptyTodoContainer">
            <h2>No hay Todos</h2>
            <figure className="imgContainer">
            <img src={emptyIcon} alt="empty list"></img>
            </figure>
        </div>
    )

}

export { TodoEmpty  }