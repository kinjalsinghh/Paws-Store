import { Link } from 'react-router-dom';
import './Item.css'
function Item(props){
    return(
        <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}/></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
              INR {props.medium_price}
            </div>
            <div className='item-price-old'>
             INR {props.medium_old_price}
            </div>
        </div>
        </div>
    )
}
export default Item;