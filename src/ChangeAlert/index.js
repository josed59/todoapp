import React from "react";
import {useStorageListener} from './useStorageListener';
import './ChangeAlert.css';

function Changealert({sincronize}){
    const {show,toggleShow }= useStorageListener(sincronize);
    if (show)
    {
        return (
            <div className="alert-container">
                <p>Hubo cambios</p>
                <p>Deseas recargar?</p>
                <button
                    className="alert-container--button"
                    onClick={toggleShow}
                >
                    Si!
                </button>
            </div>
            )
    }else{
           return null 
    }

    }



export {Changealert};