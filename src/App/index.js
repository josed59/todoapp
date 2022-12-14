import React, { useState } from "react";
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
import {TodoHearder} from '../TodoHeader';
import { useTodos } from './useTodos';
import { Changealert } from "../ChangeAlert";


import './index.css';

/* const defautTodos = [
  {text: "Cortar cebolla", complete: true},
  {text: "Tomar curso", complete: false},
  {text: "Llorar con la llorona", complete: false},
]; */



function App() {
  const {
    error,
    loading,
    todoFilter,
    completedTodo,
    deletedTodo,
    modal,
    setModal,
    todosCompleted,
    count,
    search , 
    setSearch,
    addTodo,
    sincronizeTodos
  } = useTodos();
    return (
        <React.Fragment>
          <TodoHearder
            loading={loading}
          >
            <TodoCounter
              todosCompleted = {todosCompleted}
              count= {count}
            />
            <TodoSearch
              search  = {search}
              setSearch = {setSearch}
            />
          </TodoHearder>

          <TodoList 
            error = {error}
            loading = {loading}
            todoFilter = {todoFilter}
            count = {count}
            textSearched = {search}
            OnError = {()=> <TodoError />}
            OnLoading = {()=> 
              new Array(3).fill().map((item, index)=>(
                <MyLoader key={index} viewBox="0 0 400 160" /> ))
            }
            OnEmpty = {()=> <TodoEmpty />}
            OnEmptySearch = {(textSearched) => <p> No existe resultados para {textSearched}</p>}
            render = {
              todo =>(
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.complete}
                  onCompleted = {() => completedTodo(todo.text)}
                  onDeleted = {() => deletedTodo(todo.text)}
                />
              )
            }
          >
            {/* {
              todo =>(
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.complete}
                  onCompleted = {() => completedTodo(todo.text)}
                  onDeleted = {() => deletedTodo(todo.text)}
                />
              )
            } */}
          </TodoList>
          <Changealert 
            sincronize = {sincronizeTodos}
          />
          {!!modal && 
            <Modal>
               <Form 
               addTodo = {addTodo}
               setModal = {setModal}
               />
            </Modal>
            }
       
        <CreateTodoButton 
          setOpenModal={setModal}
          modal={modal}
        />
      </React.Fragment>

    );
}

export default App;
