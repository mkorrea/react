//  useEffect

import React, { useState, useEffect } from "react";

function App () {
   
   const [toDo, setToDo] = useState([ ])
   const [input, setInput] = useState('')


   useEffect( () => {
      const toDoStorage = localStorage.getItem('toDo')
      if (toDoStorage) {
         setToDo(JSON.parse(toDoStorage))
      }
   }, [])
   // utilizando o useEffect como um componentDidMount, ou seja, quando o componente é executado, ele executa esse useEffect

   useEffect( () => {
      localStorage.setItem(`toDo`, JSON.stringify(toDo))
      // quando 'toDo' for alterado ou atualizado, useEffect vai atualizar o localStorage
   }, [toDo])
   // useEffect( () => { /* função a ser executada quando houver alteração na state */ }, [state] )




   function addTask () {
      setToDo([...toDo, input])
      setInput('')
   }

   return(
      <div>
         <ul>
            {toDo.map(task => (
               <li key={task}> {task} </li>
            ))}
         </ul>

         <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
         <button type="button" onClick={addTask}> Submit </button>
      </div>
   )
}

export default App;
