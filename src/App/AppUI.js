import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';

function AppUI() {

  const {
    error,
    loading,
    todoFilter,
    completedTodo,
    deletedTodo
  } = React.useContext(TodoContext);
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
            <TodoList>
             {error && <p>Desespérate, hubo un error...</p>}
             {loading && <p>Estamos cargando, no desesperes...</p>}
             {(!loading && !todoFilter.length) && <p>¡Crea tu primer TODO!</p>}
             { todoFilter.map( todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.complete}
                onCompleted = {() => completedTodo(todo.text)}
                onDeleted = {() => deletedTodo(todo.text)}
              />
            ))}
        </TodoList>
       
       
        <CreateTodoButton />
      </React.Fragment>

    );
}

export { AppUI }