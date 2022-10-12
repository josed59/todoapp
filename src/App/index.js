import React from "react";
import { AppUI } from "./AppUI";

import './index.css';

const defautTodos = [
  {text: "Cortar cebolla", complete: true},
  {text: "Tomar curso", complete: false},
  {text: "Llorar con la llorona", complete: false},
];

function App() {
  const [search , setSearch] = React.useState('');
  const [todos,setTodos] = React.useState(defautTodos);
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
   
    setTodos(newTodos);
   };

   const deletedTodo = (text) => {
    const indextTodo = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indextTodo,1)
    setTodos(newTodos);
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
   />
  );
}

export default App;
