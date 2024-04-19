import { useState } from 'react'
import { db } from './firebaseConnections'
import { doc, setDoc } from 'firebase/firestore'
import './app.css'

function App() {
   const [ nome, setNome ] = useState('')
   const [ idade, setIdade ] = useState('')
   
   async function handleAdd() {
      await setDoc(doc( db, 'users', '3' ), {
         nome: nome,
         idade: idade,
      })
      .then(()=>{
         console.log("Dados registrados")
      })
      .catch((erro)=>{
         console.log("Erros nos dados: " + erro)
      })
   }

  return (
    <div>
           <h1> Cadastro com banco de dados </h1>
      

      <div className='container'>
         <label>Nome:</label>
         <input type='text' value={nome} onChange={ (e)=>setNome(e.target.value)}/>

         <label>Idade</label>
         <input type='number' value={idade} onChange={(e)=>setIdade(e.target.value)}/>

         <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
