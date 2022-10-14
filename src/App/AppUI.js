import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';

function AppUI({
    todosCompleted,
    count,
    search,
    setSearch,
    todoFilter,
    completedTodo,
    deletedTodo,
    loading,
    error

}) {
    return (
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>

        <TodoContext.Consumer>

        {({
          error,
          loading,
          todoFilter,
          completedTodo,
          deletedTodo
        }) => (
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
        )}

        </TodoContext.Consumer>
       
        <CreateTodoButton />
      </React.Fragment>

    );
}

export { AppUI }