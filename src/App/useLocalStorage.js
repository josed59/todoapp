import React from "react";

function useLocalStorage(itemName, initialValue) {
   const [sincronizedItem, setSincronizedItem] = React.useState(true);
    const [error,setError] = React.useState(false);
    const [loading,setLoading] = React.useState(true);
    const [items , setItems] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItems  = localStorage.getItem(itemName);
          let parsedItems;
  
          if(!localStorageItems){
              localStorage.setItem(itemName,JSON.stringify(initialValue));
              parsedItems = initialValue;
            }else{
              parsedItems = JSON.parse(localStorageItems);
            }
          setItems(parsedItems);
          setLoading(false);
          setSincronizedItem(true);
  
        }catch(error){
          setError(error);
        }finally {
          // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
          setLoading(false);
        }
        
      },1000)
  
    },[sincronizedItem]);
    
    const saveItem = (newItems) => {
      try{ 
        const todosStringified = JSON.stringify(newItems);
        localStorage.setItem(itemName,todosStringified);
        setItems(newItems);
      }
      catch(e){
          setError(error);
      }
    }

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    };

     return {
      items,
      saveItem,
      loading,
      error,
      sincronizeItem,
    };
  
  }

  export {useLocalStorage};