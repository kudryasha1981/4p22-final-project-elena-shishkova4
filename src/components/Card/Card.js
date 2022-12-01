import './Card.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basketSlice';


function Card ({img, title, description, price, id}) {

  const dispatch = useDispatch();

  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(addToBasket(id))
  }

    return(
        <Link to={`products/${id}`} className="Card">
          <img className="Card-img" src={img} alt=""></img>
          <div className="Card-container">
            <h2 className="Card-title common-header">{title}</h2>
            <p className="Card-description">{description}</p>
            <div className="Card-price common-price">{price}</div>
            <div className='Card-button'>
              <Button onClick={onClick}>Купить</Button>
            </div>
          </div>
        </Link>
    )
}

export default Card;