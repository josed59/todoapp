import React from "react";
import {useLocalStorage} from './useLocalStorage';


function useTodos(){
 // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
 const {
    items: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = React.useState('');
  const todosCompleted = todos.filter(todo => !!todo.complete).length;
  const [modal,setModal] = React.useState(false);
  const count = todos.length;
  let todoFilter = [];
  
  if (!search.length >=1){
    todoFilter = todos;
   }else{
     todoFilter = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const  searchText= search.toLowerCase();
      return todoText.includes(searchText);
    });
   }
   const completedTodo = (text) => {
    const indextTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
   
    newTodos[indextTodo].complete = true;
   
    saveTodos(newTodos);
   };

   const addTodo = (text) => {
  
    const newTodos = [...todos];
   
    newTodos.push({
       complete: false,
       text
    })
   
    saveTodos(newTodos);
   };

   const deletedTodo = (text) => {
    const indextTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indextTodo,1)
    saveTodos(newTodos);
   };

   return(
    {
        todosCompleted ,
        count ,
        search ,
        setSearch ,
        todoFilter ,
        completedTodo,
        deletedTodo,
        loading,
        error,
        modal,
        setModal,
        addTodo
    }

   );
    

}

export {useTodos};