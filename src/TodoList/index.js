import React  from "react";
import './TodoList.css'

function TodoList (props){
    const renderFunc = props.children || props.render;
    return (
        <section>
            {props.error && props.onError()}
            {props.loading && props.OnLoading()}
            {(!props.loading && !props.count) && props.OnEmpty() }
            {(!!props.count && !props.todoFilter.length) && props.OnEmptySearch(props.textSearched)}
            {(!props.loading && !props.error) && props.todoFilter.map(renderFunc)}
            <ul className="list">
                {props.children}    
            </ul>
        </section>
       
    )
}

export { TodoList };