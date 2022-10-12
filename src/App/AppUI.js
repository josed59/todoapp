import React from "react";
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
    deletedTodo

}) {
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