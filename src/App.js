import React from "react";
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
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
  let todoFilter = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const  searchText= search.toLowerCase();
    return todoText.includes(searchText);
  });

  return (
    <React.Fragment>
      <TodoCounter 
        todosCompleted = {todosCompleted}
        count = {count}
      />
      <TodoSearch 
        search ={ search }
        setSearch ={setSearch}
      />
      
      <TodoList>
          { todoFilter.map( todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.complete}
            />
          ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
