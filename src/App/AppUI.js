import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { Form } from '../TodoForm';

function AppUI() {

  const {
    error,
    loading,
    todoFilter,
    completedTodo,
    deletedTodo,
    modal,
    setModal
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
          {!!modal && <Modal>
               <Form />
            </Modal>
            }
       
        <CreateTodoButton 
          setOpenModal={setModal}
          modal={modal}
        />
      </React.Fragment>

    );
}

export { AppUI }