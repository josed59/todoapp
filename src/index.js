import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './index.css'; */
/* import App from './App/index'; */

function App (props){
  return <h1>{props.saludo}, {props.nombre}!</h1>;
}

function withSaludo(WrappedComponet){
  return function wrappedComponetwithSaludo(saludo){
    return function componenteFinal(props){
      return(
        <React.Fragment>
          <WrappedComponet {...props} saludo={saludo}/>
          <h2>Esto es un HOC de prueba</h2>
        </React.Fragment>
      )
    }
  }
}

const AppwithSaludo = withSaludo(App)('hola');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppwithSaludo  nombre={'jose'}/>
  </React.StrictMode>
);


