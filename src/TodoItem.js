import React  from "react";
import './TodoItem.css'

function TodoItem (props){
    const completed = (props) => {
        alert(`Has copletado la tarea ${props.text}`)
    };

    const detele = (props) => {
        alert(`Has eliminado la tarea ${props.text}`)
    };
    return (
        <li className="list-Container">
            <span 
                className={`list-icon-check ${props.completed && 'completed'}`}
                onClick={()=>completed(props)}
            >
            </span>
            <p className={`list-p ${props.completed && 'dash'}`}>{props.text}</p>
            <span 
                className="list-icon-delete"
                onClick={()=>detele(props)}
            >
            </span>
        </li>
    )
}

export { TodoItem };