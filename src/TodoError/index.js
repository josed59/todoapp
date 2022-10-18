import React from "react";
import emptyIcon from '../images/system.png';
import './TodoError.css';



function TodoError(){

    return(
        <div className="emptyTodoContainer">
            <h2>Error por favor recharga la pagina</h2>
            <figure className="imgContainer">
            <img src={emptyIcon} alt="empty list"></img>
            </figure>
        </div>
    )

}

export { TodoError  }