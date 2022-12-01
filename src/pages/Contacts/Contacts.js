import { useSelector } from 'react-redux';


import './Contacts.css';


function ContactsPage() {
    const count = useSelector((state) => state.counter);
    
    return (
        <div className='HeadingContacts'>
            <h1>Москва, Красная площадь</h1>
            
        </div>

    )
}
export default ContactsPage;