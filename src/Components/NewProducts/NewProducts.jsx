import './NewProducts.css'
import new_products from'../Assets/new_collections'
import Item from '../Items/Item'
function NewProducts(){
    return(
        <div className='newProducts'>
           <h1>NEW ARRIVALS</h1>
           <hr/>
           <div className='new-items'>
           {new_products.map((item,i)=>{
            return <Item key={i} name={item.name} id={item.id} image={item.image} medium_price={item.medium_price} medium_old_price={item.medium_old_price}/>
           })}
           </div>     
        </div>
    )
}
export default NewProducts