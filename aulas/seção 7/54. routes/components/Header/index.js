import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1>Sujeito</h1>
            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
        </header>
    )
}

export default Header;