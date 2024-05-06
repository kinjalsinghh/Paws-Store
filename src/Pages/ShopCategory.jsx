import { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';
import all_product from '../Components/Assets/all_product';
function ShopCategory(props){
    
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner}/>
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing possible results</span>
                </p>
            </div>
            <div className="shopcategory-products">
                {
                    all_product.map((item,i)=>{
                        if(props.category===item.category){
                            return <Item key={i} name={item.name} id={item.id} image={item.image} medium_price={item.medium_price} medium_old_price={item.medium_old_price}/>
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
        </div>
    )
}
export default ShopCategory