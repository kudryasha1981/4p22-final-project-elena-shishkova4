import './Header.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';







function Header () {

    
    const count = useSelector ((state) => state.counter);
    
    return (
        <header className='Header'>
            <h1>Интернет магазин</h1>
            <div className='SearchInputButton'>
                <input className='SearchInput'></input>
            </div>
            <Link to = {'contacts'} className = 'ContactsClass'>Контакты</Link>
            <Link to={'enter'} className = 'EnterClass'>Вход</Link>
        </header>
    )
}



export default Header;