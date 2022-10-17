import React from "react";
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { Form } from '../TodoForm';
import {MyLoader} from '../TodoLoading';
import {TodoEmpty} from '../TodoEmpty';
import {TodoError} from '../TodoError';


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
             {error && <TodoError />}
             {loading && 
             new Array(3).fill().map((item, index)=>(
              <MyLoader key={index} /> ))
             }
             {(!loading && !todoFilter.length) && <TodoEmpty />}
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