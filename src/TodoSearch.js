import React  from "react";
import './TodoSearch.css'

function TodoSearch (props){
    return (
        <div className="TodoSearch-container">
            <input className="TodoSearch" placeholder="Buscar" />
        </div>
        
    )
}

export { TodoSearch };