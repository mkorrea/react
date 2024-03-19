//  useState

import React, { useState } from "react";

function App () {
   
   const [toDo, setToDo] = useState([
      'trabalhar',
      'estudar react'
   ])
   const [input, setInput] = useState('')

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
