import { useState, useEffect } from 'react'
import { db, auth } from './firebaseConnections'
import { 
   doc, 
   setDoc, 
   collection, 
   addDoc, 
   getDoc, 
   getDocs, 
   updateDoc, 
   deleteDoc, 
   onSnapshot
} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
//                         getDocs, para resgatar todos os docs do banco de dados
import './app.css'

function App() {
   const [ nome, setNome ] = useState('')
   const [ idade, setIdade ] = useState('')

   const [ users, setUsers ] = useState([])
   const [ docId, setDocId ] = useState([]) 

   const [ email, setEmail ] = useState('')
   const [ senha, setSenha ] = useState('')
 

   useEffect( ()=> {
      async function loadUsers() {
         const unsub = onSnapshot(collection(db, 'users'), (snapshot) => {
            let usersList = []

            snapshot.forEach((doc)=>{
               usersList.push({
                  id: doc.id,
                  nome: doc.data().nome,
                  idade: doc.data().idade
               })
            })
            setUsers(usersList)
         })
      }
      
      loadUsers()
   }, [])

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

   // atualizar informação no banco de dados:
   async function atualizarUser() {
      const docRef = doc(db, 'users', docId)

      try { 
         await updateDoc(docRef, {
         nome: nome,
         idade: idade // states dos inputs
      })
         alert('atualizado com sucesso')
      } catch(error) {
         alert('erro ao atualizar: ' + error)
      }
   }

   async function excluirUser(id) {
      const docRef = doc(db, 'users', id)
      try {
         await deleteDoc(docRef)
      } catch(error){
         console.error(error)
      }
   } 








   async function novoUser() {
      await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
         setEmail('')
         setSenha('')
      })
      .catch((error) => {
         console.error(error)
      })
   }








   
   
  return (
    <div>
         <h1> Cadastro / Login </h1>
      <div className='container'>
         <label>Email</label>
         <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Digite seu email'
         />
         <label>Senha</label>
         <input
            value={senha}
            onChange={(e)=>setSenha(e.target.value)}
            placeholder='Digite sua senha'
         />
         <button onClick={novoUser}>Cadastrar</button>
      </div>
    
         <br/><br/>
         <hr/>
         <h1> Cadastro com banco de dados </h1>
      

      <div className='container'>
         <label>Id:</label>
         <input type='text' value={docId} onChange={ (e)=>setDocId(e.target.value)}/>
         
         <label>Nome:</label>
         <input type='text' value={nome} onChange={ (e)=>setNome(e.target.value)}/>

         <label>Idade</label>
         <input type='number' value={idade} onChange={(e)=>setIdade(e.target.value)}/>

         <button onClick={handleAdd}>Cadastrar</button>
         <button onClick={resgatarUser}>Resgatar info</button>

         <button onClick={atualizarUser} >Atualizar usuário</button>
      </div>

      <ul>
         {users.map( (user)=>{
            return(
            <li key={user.id}>
               <span> id: {user.id}</span> <br/>
               <span> nome: {user.nome} </span> <br/>
               <span> idade: {user.idade} </span> <br/>
               <button onClick={ () => excluirUser(user.id)}> Apagar usuario </button> <br/> <br/>
            </li> 
            )
         })}
      </ul>

    </div>
  );
}

export default App;
