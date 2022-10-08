import React  from "react";
import './TodoItem.css'

function TodoItem (props){
    return (
        <li className="list-Container">
            <span className={`list-icon-check ${props.completed && 'completed'}`}></span>
            <p className={`list-p ${props.completed && 'dash'}`}>{props.text}</p>
            <span className="list-icon-delete"></span>
        </li>
    )
}

export { TodoItem };