import React, { useState, useEffect, useMemo } from "react";

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


   const contagem = useMemo( () => toDo.length,  [ toDo ] )
   // O useMemo é um hook do React que serve para memorizar o resultado de uma função computacionalmente intensiva. Em outras palavras, ele armazena em cache o resultado de uma função e o retorna sempre que as dependências especificadas mudam.
   // só vai executar essa const quando a state [ toDo ] sofrer alteração


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
               
         <br/>
         <strong>Você tem {contagem} tarefas adicionadas</strong>
      </div>
   )
}

export default App;
