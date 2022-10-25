import React  from "react";

import './TodoSearch.css';

function TodoSearch ({search , setSearch}){
    
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