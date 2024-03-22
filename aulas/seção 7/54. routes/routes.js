import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Header from './components/Header'
import Error from './pages/Error'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/> { /* se no meu componente, eu quiser criar um atalho para um novo caminho (path), ele precisa estar aqui para também ter acesso as rotas */ }
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/sobre' element={ <Sobre/> } />

                <Route path='*' element={ <Error/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;