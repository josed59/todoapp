import React, { useState } from "react";
import { AppUI } from "./AppUI";

import './index.css';

/* const defautTodos = [
  {text: "Cortar cebolla", complete: true},
  {text: "Tomar curso", complete: false},
  {text: "Llorar con la llorona", complete: false},
]; */

function useLocalStorage(itemName, initialValue) {

  const [error,setError] = React.useState(false);
  const [loading,setLoading] = React.useState(true);
  const [items , setItems] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItems  = localStorage.getItem(itemName);
        let parsedItems;

        if(!localStorageItems){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItems = initialValue;
          }else{
            parsedItems = JSON.parse(localStorageItems);
          }
        setItems(parsedItems);


      }catch(error){
        setError(error);
      }finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
      
    },1000)

  },[items]);
  
  const saveItem = (newItems) => {
    try{ 
      const todosStringified = JSON.stringify(newItems);
      localStorage.setItem(itemName,todosStringified);
      setItems(newItems);
    }
    catch(e){
        setError(error);
    }
  }
   return {
    items,
    saveItem,
    loading,
    error
  };



}

function App() {
   // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
   const {
    items: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = React.useState('');
  const todosCompleted = todos.filter(todo => !!todo.complete).length;
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

   const deletedTodo = (text) => {
    const indextTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indextTodo,1)
    saveTodos(newTodos);
   };

  return (
   <AppUI 
    todosCompleted = {todosCompleted}
    count = {count}
    search ={ search }
    setSearch ={setSearch}
    todoFilter = {todoFilter}
    completedTodo={completedTodo}
    deletedTodo={deletedTodo}
    loading={loading}
    error={error}
   />
  );
}

export default App;
