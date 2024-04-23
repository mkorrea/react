import { useState } from 'react'
import { db } from './firebaseConnections'
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'
import './app.css'

function App() {
   const [ nome, setNome ] = useState('')
   const [ idade, setIdade ] = useState('')

   
   async function handleAdd() {
/*
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
// Adiciona os dados de nome e idade (dos inputs) á coleção "users" na minha conta do firebase
// dentro do documento 3 (de maneira, com id fixo)
*/
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
      // Armazenamento de dados no firebase com id aleatório, por causa do "addDoc" e "collection"
      }
   

      // Buscar por dado especifico no banco de dados:
      async function resgatarUser() {

         const userRef = doc(db, "users", '2')

         await getDoc(userRef)
         // ou: 
         //await getDoc(doc(db, "users", "2"))
         .then((snapshot)=>{
            setNome(snapshot.data().nome)
            setIdade(snapshot.data().idade)
         })
         .catch(()=>{
            alert("erro")
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

    </div>
  );
}

export default App;
