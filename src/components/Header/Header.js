import './Header.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';




function Header () {

    let [cartOpen, setCartOpen] = useState(false)

    const count = useSelector ((state) => state.counter);
    
    return (
        <header className='Header'>
            <h1>Интернет магазин</h1>
            <div className='SearchInputButton'>
                <input className='SearchInput'></input>
            </div>
            <Link to = {'contacts'} className = 'ContactsClass'>Контакты</Link>
            <div>
                { count }
            </div>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`ShopClassButton ${cartOpen && 'active'}`}/>
            {cartOpen && (
                <div className='Shop-Cart'>

                </div>
            )}
        </header>
    )
}

export default Header;