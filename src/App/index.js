import React, { useState } from "react";
import {TodoProvider} from '../TodoContext';
import { AppUI } from "./AppUI";

import './index.css';

/* const defautTodos = [
  {text: "Cortar cebolla", complete: true},
  {text: "Tomar curso", complete: false},
  {text: "Llorar con la llorona", complete: false},
]; */



function App() {
  

  return (
    <TodoProvider>
    <AppUI />
  </TodoProvider>
  );
}

export default App;
