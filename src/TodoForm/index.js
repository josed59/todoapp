import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoFrom.css'




function Form() {
    
    const [newValue, setNewValue] = React.useState('');
    const {addTodo,setModal} = React.useContext(TodoContext);

   const OnSubmit = (event) =>{
    event.preventDefault();
    if(!!newValue){
        addTodo(newValue);
        setNewValue('');
        setModal(false);
    }
        
    }
    
    const onCancel = () =>{
        setModal(false);
    }
 
    
    const onChange = (e) =>{
        setNewValue(e.target.value);
    }


    return(
        <form onSubmit={OnSubmit}>
            <label>Agrega una tarea al TODO List</label>
            <textarea 
                placeholder="Nueva tarea"
                onChange={onChange}
                value={newValue}
            ></textarea>
            <div className="todoForm-buttonContainer">
                <button 
                    className="TodoForm-Button TodoForm-Button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className={`TodoForm-Button TodoForm-Button--add ${!newValue && 'transparent'} ` } 
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
       

    )
};

export {Form};