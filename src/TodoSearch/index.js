import React  from "react";

import './TodoSearch.css';

function TodoSearch ({search , setSearch, loading}){
    
    const onChangeValue = (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    };
    return( 
        <div className='TodoSearch-container'>
            <input 
                className="TodoSearch" 
                placeholder="Buscar" 
                value={search}
                onChange={onChangeValue}
                disabled={loading}
                />
        </div>
        )
        
    
}

export { TodoSearch };