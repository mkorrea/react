import {Link} from 'react-router-dom'

function Home () {
    return (
        <div>
            Bem vindo a página Home <br/>
            <Link to='/sobre'>Sobre</Link>
        </div>
    )
};

export default Home;