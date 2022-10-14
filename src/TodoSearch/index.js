import React  from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch (){
    const {search , setSearch} = React.useContext(TodoContext)
    
    const onChangeValue = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    };
    return( 
        <div className="TodoSearch-container">
            <input 
                className="TodoSearch" 
                placeholder="Buscar" 
                value={search}
                onChange={onChangeValue}
                />
        </div>
        )
        
    
}

export { TodoSearch };