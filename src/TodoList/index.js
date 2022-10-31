import React  from "react";
import './TodoList.css'

function TodoList (props){
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.OnLoading()}
            {(!props.loading && !props.todoFilter.length) && props.OnEmpty() }
            {props.todoFilter.map(props.render)}
            <ul className="list">
                {props.children}    
            </ul>
        </section>
       
    )
}

export { TodoList };