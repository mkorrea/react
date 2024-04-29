import { useState } from 'react'
import { db } from './firebaseConnections'
import { doc, setDoc, collection, addDoc, getDoc, getDocs } from 'firebase/firestore'
//                         getDocs, para resgatar todos os docs do banco de dados
import './app.css'

function App() {
   const [ nome, setNome ] = useState('')
   const [ idade, setIdade ] = useState('')

   const [ users, setUsers ] = useState([])
   
   async function handleAdd() {
      await addDoc(collection(db, "users"), {
         nome: nome,
         idade: idade,
      })
      .then(()=>{
         alert("Dados registrados")
         setNome('')
         setIdade('')
      })
      .catch((erro)=>{
         alert("Erros nos dados: " + erro)
      })
      }
   




   // Buscar por todos os docs do banco de dados:
   async function resgatarUser() {
      await getDocs(collection(db, 'users'))
      .then( (snapshot)=>{
         let lista = []

         snapshot.forEach( (doc)=>{
            lista.push({
               id: doc.id,
               nome: doc.data().nome,
               idade: doc.data().idade
            })
         })
         setUsers(lista)
      })
      .catch( (error)=>{
         alert("deu erro ai hein " + error)
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
         <button onClick={resgatarUser}>Resgatar dado</button>
      </div>

      <ul>
         {users.map( (user)=>{
            return(
            <li key={user.id}>
               <span> nome: {user.nome} </span> <br/>
               <span> idade: {user.idade} </span> <br/><br/>
            </li> 

            )

         })}
      </ul>

    </div>
  );
}

export default App;
