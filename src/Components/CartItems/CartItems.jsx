import { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
function CartItems(){
    const {TotalCartAmount,all_product,cartItems,removeFromCart,cartType}=useContext(ShopContext)
    return(
        <div className='cartitems'>
            <h1>My Cart</h1>
           <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div>
           <hr/>
           {
            all_product.map((e)=>{
            if(cartItems[e.id]>0){
                if(cartType[e.id]=='small'){
                    return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>INR {e.small_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>INR {e.small_price*cartItems[e.id]}</p>
                        <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>removeFromCart(e.id)}/>
                    </div>
                    <hr/>
                   </div>
                }
                else if(cartType[e.id]=='medium'){
                    return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>INR {e.medium_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>INR {e.medium_price*cartItems[e.id]}</p>
                <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>removeFromCart(e.id)}/>
            </div>
            <hr/>
           </div>
                }
                else if(cartType[e.id]=='large'){
                    return <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>INR {e.large_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>INR {e.large_price*cartItems[e.id]}</p>
                <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>removeFromCart(e.id)}/>
            </div>
            <hr/>
           </div>
                }
           
                }
                else return null;
            })
           }
          <div className="cartitems-down">
            <div className="cartitems-total">
                <h2>Cart Totals</h2>
                <div className='cartitems-pricing'>
                    <div className='cartitems-total-item'>
                     <p>Subtotal</p>
                     <p>INR {TotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>INR {TotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed</button>
            </div>
            </div> 
        </div>
    )
}
export default CartItems